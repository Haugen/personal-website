---
title: "YRGO DD 2023 - Class 2"
publishedDate: 2023-10-04
updatedDate: 2024-10-05
---

In this second class, let's continue familiarizing ourselves with the basics of HTML and CSS, as well as taking a close look on how typography works on the web.

## The alternative box model

Last class, we talked about the "Box Model". The default box model, which has been used since the dawn of the web, has some issues. These days, it's more common to use a so called "alternative box model".

In the default Box Model, boxes will _grow_ when `padding` and `border` are added. For example, imagine you have a `div` with a `width` of `200px`. Adding for example `padding: 10px` will _expand_ the box, making it `220px` (`10px` are added both left and right) wide instead of the specified 200. This behavior can be tricky to work with, and it's common to change this to use the so called alternative box model.

```css
* {
  box-sizing: border-box;
}
```

Changing the property `box-sizing` to `border-box` (from its default value of `content-box`) on _everything_, the box will no longer grow when border or padding is added. Instead, the space will expand _inwards_, respecting any width or height specified.

Before you begin with todays exercises, update your website to use the alternative box model as described above.

## Exercises

### 1. Tweak your site in dev tools

Start by reading the [Introduction to browser dev tools](dev-tools-intro) to get a first introduction to what these tools are. Then open the dev tools on your website and explore the HTML and CSS you have previously written. Use the dev tools to make some changes to the CSS, and watch the changes being applied instantly on the page.

### 2. Tweak the look of another website

Go to one of your favorite websites, any website, and open the Dev Tools in your browser. Using the Dev Tools, make the following three changes on the site:

1. Change the background color of something. Perhaps the `body`, or find some other tag and change/add `background-color` on it.
1. Find a headline, and adjust the `font-size` of it.
1. Find a container and add/change both `margin` and `padding` of it.

Moving forward in this course, make a habit of spending time in the dev tools. It's an excellent and fast way to play around with your design, tweaking details, and testing things out.

### 3. Install a code formatter in VS Code

As we saw in the previous class, keeping our code nicely structured and formatted can be a challenge. It's very common today to use tools to help with that, and the most popular tool for automatically formatting your code is called [Prettier](https://prettier.io/). I recommend you install it in VS Code with the following steps:

1. Go to the "Extensions" tab, search for "Prettier", and install the extension.
1. Once installed, open "Settings" in VS Code.
1. Search for "Default Formatter" and select Prettier as the default formatter.
1. Search for "Format On Save" and enable it. This will automatically format your code every time you save a file.
1. Go to your HTML and CSS files, make a small change, and save the file. The code should automatically format itself properly.

### 4. Use a font from Google Fonts

Go to [Google Fonts](https://fonts.google.com/) and find a font you would like to use on your website. Don't worry too much about figuring out exactly what font you want. You can always change this, and you might try out many different fonts before you're satisfied.

Once you find one you like, click it to go to that fonts individual page. Here is for example the page for the font called [Merriweather](https://fonts.google.com/specimen/Merriweather). On this page, select the different **weights** you want to include (you can always add more later). A good start is just to include the one called "Regular 400". This is the default font weight. If you want to have lighter and bolder weights of the font, select those as well.

In a right sidebar, you should see information about the fonts you have selected. If it doesn't show up, click the "Selected families" icon in the top right of the website. In this sidebar you see instructions on how to include the font on your website. This is done in two steps:

1. Copy the code provided and place it inside your `<head>` tag in your HTML document.
1. Copy the CSS rule, for example `font-family: 'Merriweather', serif;`.
1. Include this piece of CSS for a CSS selector as seen in the examples below:

```css
/* Apply this font to the body document. All text in your website will be affected */
body {
  font-family: "Merriweather", serif;
}

/* Apply the font on all <h1> and <h2> elements. Any other HTML element will still use the default font. */
h1,
h2 {
  font-family: "Merriweather", serif;
}

/* You can apply this CSS to any selector. For example, here we set the font family on a class
called "custom-font". Any HTML tag you give the class "custom-font" to will get the "Merriweather" font */
.custom-font {
  font-family: "Merriweather", serif;
}
```

Remember, you can use the Google Fonts website to include more fonts on your site, and apply the different fonts where you want using `font-family`.

### 5. Explore more typography styling

To keep practicing HTML, CSS, the connection between the two, and how we can style text on the web, I recommend trying out all or some of the following:

1. Apply `font-family` to your `body` element in your CSS. Use a Google Font or a [web safe font](https://www.w3schools.com/cssref/css_websafe_fonts.php), for example "Verdana" or "Georgia".
1. Apply a **different** `font-family` to your `h1`, `h2` and `h3` tags.
1. Create a `<p>` tag in your HTML with a single word in it. Give the `<p>` tag a class named `label`. Style `.label` in your CSS to be a smaller font size and all UPPERCASE characters.
1. Remove the text underline on your links. Add the underline back on hover (with the `a:hover` selector).
1. Increase the `font-size` on your `h1` elements, and add both `line-height` and `letter-spacing` to it. Use `rem` units, and tweak the values in the dev tools until you're satisfied.
1. Wrap **a single word** in your page title (your `h1` element) with a `<span>` element. Give the `span` a class, and style that class in your CSS to make the text **bold**. OBS! If you're using a Google Font for this text, remember that you need to include a bold font weight from Google Fonts.

### 6. Tweak the look of another website

If you didn't get to it in the precious class, [go back to the previous class and use the dev tools](dd-class-1#8-tweak-your-site-in-dev-tools) to explore and tweak a site of your choice. Getting familiar with the browser dev tools can feel daunting, but it's a valuable tool once you get the hang of it. Towards the end of the course, as your fiddling with details on your site, being able to tweak and change your styling directly in the dev tools will be both pleasant and efficient.

### 7. Done?

We will learn more about layouts and alignment of sections in the next class. If you're already curious about this, you can start looking in to the [Basic concepts of flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) in CSS.

Also, feel free to think about and sketch on the overall layout you want for your portfolio, as well as choosing the right typography and colors for your site.
