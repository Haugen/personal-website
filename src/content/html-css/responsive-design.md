---
title: "A brief introduction to responsive design with media queries"
metaDescription: "People browse the web with all kinds of devices. Today it's important that website adapt, look good and work properly on phones, tablets, laptops and larger desktop screens. This is called responsive design, and can be achieved using so called media queries."
publishedDate: 2023-11-01
updatedDate: 2023-11-02
---

In the early days of the web, websites only really looked good and worked properly on the computer screens used at that time. When smartphones became popular, many websites built two versions of their UI. One suited for desktop, and one suited for mobile. You sometimes still see this today, ending up on https://m.example.com/ instead of https://www.example.com/ when viewing it on your phone. As the popularity of smartphones grew it became evident that the web platform had to evolve and adapt to it.

For more in depth functionality, check out [the official documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries).

## Introducing Media Queries

CSS media queries is part of the CSS3 release and arrived on the web in 2012. Since then, CSS files have been able to use this feature to only apply CSS when certain conditions are met. Let's take a first look at the syntax.

```css
@media screen {
  body {
    background-color: #fafafa;
  }
}
```

We start every media query with the `@media` keyword. In the example above, the only filtering we're doing here is looking at which _media type_ to apply CSS to. `screen` refers to, well, screens, the normal media type when we browse the web. Other common values are `print` and `all`. Although not required, you almost always see media queries start with `@media screen`, followed by more conditions.

Just like with CSS selector, a media query opens up a "scope" with curly bracket `{}` and only apply the CSS inside those curly brackets when the condition are met. Let's look at more examples to make more sense of this.

## Targeting a Specific Viewport Width

The most common use case with media queries is applying styling based on the _viewport width_. The viewport is the whole viewable document of a website. We've briefly seen viewport width before, when using it as a unit value. For example, `width: 80vw` will set the width to 80% of the viewport width.

When used in a media query, it can look like this:

```css
@media screen and (min-width: 600px) {
  h2 {
    font-size: 2.4rem;
  }
}
```

In this example, the media query conditions are met if the media type is a screen **and** the viewport width is _at least_ `600px` wide. Only then will the CSS inside the media query apply. In this case, setting the font size on all `<h2>` tags.

Instead of `min-width`, we can also use `max-width`. These can be combined to declare even more narrow media queries, applying CSS only when the viewport is _between_ two values:

```css
@media screen and (min-width: 600px) and (max-width: 800px) {
  .container {
    margin: 20px;
  }
}
```

Here we apply `margin` on everything with a `container` class **only** when the viewport is at least `600px` wide, but not wider than `800px`.

## A Larger Example

So how and where do we apply this together with the rest of our CSS? Let's look at a larger example, with some default CSS and a few media queries that apply more CSS. With "default" CSS I mean CSS that is not wrapped with any media query, just like all the CSS you've been writing up until this point.

```css
* {
  box-sizing: border-box;
}

body,
h1,
h2,
p {
  margin: 0;
}

h1 {
  font-size: 3rem;
}

h2 {
  font-size: 2.5rem;
}

@media screen and (min-width: 480px) {
  h1 {
    font-size: 3.5rem;
  }

  h2 {
    font-size: 3rem;
  }
}

@media screen and (min-width: 768px) {
  h1 {
    font-size: 4rem;
  }

  h2 {
    font-size: 3.5rem;
  }
}
```

## Mobile First

The most popular strategy today on how to organize your CSS when it comes to responsive design is called "Mobile first". This means that the default CSS we write is the styling for how we want our website to look on phones. As the screen grows larger, we override and apply more CSS with media queries to change our layout, sizes and other properties. In a mobile first approach, your media queries will use `min-width`, just like in the example in the previous section.

On the other hand, a "desktop first" approach would use your desktop styling as the default CSS. Media queries would then use `max-width` to only apply overrides and more CSS on smaller screens.

## Your Approach

Since we've only worked from a desktop point of view so far, feel free to take a "desktop first" approach if this is new to you. You could focus on only changing some styling, like using `flex-direction: column;` instead of `flex-direction: row` for smaller viewports. If you want more of a challenge, try using a "mobile first" approach.
