import cn from "clsx";
import type { ComponentChildren } from "preact";

type Props = {
  onClick?: () => void;
  children: ComponentChildren;
};

export default function Button({ children }: Props) {
  return (
    <button
      class={cn(
        "text-sm text-zinc-900 uppercase font-bold px-6 py-3 rounded-sm",
        "bg-emerald-300 transition duration-300 overflow-hidden",
        "relative group inline-flex items-center justify-center",
        "active:scale-[0.95]"
      )}
    >
      <span
        class={cn(
          "absolute w-0 h-0 transition-all duration-300 ease-out bg-emerald-800",
          "rounded-full group-hover:w-44 group-hover:h-44 opacity-10"
        )}
      ></span>
      <span class="relative">{children}</span>
    </button>
  );
}
