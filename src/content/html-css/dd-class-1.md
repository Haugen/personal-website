---
title: "YRGO DD 2024 - Class 1"
publishedDate: 2023-09-24
updatedDate: 2024-09-26
---

## Exercises

### 1. Browser and Text Editor

Before we even get started, we need a browser and a text editor. For web development I personally prefer and recommend [Chrome](https://www.google.com/intl/en_sv/chrome), but you are free to use any browser you want.

The most popular text editor is [Visual Studio Code](https://code.visualstudio.com/) (VS Code). This is what I use, and recommend you use as well. If you already prefer another text editor, feel free to use that one.

As a first step, make sure you have a text editor and your preferred browser installed.

### 2. Get familiar with HTML and CSS

Two introduction articles are available for this first class.

1. [An introduction to HTML](html-intro)
2. [An introduction to CSS](css-intro)

Whether you are completely new to HTML and CSS, or have built websites with it before, I recommend reading through both of them.

### 3. Setup your first website

So we're done reading. Let's start building! Create a new folder somewhere on your computer for this web portfolio project we'll be working on during this course. In it, create a file called `index.html`. This will be the homepage of your website. Copy the template below to your new HTML file:

<!-- prettier-ignore -->
```html
<!DOCTYPE html>
<html lang="sv">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Portfolio</title>
  </head>
  <body></body>
</html>
```

This setup is a reasonable start for any website. Open the `index.html` file in your browser. The page is completely blank, but now we're in a spot to start adding some content to it.

**Bonus:** If you're curious, look up what the two `meta` tags included in `head` are for.

### 4. Adding content

Now that we have an empty website, we can start adding some content to it. Populate your site with all of the following:

1. Add an `<h1>` as a page title.
1. Update the `title` field inside `head` to match your page title.
1. Find an image you want to use for your portfolio and move it inside an "images" folder in your project. Output the image using an `<img>` tag under your page title. Also add an `alt` text to the image.
1. Add a sub title, an `<h2>` under your image.
1. Add a paragraph (`<p>`) or two under your sub title.
1. Add a link under your paragraph(s). You can use a random URL, or "#" as `href` for now.

### 5. Including a stylesheet

Now that we have some content on the website, let's start styling it.

1. Create a new stylesheet called `styles.css` and import it inside the `head` tag in your HTML file.
1. The default background color of `body` is white (the hexadecimal value `#FFFFFF`). Change the `background-color`` of `body` to something else and confirm in the browser that it works.

### 6. Resetting and adding default styles

Once we have a stylesheet connected to our website, let's look at resetting some browser default styles.

1. Reset the margin (use `margin: 0`) on the `body` element.
1. Links are blue and underline by default. Change this to something else. Perhaps just change the color, or apply more styling if you want.
1. Add a default hover effect on your links.
1. `<h1>`, `<h2>` and `<p>` also have default margins. Start by resetting the margins for these elements, and then add your own suitable `margin-bottom` to each one of them.

### 7. Putting your content in a container

We have some content, and we've added some styling, but all of the content is aligned to the top left of the screen. Let's see if we can put all of it in a container and center it on the page.

1. Wrap all of HTML in a `<main>` tag and give it the class `container`.
1. Style `.container` to have a `max-width` and use `margin: 0 auto` to center it on the page.

**Tips:** You can apply `max-width: 100%` to all `img` tags by default, not allowing images to grow larger than their containers.

### 8. Done?

If you're done and feel you've familiarized yourself with HTML, CSS and the browser dev tools, feel free to work on a design for your portfolio. Browse the web for inspiration, or start preparing something in Figma.

In the coming weeks we will look at Typography and Layout. If you want to start looking into this already you can take a look at [importing Google Fonts](https://fonts.google.com/) or using [CSS Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) to style the layout of your site. We'll go over this together in class, so no need to start with this yet unless you want to.
