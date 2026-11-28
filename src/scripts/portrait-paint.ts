// Portrait easter egg: drag the portrait around the page. It tilts with the motion and paints the background behind
// the text, with a brush as wide as the zoomed portrait, in the next colour from a soft palette each time. On release
// it springs back home (upright) and the paint fades away. It also handles the zoom while pressed on touch
// ([data-zoom]); on mouse, hover zooms it (CSS).
// Each drag gets its own fixed, viewport-sized canvas (so a new drag can start while the last one fades);
// strokes are kept in document coordinates and redrawn on scroll and resize.
//
// Loaded lazily by index.astro (when the browser is idle, or at the first hover/press on the portrait), so none of
// this is downloaded or run before the first render. A press that arrived before it loaded is passed in as `pending`.

type Point = [number, number];
type Stroke = {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  points: Point[];
  radius: number;
  colour: string;
};
type Drag = {
  id: number;
  start: Point; // pointer at press, document coordinates
  base: Point; // the portrait's offset at press (non-zero if caught mid-spring)
  home: Point; // centre of the zoomed portrait at rest, document coordinates
  arm: Point; // from the transform origin to the zoomed portrait's centre (see pose)
  radius: number;
  client: Point; // latest pointer position, viewport coordinates (to follow along on scroll)
  offset: Point; // where the portrait's centre is now, relative to home
  tilt: number; // degrees
  vx: number; // smoothed horizontal speed, px/ms
  lastX: number;
  lastT: number;
  frame: number; // timestamp of the last tilt frame
  raf: number;
  stroke?: Stroke; // created once the pointer has moved past the threshold
};

