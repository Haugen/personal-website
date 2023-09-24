---
title: "An introduction to HTML"
metaDescription: "HTML describes the structure of a website. In this quick and straight forward introduction you'll learn what HTML is, how it works, and how you can use it to start building your website."
publishedDate: 2023-09-18
updatedDate: 2023-09-24
---

HTML is the language used to define the structure of a website. It tells the browser what the content of the website is. Titles, paragraphs, lists, links, images, videos etc. It's also where we describe the websites metadata, like the title you see in the browser tab, or content for search engines and social media to use when displaying a preview of your site. HTML has been around since the dawn of the world wide web, and the structure of every website you visit is described in it.

An HTML file is any file on your computer ending in `.html`. The conventional name for the homepage of your website is `index.html`. HTML is build up by a structure of HTML `tags`.

```html
<html>
  <head></head>
  <body></body>
</html>
```

The `html` tag surrounds your whole website. It has an opening tag, `<html>`, and a closing tag, `</html>`. Within it, it has two other tags, `head` and `body`, both with opening and closing tags (but without any content in them). `html` is the **parent** of `head` and `body`, and `head` and `body` are **children** of `html`. `head` and `body` are also **siblings** to each other. These three adjectives, parent, child and sibling, are used to the describe the relationships between HTML tags.

Inside head, you place your websites metadata. This is also where we import other files to our website, like CSS, or fonts from an external source like [Google Fonts](https://fonts.google.com/). Nothing we place inside the head tags will be visually displayed on our website. All the content of our website is places inside the body tag.

## Two types of HTML tags

Most HTML tags have an opening and a closing tag, with content in them, but there is a second type, called a self closing tag. An example of this is the tag used to display images, and looks like this `<img />`. Here, there is no room to place content within the image tag. Instead, it uses **attributes**. Consider the following:

```html
<img src="images/my-image.jpg" />
<img src="https://www.external.com/another-image.png" />
```

The attribute `src` has a **value** of `my-image.jpg`. With the `img` tag, the browser knows it should display and image, and the `src` attribute tells the browser where to find the image. We can reference local images, or external images that are publicly available online.

## The semantic web

It's important to use the correct HTML tag when we describe our content. A piece of text, for example, can be placed inside a `<div>`, a generic tag used to describe a container or a section. But if the piece of text is the main title of our page, we should use the `<h1>` tag (heading 1). Using correct tags for your content helps in many ways, for example with accessibility.

Nothing bad will happen if you end up with a lot of divs. It is probably the most common HTML tag out there, and looking at the structure of any website you will see them everywhere.

Here are some of the most common HTML tags: (Self closing tags end with `/`. Others have a corresponding closing tag)

| Tag           | Description                                                   |
| ------------- | ------------------------------------------------------------- |
| `<h1>`        | Main page title                                               |
| `<h2>...<h6>` | Additionally, five more levels of sub-titles are available    |
| `<p>`         | Paragraph                                                     |
| `<div>`       | Generic box/section/container                                 |
| `<a>`         | Links                                                         |
| `<span>`      | Generic inline element                                        |
| `<button>`    | Buttons                                                       |
| `<img />`     | Images                                                        |
| `<video>`     | Videos                                                        |
| `<ul>`        | Unordered list. (Bullet points)                               |
| `<ol>`        | Ordered list. (List with 1, 2, 3, etc)                        |
| `<li>`        | List items. The only allowed direct children of `ul` and `ol` |

There are over 100 HTML tags with different purposes, but just with the ones mentioned above you'll get a long way building out the structure of any website.

HTML has not evolved much over the years. Much of the functionality, and the tags we are still using today, have been around since day one. There have however been updates and additions added throughout the years. HTML5 was released in 2008, and have seen minor updates now and then over the years. With HTML5 a number of new tags arrived with the intention of reducing the usage of `div`. Instead of always using a generic container, we have other, more semantic, tags to describe _certain types_ of container. The most notable are:

| Tag         | Description                                                                |
| ----------- | -------------------------------------------------------------------------- |
| `<main>`    | The dominant content of your document. Often wraps the whole document      |
| `<header>`  | Site header, navigation                                                    |
| `<footer>`  | Footer for a section, or the footer for the whole website                  |
| `<nav>`     | Section intended for navigation                                            |
| `<article>` | Blog entry, newspaper article, etc                                         |
| `<aside>`   | Content that is only slightly related to the rest of the page              |
| `<section>` | A generic section (similar to div, but typically used for larger sections) |

Using the correct semantics for your content is valuable for accessibility, as it gives screen readers and other assistance tools help in understanding the content of your website. Even though we want to try and make our markup as semantic as possible, it's not wrong to use `div` . When in doubt, go for a `div`.

## A first example

Now that we have a sense of what HTML is, and have been introduced to a number of common HTML tags, let's look at an example of a very simple website. Consider the following:

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Page title</title>
	</head>
	<body>
		<main>
			<header>
				<nav>
					<ul>
						<li><a href="index.html">Home</a></li>
						<li><a href="blog.html">Blog</a></li>
						<li><a href="about.html">About</a></li>
					</ul>
				</nav>
			</header>
			<h1>My page title</h1>
			<p>An intro paragraph</p>
			<acticle>
				<h2>A subtitle, perhaps the title of an article</h2>
				<p>Perhaps lot's of text, in paragraphs</p>
				<img src="images/cat.jpg" alt="A beautiful cat" />
				<footer>
					<p>Author: Alex Turner</p>
					<p>Email: alex@monkeys.com</p>
				</footer>
			</article>
			<footer>
				My site footer
			</footer>
		</main>
	</body>
</html>
```

Notice the _indentation_ in the document. Every child is indented four spaces from its parent, making it visually easier to see the structure of your document. When writing code, it's important to keep indentation consistent, as it makes it much easier to reason about the code when reading it. Most commonly, two or four spaces are used for indentation. Four is used in the example above for emphasis, but I personally prefer two spaces when writing code.

## Conclusion

HTML describes the structure of your site. Within the `<head>` you include metadata for your site, and within `<body>` you include the content. HTML tags are either self closing, or come with an opening and closing tag. Attributes are additional key/value pairs. Some are generic for all elements, others are specific to specific elements, like the `href` attribute for an `<a>` tag. We try to make our HTML _semantic_, using the appropriate tags for our content.
