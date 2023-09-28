---
title: "An introduction to browser Dev Tools"
metaDescription: "Modern browsers have excellent development tools built in to make the life of website builders easier. In this article we'll take a short look at some common dev tools features."
publishedDate: 2023-09-28
---

Modern browsers have excellent built in tools to help with front end development. These are called Dev Tools. In Chrome, you can open the dev tools on your website (or any other website, for that matter) by right clicking and selecting "Inspect". The keyboard command for this is <kbd>cmd</kbd> + <kbd>option</kbd> + <kbd>I</kbd> Other browser should have similar options to open their dev tools, and they all have very similar features.

Chrome's own documentation on viewing and changing both [HTML](https://developer.chrome.com/docs/devtools/dom/) and [CSS](https://developer.chrome.com/docs/devtools/css/) are useful further readings beyond this article.

## Navigating the Elements tab

Once open, use the tabs at the top to navigate to "Elements" if it's not already selected. In this view, you get an insight into the HTML and CSS being used on the website you are currently on. By clicking the three dots in the top right corner, you can select where you want your dev tools places. Bottom, left or right. Personally, I keep it to the right most of the time.

In the Elements tab, the top/left part (depending on where your dev tools are located on the screen) shows the HTML structure. You can click the small arrows shown next to the elements to expand them (if they have children), or use the arrow keys on your keyboard to navigate the HTML structure. When hovering a piece of HTML in the dev tools, you should see the corresponding are light up on the website itself.

At the bottom/right, you have the CSS. Selecting a piece of HTML in the top half will show all CSS applied to that element. You might see more CSS here than you expect. This is because of the _cascading_ effects of CSS. A page title, for example, might have specific CSS applied to it, but might also inherit CSS from higher up in the structure. You'll see them in the order they are applied here. The most specific on top, with the most general at the bottom.

## Making changes

From the dev tools, you can make changes to the HTML and CSS and see them immediately reflected on the site. You can do this to any website on the Internet. Note that you are only applying changes to the code that has been received and is now running in your browser. Any changes you make here will disappear once you refresh the site.

### Adjusting HTML

Sometimes we might want to adjust the HTML, for example, increasing the length of a title to see how the page behaves. Right-clicking any the content inside a tag gives you the option to "Edit text". You can also double-click the content to go directly into edit mode.

Similarly, right-clicking a piece of HTML bring up options like "Edit as HTML" and "Edit attribute". From here, you can tweak the structure of the HTML and see it being reflected immediately on the page.

For the most part, these are the most useful tools when it comes to editing the HTML. Usually, we spend more time editing CSS in the dev tools.

### Adjusting CSS

Once you have a piece of HTML selected, all applied CSS for that element will appear in the bottom half of the Elements tab. In here, you can click into any property or property value and edit them, and the changes will immediately be reflected on the page. You can also add completely new properties and property values to any element.

When you hover a CSS property, you'll also see a checkbox appear to the left of it. Using this, you can toggle individual CSS rules on and off.

## Conclusion

Browser dev tools is an excellent feature that is extremely helpful for front end development. With the Elements tab selected, you get an insight into the HTML and CSS on any page you visit, and can adjust the code to see changes immediately reflected on the page. I recommend practicing and getting comfortable using these tools, as they will improve your experience designing websites.
