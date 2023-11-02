---
title: "Organizing your code"
metaDescription: "As your CSS and HTML files grow larger, they become harder to manage and maintain. This is a short article on how to split your code into multiple files to help keep things more organized."
publishedDate: 2023-11-01
---

As our HTML and CSS files grow, they become harder to maintain and keep organized. This is hard to avoid, but there are some things we can do to help keep things manageable.

## The "Cascading" Part of CSS

As you might remember, CSS stand for Cascading Style Sheets. Style Sheets are the actual .css files that you are writing, but what is this "Cascading" part?

Cascading refers to how the browser decides what styling to apply when multiple CSS selectors define the same CSS property on the same element. Take the following example:

```html
<h2 class="demo">Digital Design</h2>
```

```css
.demo {
  color: blue;
}

h2 {
  color: red;
}
```

What color will the `<h2>` element be? Blue or red? This is very common for larger project, that an element has the same CSS property defined for it. The browser need rules to determine which property value to pick. The algorithm that decides this is complicated, but there are two main things to keep in mind:

1. Order
1. Specificity

### Order

In general, the order that we place our CSS selectors matter. In most cases, the browser will pick value of the **last** occurrence of a property. This means that the CSS you write further down in your CSS file will _override_ CSS you write further up in the CSS file.

### Specificity

Just like with everything in life, the reality is a bit more complicated. Other than order, the browser also takes into account how _specific_ a selector is. The most important thing to keep in mind here are

1. class selectors are more specific than element selectors.
1. The more you "nest" your selector, the more specific it gets.

Looking at our example above again, is our `<h2>` tag blue or red? Looking at the order, we might thing it will be red. But since the `.demo` selector is more specific than the `h2` selector, the element will in this case be blue.

### Another Example

Let's look at another example to better understand what I mean with "nesting" your selectors.

```html
<div class="container">
  <h2 class="title">Yrgo</h2>
</div>
```

There are many ways we can target these element with selectors. Here are a number of ways, ordered from least specific at the top, to most specific at the bottom.

```css
h2 {
  color: black;
}

.title {
  color: black;
}

h2.title {
  color: black;
}

/*
The following selectors are "nested" and more specific,
as they target elements inside other elements.
*/

div .title {
  color: black;
}

.container .title {
  color: black;
}

.container h2.title {
  color: black;
}
```

### Overriding the Default Behavior

Although not recommended for most situations, there is a keyword we can use in CSS to override the default way that a browser picks the property value.

```css
.demo {
  color: blue;
}

h2 {
  color: red !important;
}
```

If we add `!important` at the end of a value, we tell the browser to "skip your normal rules and pick this value no matter what". With this addition, our `<h2>` tag from the first example will now be red instead of blue.

As mentioned, we try to avoid using `!important`, and instead try to organize our code in a way for the browser to do its thing properly.

## General advice

In trying to keep your CSS organized there are a couple of things you can keep in mind.

1. **Group things together.** If you have a class called `.project`, and multiple selectors targeting different elements inside this class, keep them grouped together in the code.
1. **Add comments.** You can include comments in your CSS. This will not be processed by the browser, and is just there as notes for yourself. You can add comments in a CSS file with the following syntax `/* My comment */`.
1. **Naming things.** Naming your classes properly is always difficult. "What do I call this div here?". Trying to give elements reasonable class names can pay off in terms of maintainability as your files grow.
1. **Don't repeat yourself.** Like we saw [in this Codepen](https://codepen.io/whitefluffy/pen/xxMbmKm) we can add the same class name to multiple elements as well as adding multiple classes to a single element. Trying to avoid repeating code will help reduce the amount of code in your CSS files and make it easier to manage.

## Splitting Code Into Multiple Files

Up until this point, we've worked exclusively with one HTML file and one CSS file, potentially together with images in a folder. Your project structure might look like this:

```
images/
  cat.jpg
  profile-pic.png
index.html
styles.css
```

### More HTML Files

But what if we want more than just one front page on our website? As described in [the assignment for this course](https://docs.google.com/document/d/1ah0wPtAMyoRKgjOmPRN4DY8WR4ytXYDUGoSUOveCvEE/edit#heading=h.iggbkuwt114n) we want at least two pages. A starting page (our index.html) and a project page. And perhaps you want a third page, and "About" or a "Contact" page or something. Creating new pages are as easy as creating new HTML file and naming them something different. The name of the file, for example `about.html`, will also be the URL for the page. Once you create a new HTML file in VS Code, you can generate some boilerplate code by typing `!` followed by <kbd>Enter</kbd> in your HTML file. Once you've created another file, you can link between then with something like this (make sure your new HTML files are in the same folder as `index.html`):

```html
<nav>
  <a href="/">Home</a>
  <a href="/about">About</a>
</nav>
```

We probably want the "Heading" or "Navigation" part of our site to be present at the top of every one of our pages. With the setup we have, just working with raw .html and .css files, we will need to copy and paste our HTML code for our header into every HTML file. That way, the header and navigation will be present on top, and the content that follows will be different between our pages.

### More CSS Files

So far most of you have worked exclusively with a single CSS files, perhaps called something like `style.css`. There are no issues keeping all of our CSS in a single file, but as our file grows you might find it useful to split your code up into different files. For example.
