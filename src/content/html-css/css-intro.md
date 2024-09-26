---
title: "An introduction to CSS, Cascading Style Sheets"
metaDescription: "CSS describes how HTML should look. Everything visual you see on the web, colors, fonts, layouts etc, are described with CSS. In this straight forward introduction you'll get to know how CSS works, and how you can use it to style your website."
publishedDate: 2023-09-18
updatedDate: 2024-09-26
---

If HTML describes what things are, CSS tells the browser how things should look. We apply CSS to our HTML, i.e, we apply styling to our structure.

A snippet of HTML can be made to look in virtually any way (within the limits of what our browsers can do) with CSS.

This intro is long, but it will give you everything you need to get off to a good start in your CSS journey.

## The building blocks of CSS

Let's take a look at the following CSS declaration:

```css
p {
  color: #0000ff;
}
```

The first part of the code above is the _selector_. This targets the elements to be styles. In the example above, the selector is `p`, which targets every `<p>` tag on your site.

Between the curly brackets we have a _declaration_. The left side of the colon is called the `property` (color) and the right side of the colon is called a `property value`.

Including the CSS above on your website will target every `<p>` tag on your site, and change the text color to the hexadecimal color value `#0000ff`.

## How to apply CSS

Before we go into more details on how to style HTML with CSS, let's look at _where_ we put our CSS. There are three ways to apply CSS to our HTML.

### 1. A separate .css file

CSS can be written in a .css file, for example `style.css`, and imported into the HTML document. We import CSS files within the `<head>` section, using the `<link>` tag with the **attributes** `rel` and `href`, and the HTML for doing that looks like this:

```html
<link rel="stylesheet" href="style.css" />
```

`href` is the file path to your external stylesheet. If the file is in a subfolder called "assets" the value of `href` will instead look like `assets/style.css`.

Using a separate CSS file is the most common way to include CSS on your website, and is the recommended way in this course.

### 2. Directly inside `<head>`

Instead of keeping CSS in a separate file, you can also include it directly inside `<head>`, by opening and closing a `<style>` tag. The HTML for that looks like this:

```html
<head>
  <style>
    body {
      background-color: #00ff00;
    }
  </style>
</head>
```

### 3. Inline styling

CSS can also be applied _inline_, directly on any HTML tag, using the `style` attribute, like this:

```html
<div style="color: #ff0000">Content</div>
```

For the remainder of this course, we'll work with option 1, a separate .css file.

## Selectors

Back to the CSS itself.

Selectors (the piece of CSS that describes _which_ HTML to apply styling to) are very flexible which allows us to always target exactly what we want in the HTML. We can always target HTML elements directly, like in the earlier example. The same goes for other tags like `div`, `h2`, `a` etc. But sometimes it's too generic to target every `div` or every `h2` on our site. To apply styling more narrowly, we can use the `class` attribute.

### Class selector

Every HTML tag allows for an attribute called `class`. Take the following example:

```html
<div class="special-content">Content</div>
```

Adding your own class name in a HTML element lets you target this specifically in your CSS. The selector for this looks like this:

```css
.special-content {
  color: #ff0000;
}
```

When targeting class names, you start your selector with a dot. Note that you can add the same class on as many HTML elements as you want, and there is no limit to how many class names you can add to a single element.

**The same class can be added to multiple HTML elements, and every HTML element can have as many classes as you need.**

```html
<p class="yrgo">This p tag has the class "yrgo"</p>
<p class="yrgo another-class">
  This p tag also has the class "yrgo", together with a second one.
</p>
<p class="yrgo another-class many-classes one-more">
  This p tag has four classes
</p>
```

### Nesting selectors

Sometimes you need to be even more specific in your targeting. CSS selectors can be _nested_, allowing you to be as specific as you need to target exactly what you want. For example, lets say you want to apply styling to every `<p>` tag inside a specific section on your site. You might have the following structure:

```html
<div class="my-container">
  <p>A paragraph</p>
  <p>Another paragraph</p>
</div>
```

You can then target all `<p>` tags inside `my-container` with the following selector:

```css
.my-container p {
  font-size: 18px;
}
```

There is no limit to how deep you can nest your selectors, but its reasonable to not be more specific that you need. This will make it easier to maintain and reason about your CSS when you come back to it later.

### Beyond the basics

