---
title: "A brief introduction to typography on the web"
metaDescription: "Just like for any other medium, getting your typography right is key to building beautiful websites. In this article we'll take a look at the basic options you have for getting your typography just right."
publishedDate: 2023-10-04
---

Just like for any other medium, getting your typography right is key to building beautiful websites. In this article we'll take a look at the basic options you have for getting your typography just right.

## Picking a font

Changing font is done with the CSS property `font-family`. If not set, the webpage will use a default font from the browser, often a "serif" font like Times New Roman.

Often times we don't want to use only these common fonts that most computers have installed. Rather, we want to import a custom font, and use that on our website.

## OpenType font vs. Variable Font

For the longest, font on computers (which also meant, the web) followed the so called OpenType font specification. In recent years, something called Variable fonts have gained support on the web and is growing in popularity. If you really want to nerd out on the topic the [Introduction to variable fonts on the web](https://web.dev/articles/variable-fonts) is great, as well as the [official MDN documentaion](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_fonts/Variable_fonts_guide).

The "Roboto" Google font we'll be working with in the rest of this article is an old school OpenType font.

### Google Fonts

[Google Fonts](https://fonts.google.com/) house thousands of custom fonts that you can easily embed and use on your website. Through their website you can pick out a font, select the font-weights (normal, light, bold, etc) you want to use, and follow the instructions on the website on how to embed and use the font.

The first piece of code you'll get looks something like below. This needs to be copied and inserted in the `<head>` section of your website. The example below imports font weights 400 and 700 of the font called "Roboto".

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
  rel="stylesheet"
/>
```

Once the code above is in your `head` section, you can now set the font using the `font-family` CSS property. For example, setting the font to "Roboto" on the whole `body` element:

```css
body {
  font-family: "Roboto", sans-serif;
}
```

The last part, `, sans-serif`, is a fallback to a browser default "sans-serif" font to be used in case the Roboto font fail to load for some reason.

Remember, you can import multiple fonts from Google Fonts, and you can set `font-family` on any CSS selector. For example, you might set one font on the `body` selector to target the whole page, but set another font on `h1` or a custom class name like `.my-font`.

### Downloading a custom font

It's also possible to download fonts, both free and payed, from the Internet and embed them on your site directly from your codebase (rather than importing them from "fonts.googleapis.com" as in the section above). It's slightly more complicated, and we wont go into detail on how to do it. If you want to try for yourself, you can find fonts at for example [BEfonts](https://befonts.com/), and you can check out [this short article on how to embed your own fonts](https://www.programiz.com/css/custom-fonts).

If HTML and CSS is completely new to you, I recommend finding one or two fonts at Google Fonts and use them as described above.

## Which size units to use?

Before we dive into the CSS related to styling typography on the web, let's take a quick look at the different units we have available when it comes to sizing things. In the previous class, we looked at and used pixel values, for example `font-size: 24px`. Pixel values are "absolute". An element given a font-size of 24px will always be 24px big, regardless of browser settings or the size of the screen its viewed on.

Opposed to absolute units, CSS also has a handful of "relative" units to use. The most common are:

| Unit | Description                                              |
| ---- | -------------------------------------------------------- |
| rem  | Relative to document font size in px                     |
| em   | Relative to closest parent/current font size in px       |
| %    | Relative to the parent element's value for that property |
| vh   | Relative to the height of the viewport                   |
| vw   | Relative to the width of viewport.                       |

It's good to know that these exist, and you might come across things you want to do with your design where these relative values can be useful. But as you're just getting started with CSS, feel free to use pixel values for everything you do. When it comes to typography there are a few exceptions, like `line-height` and `letter-spacing`, where using `rem` might be more useful. For example

```css
.my-text {
  line-height: 1.4rem;
  letter-spacing: 0.0023rem;
}
```

The easiest way to find the right setup for your typography is to play around with the values in the browser dev tools.

## Styling text

Once you have imported a custom font, whether you've downloaded it or imported it from Google Fonts, we can take a look at more options you have for dealing with typography on the web. Below is a list of common CSS properties that apply styling to text.

| Property        | Description                                                     |
| --------------- | --------------------------------------------------------------- |
| font-family     | Which font to use                                               |
| font-size       | Sets the size of the text                                       |
| font-weight     | Sets the weight on the font. From thin, through normal, to bold |
| font-style      | Most commonly used for making text italic                       |
| text-align      | Aligning text, left, center, or right                           |
| text-decoration | Underlining text in different ways                              |
| text-transform  | Force for example uppercase or lowercase                        |
| letter-spacing  | Set horizontal spacing between characters                       |
| line-height     | Sets the line height                                            |

There are many more properties available in CSS to change how text is behaving on the web, but you'll get a long way using the ones mentioned above.

## Conclusion

We have plenty of options to decide which fonts to include on our website, as well as deciding how the text should look and behave. Using Google Fonts is an easy way to include custom fonts. Using the CSS properties mentioned in this article you have most of the tools you need to make your website typography look just the way you want it.
