---
title: "Animations, Transitions & Other Fun Effects"
metaDescription: "Once you have the overall layout and style figured out for your website, it's always nice to add some spice to it. Detailing your site with animations, effects, transitions and more can make a big difference in the overall experience of your website"
publishedDate: 2023-11-08
---

Once you have the overall layout and style figured out for your website, it's always nice to add some spice to it. Detailing your site with animations, effects, transitions and more can make a big difference in the overall experience of your website.

## Transitions

The `transition` CSS property controls how an element will [animate between different states](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transitions/Using_CSS_transitions). This is commonly used as a hover effect. Imagine you have a link, with a text color and a background color. On hover, you change both the `color` and `background-color` properties to different values. Including `transition`, you can control how the browser will animate between the different values.

An example of including a transition on a link can look like this:

```css
.my-link {
  color: white;
  background-color: black;
  transition: all 500ms linear 100ms;
}

.my-link:hover {
  color: black;
  background-color: white;
}
```

The `transition` property above takes up to **four** values.

1. `all` describes the properties to animate. Using `all` will animate all properties when they change state, in this case `color` and `background-color`. You can specify individual properties as well, but `all` is commonly used.
1. `500ms` is the [animation duration](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration). Normally specified in `ms` (milliseconds) or `s` (seconds).
1. `linear` describes the [timing function](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function), or "curve", of the animation.
1. `100ms` is an optional delay for the animation. In most cases, only the first three values are included.

Do you have some hover effects on your website? Try adding `transition` and play around with the values to see the effects.

## Transform

`transform` can perform all kinds of [transformations on a **block** element](https://developer.mozilla.org/en-US/docs/Web/CSS/transform). It's worth mentioning here that you can use `display: inline-block` on for example a link to keep it as an inline element, but still make it behave like a block element in some regard. For example, this will enable it to transform. Transforms are also commonly triggered by a `:hover`.

There are [quite a number of different transformations](https://developer.mozilla.org/en-US/docs/Web/CSS/transform#syntax) to choose from. Some normal ones are `rotate`, `scale` and `translate`. Let's extend our example from above.

```css
.my-link {
  color: white;
  background-color: black;
  transition: all 500ms linear 100ms;
}

.my-link:hover {
  color: black;
  background-color: white;
  transform: scale(1.1) translateX(10px);
}
```

On hover, our link will now scale and become 110% of its original size as well as "translate" (move) 10px on the x-axis (horizontal). To get these transformation to be animated, they also need to be combined with the `transition` property. Since we specified to transition `all` properties, our links now has even more animations when hovered.

## Gradients

Instead of a plain background-color, why not use a gradient? CSS has a number of [built in functions for creating gradient background](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_images/Using_CSS_gradients), and can even be combined with background images. There are even [useful tools](https://cssgradient.io/) out there on the Internet to help create gradients and generate the CSS code for you.

## Box shadow

You can apply a [shadow effect on block elements](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) using the `box-shadow` CSS property. A common usage might look like this:

```css
.box-shadow-effect {
  box-shadow: 10px 5px 5px pink;
}
```

The first two values, `10px` and `5px`, describes the offset of the shadow in the x and y axis. You can use both positive and negative values here. The third value `5px`, describes the blur radius. The higher the values, the more "spread out" and blurry your box shadow will be. The forth and last value, `pink`, sets the color of your shadow.

Try adding the property to an element on your own site and play around with the values. Maybe you can even use `transition` to animate the `box-shadow` on hover?

## Bonus

- Control the color and background color of text marked with your mouse cursor with the [`::selection` pseudo selector](https://www.w3schools.com/howto/howto_css_text_selection.asp)
- [CSS has quite a few filters](https://developer.mozilla.org/en-US/docs/Web/CSS/filter) built in, which can be applied to most elements. Typically used on images, but can often add interesting effects to large pieces of text as well, like headlines.
- With `mix-blend-mode` you can [control how the content of an element should blend](https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode) with its surrounding colors.
- Similar to box-shadow, you can use `text-shadow` to [add shadow effects to text](https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow).
- You know the little icon shown in the browser tab for a website? That's the websites `favicon`, and if you want, you can [add your own](https://www.w3schools.com/html/html_favicon.asp). Favicons are usually 16x16 pixels in size.