export function init(portrait: HTMLElement, pending?: PointerEvent) {
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
  const root = document.documentElement;
  const threshold = 4; // px of movement before a press turns into a drag, so a click leaves no paint
  const tiltPerSpeed = 8; // degrees per px/ms of horizontal speed
  const maxTilt = 12; // degrees
  const strokes = new Set<Stroke>();
  let drag: Drag | null = null;
  let spring: Animation | null = null;
  let paintCount = 0;

  const css = (name: string) => getComputedStyle(portrait).getPropertyValue(name).trim();
  const clamp = (v: number, min: number, max: number) => Math.min(Math.max(v, min), Math.max(min, max));

  // The transform origin is the portrait's left edge on narrow screens, so rotating alone would swing the
  // circle around that point. pose() turns "centre offset from home + tilt" into translate and rotate values
  // that keep the rotation about the portrait's own centre: translate = offset + arm − rotated arm.
  const pose = ([x, y]: Point, tilt: number, [ax, ay]: Point) => {
    const a = (tilt * Math.PI) / 180;
    const cos = Math.cos(a);
    const sin = Math.sin(a);
    return {
      translate: `${x + ax - (ax * cos - ay * sin)}px ${y + ay - (ax * sin + ay * cos)}px`,
      rotate: `${tilt}deg`,
    };
  };

  // Origin-to-centre vector and the resting centre of the zoomed portrait. Offsets ignore transforms, so this
  // is stable even if the zoom transition is still running.
  const geometry = (zoom: number) => {
    let x = 0;
    let y = 0;
    for (let el: HTMLElement | null = portrait; el; el = el.offsetParent as HTMLElement | null) {
      x += el.offsetLeft;
      y += el.offsetTop;
    }
    const [ox, oy] = getComputedStyle(portrait).transformOrigin.split(" ").map(parseFloat);
    const arm: Point = [(portrait.offsetWidth / 2 - ox) * zoom, (portrait.offsetHeight / 2 - oy) * zoom];
    const home: Point = [x + ox + arm[0], y + oy + arm[1]];
    return { arm, home };
  };

  // The current pose (mid-spring, or at rest) read back as a centre offset and a tilt: the inverse of pose().
  const currentPose = ([ax, ay]: Point) => {
    const style = getComputedStyle(portrait);
    const [tx = 0, ty = 0] = style.translate.split(" ").map((v) => parseFloat(v) || 0);
    const tilt = parseFloat(style.rotate) || 0;
    const a = (tilt * Math.PI) / 180;
    const offset: Point = [
      tx - ax + (ax * Math.cos(a) - ay * Math.sin(a)),
      ty - ay + (ax * Math.sin(a) + ay * Math.cos(a)),
    ];
    return { offset, tilt };
  };

  const draw = (stroke: Stroke, from: Point, to: Point) => {
    const { ctx } = stroke;
    const dpr = stroke.canvas.width / stroke.canvas.clientWidth || 1;
    ctx.setTransform(dpr, 0, 0, dpr, -scrollX * dpr, -scrollY * dpr);
    ctx.beginPath();
    ctx.moveTo(...from);
    ctx.lineTo(...to);
    ctx.stroke();
  };

  const render = (stroke: Stroke) => {
    const { canvas, ctx, points, radius } = stroke;
    const dpr = devicePixelRatio || 1;
    const width = Math.round(canvas.clientWidth * dpr);
    const height = Math.round(canvas.clientHeight * dpr);
    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width; // also clears it and resets the context state
      canvas.height = height;
    } else {
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, width, height);
    }
    ctx.lineWidth = radius * 2;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = stroke.colour;
    points.forEach((point, i) => draw(stroke, points[i - 1] ?? point, point));
  };

  // Each drag takes the next colour from the palette in turn, so the same one never comes twice in a row.
  const newStroke = (radius: number): Stroke => {
    const palette = css("--portrait-paints").split(",").map((colour) => colour.trim());
    const canvas = document.createElement("canvas");
    canvas.className = "portrait-paint";
    canvas.setAttribute("aria-hidden", "true");
    document.body.prepend(canvas);
    const stroke: Stroke = {
      canvas,
      ctx: canvas.getContext("2d")!,
      points: [],
      radius,
      colour: palette[paintCount++ % palette.length],
    };
    strokes.add(stroke);
    render(stroke);
    return stroke;
  };

  const fadeOut = (stroke: Stroke) => {
    const fade = stroke.canvas.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: reducedMotion.matches ? 300 : 900,
      delay: 120,
      easing: "ease-in-out",
      fill: "forwards",
    });
    fade.finished.then(() => {
      stroke.canvas.remove();
      strokes.delete(stroke);
    });
  };

  // Leans into the horizontal motion, like a card held at the top, and eases upright again when the pointer
  // rests. Runs every frame while dragging so it can settle even when no pointer events arrive.
  const tilt = (now: number) => {
    if (!drag) return;
    const dt = Math.min(now - drag.frame, 50);
    drag.frame = now;
    if (now - drag.lastT > 50) drag.vx *= Math.exp(-dt / 80);
    const target = clamp(drag.vx * tiltPerSpeed, -maxTilt, maxTilt);
    drag.tilt += (target - drag.tilt) * (1 - Math.exp(-dt / 70));
    Object.assign(portrait.style, pose(drag.offset, drag.tilt, drag.arm));
    drag.raf = requestAnimationFrame(tilt);
  };

  // Moves the portrait to follow the pointer (kept inside the viewport) and paints where it is.
  const follow = () => {
    if (!drag) return;
    const x = drag.client[0] + scrollX;
    const y = drag.client[1] + scrollY;
    if (!drag.stroke && Math.hypot(x - drag.start[0], y - drag.start[1]) < threshold) return;

    // Kept far enough from the edges that even the fully tilted (square) box stays inside, so no scrollbars
    const r = drag.radius;
    const tiltRad = (maxTilt * Math.PI) / 180;
    const reach = r * (Math.cos(tiltRad) + Math.sin(tiltRad));
    const cx = clamp(drag.home[0] + drag.base[0] + x - drag.start[0], scrollX + reach, scrollX + root.clientWidth - reach);
    const cy = clamp(drag.home[1] + drag.base[1] + y - drag.start[1], scrollY + reach, scrollY + root.clientHeight - reach);
    drag.offset = [cx - drag.home[0], cy - drag.home[1]];

    // Speed from the clamped position, so pushing against the edge of the window doesn't tilt it
    const now = performance.now();
    const dt = Math.max(now - drag.lastT, 8);
    drag.vx = drag.vx * 0.5 + ((cx - drag.lastX) / dt) * 0.5;
    drag.lastX = cx;
    drag.lastT = now;
    Object.assign(portrait.style, pose(drag.offset, drag.tilt, drag.arm));

    if (!drag.stroke) {
      drag.stroke = newStroke(r);
      root.dataset.portraitDragging = "";
      if (!reducedMotion.matches) {
        drag.frame = now;
        drag.raf = requestAnimationFrame(tilt);
      }
    }
    const { points } = drag.stroke;
    const point: Point = [cx, cy];
    draw(drag.stroke, points.at(-1) ?? point, point);
    points.push(point);
  };

  // A damped spring from where it was dropped back to its place, straightening up on the way: a quick snap
  // with a little overshoot. Sampled into keyframes, like dropOut above.
  const springHome = (offset: Point, tilt: number, arm: Point) => {
    if (reducedMotion.matches || (!offset[0] && !offset[1] && !tilt)) return;
    const duration = 450;
    const zeta = 0.65; // damping ratio: lower = more bounce (0.65 overshoots ~7%)
    const omega = 2 * Math.PI * 3.2; // natural frequency: higher = snappier
    const omegaD = omega * Math.sqrt(1 - zeta * zeta);
    const steps = 50;
    const frames: Keyframe[] = [];
    for (let i = 0; i <= steps; i++) {
      const t = (i / steps) * (duration / 1000);
      const left =
        i === steps
          ? 0
          : Math.exp(-zeta * omega * t) * (Math.cos(omegaD * t) + ((zeta * omega) / omegaD) * Math.sin(omegaD * t));
      frames.push(pose([offset[0] * left, offset[1] * left], tilt * left, arm));
    }
    spring = portrait.animate(frames, { duration, easing: "linear" });
  };

  const press = (event: PointerEvent) => {
    if (drag || !event.isPrimary || event.button !== 0) return;
    event.preventDefault();
    const zoom = parseFloat(css("--portrait-zoom")) || 1;
    const { arm, home } = geometry(zoom);
    const { offset, tilt: startTilt } = currentPose(arm); // non-zero if it was caught while springing home
    spring?.cancel();
    spring = null;
    Object.assign(portrait.style, pose(offset, startTilt, arm));
    drag = {
      id: event.pointerId,
      start: [event.clientX + scrollX, event.clientY + scrollY],
      base: offset,
      home,
      arm,
      radius: (portrait.offsetWidth * zoom) / 2,
      client: [event.clientX, event.clientY],
      offset,
      tilt: startTilt,
      vx: 0,
      lastX: home[0] + offset[0],
      lastT: performance.now(),
      frame: 0,
      raf: 0,
    };
    try {
      portrait.setPointerCapture(event.pointerId);
    } catch {} // a pending press whose pointer is no longer active: it just doesn't get captured
    delete portrait.dataset.dropped;
    portrait.dataset.zoom = "";
  };
  portrait.addEventListener("pointerdown", press);

  // [data-dropped] (set on release, see global.css) holds the portrait at normal size until the pointer really is
  // over it again, or has left it: from then on :hover is up to date.
  const settled = () => delete portrait.dataset.dropped;
  portrait.addEventListener("pointerleave", settled);

  portrait.addEventListener("pointermove", (event) => {
    if (event.pointerId !== drag?.id) return settled();
    drag.client = [event.clientX, event.clientY];
    follow();
  });

  const release = (event: PointerEvent) => {
    if (event.pointerId !== drag?.id) return;
    const { stroke, offset, tilt: endTilt, arm, raf } = drag;
    drag = null;
    cancelAnimationFrame(raf);
    delete portrait.dataset.zoom;
    delete root.dataset.portraitDragging;
    // Dragged away with a mouse or trackpad: shrink now rather than whenever the browser updates :hover
    if (stroke && event.pointerType === "mouse") portrait.dataset.dropped = "";
    portrait.style.translate = "";
    portrait.style.rotate = "";
    springHome(offset, endTilt, arm);
    if (stroke) fadeOut(stroke);
  };
  portrait.addEventListener("pointerup", release);
  portrait.addEventListener("pointercancel", release);

  // A mouse wheel scroll mid-drag: keep the portrait under the pointer and the paint stuck to the page.
  addEventListener("scroll", () => {
    strokes.forEach(render);
    follow();
  }, { passive: true });
  addEventListener("resize", () => strokes.forEach(render));

  if (pending) press(pending);
}