CSS has a lot more features when it comes to building your selectors and targeting exactly what you want to style. With the two basic concepts mentioned above, adding classes to HTML elements, and nesting selectors, you'll be able to do most things you need. But a few more things on selectors are worth mentioning.

```css
/* Target everything. Can be useful when setting base styles 
for a whole site */
* {
}

/* Target elements with the class container, but only if
it's a div */
div.container {
}

/* Target only DIRECT <p> children of my-container. Deeply 
nested <p> tags will not be affected */
.my-container > p {
}

/* pseudo-selectors can be used to target specific states of an 
element. In this case, we target <a> tags with a class name of 
my-link when they are being hovered */
a.my-link:hover {
}
```

As you learn more about CSS, you'll discover further ways to target what you need using more selector rules.

## The box model

The CSS box model refers to some basic layout properties all HTML elements have. It consists of:

- **Content**. The content of the box, where the text, images etc appears.
- **Padding**: Space _within_ the box. A distance between the content and the edge of the box.
- **Border**: The border of the box. Non-existent by default, but can be styled with CSS.
- **Margin**: Space _outside_ the box. Distance between the box and other sibling boxes.

`padding`, `border` and `margin` are all _properties_ in CSS. For example, the following CSS will target all three on an element with the class "box"

```css
.box {
  margin: 10px;
  padding: 10px;
  border: 1px solid #000000;
}
```

### Shorthand CSS

In the example above, the box will include margin and padding in _all four directions_, top, right, bottom and left. To target single directions there are properties called `margin-top`, `margin-right`, `margin-bottom` and `margin-left` (same for `padding`). You can also use so called _shorthand properties_ (`border` above is actually using shorthand) and target the four directions individually. For example

```css
/* 10px top, 8px right, 12px bottpom, 4px left */
margin: 10px 8px 12px 4px;

/* 10px top and bottom (y axis), 8px left and right (x axix) */
margin: 10px 8px;

/* 10px top, 8px left and right (x axix), 4px bottom */
margin: 10px 8px 4px;
```

Shorthand CSS can be used with many other properties, which you'll encounter throughout the course.

### Block vs. inline

In general, there are two ways for a HTML element to be displayed on your site. As a block, or inline. Each element has a default way of displaying itself. For example, `<div>`, `<p>` and `<h1>` are all block elements, while `<img>`, `<span>` and `<a>` are inline.

Block elements will take up all available horizontal space (the full width of its parent), forcing itself to be displayed on it's own line. Inline elements will appear on the same line. You will notice more of this behavior as you build your site. Worth remembering is that you can use CSS to change the default value using the `display` property and `block` or `inline` (there are more values as well) as property value.

## Common properties

CSS has more than 200 properties to change virtually any appearance you can imagine on your website. Many CSS properties are self-explanatory, and you can often easily find the property you're looking for by describing what you want to do in a Google search (for example, searching "CSS rounded corner")

To get started, here is a list of some of the most common and useful properties (excluding `margin`, `padding` and `border` described earlier in this article):

| Property           | Description                                                  |
| ------------------ | ------------------------------------------------------------ |
| `width`            | Width of an element                                          |
| `height`           | Height of an element                                         |
| `color`            | Text color                                                   |
| `background`       | Sets the background. Can be for example a color, or an image |
| `background-color` | Background color                                             |
| `font-size`        | Font size                                                    |
| `font-family`      | Which font family to use                                     |
| `font-weight`      | Text weight. Light, normal, **bold**                         |

CSS has a number of ways to set distances and sizes, for example `margin` or `font-size`. To get started, the easiest way is to use pixel values (for example `20px`). We'll discover other units than pixels further down the line.

## User agent styles

When first creating and HTML document, adding elements to the `body` tag, and viewing it in the browser, you'll see some default styling. Headers will have larger font sizes, paragraphs will have margins, links will be underline and have a color, etc. These are default CSS applied by the browser itself. It's not uncommon to override, or "reset", these default values (using for example the `*` selector) early in your stylesheet. It's not strictly necessary, but it's good to be aware of that each browser applies some styling by default.

## Conclusion

CSS applies styling to our HTML. We use _selectors_ to target what we want to apply styling to, and a combination of _properties_ and _property values_ to manage the look of our site. HTML elements can behave in one of two ways, `inline` or as a `block`. Many CSS properties are self explanatory, and can often be found by a Google search. The most common properties are for box layout, colors, text sizes and text style.
