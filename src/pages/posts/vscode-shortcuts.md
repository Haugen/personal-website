---
layout: ../../layouts/MarkdownPostLayout.astro
title: "Useful VS Code shortcuts"
pubDate: 2022-11-26
updatedDate: 2023-04-17
tags: ["vs code", "productivity", "tech"]
---

As a developer, using your keyboard as much as possible is a great way to increase your productivity. It may not seem much, but all those seconds saved here and there add up over time. Practice them, and watch your productivity increase over time. Here are some of the shortcuts I find most useful in VS Code.

There is a lot more to be said about productivity and mastering the tools you are using. If you are a regular user of VS Code, make sure you spend at least a little bit of time here and there exploring ways to improve your workflow. The editor has a rich ecosystem of plugins and configurations allowing you to setup an environment that works well for your exact needs.

## Navigating the editor

The first type of shortcut you need to consider is moving around in your editor. Browsing your file tree. Opening new files. Moving between different sections in your editor. The more you can use your keyboard for this, the faster you'll eventually become moving around in your code base.

#### `Cmd + Shift + E`

Toggle between file explorer and open file. When in file explorer, use arrow keys to navigate and `space` to open a file.

#### `Cmd + F`

Free text search in your current file.

#### `Cmd + Shift + F`

Go to search tab to search the whole, or part, of your code base.

#### `Cmd + B`

Show/Hide the left (by default) sidebar, where the file explorer, search, etc, are.

#### `Cmd + J`

Show/Hide the Panel. This is normally where you keep your VS Code terminal.

#### `Ctrl + Shift + ´`

Toggle between file window and terminal window. Normally I use this over `cmd + j` as it helps to just move focus to the terminal if it's already open (but not focused).

#### `Cmd + P`

Free text search for a file. Uses fuzzy search, so you can use free text to describe the file you're looking for. In large code bases, this is generally much faster than navigating the file tree.

#### `Cmd + Shift + P`

Open up the command pallet. From here you can run a vast amount of configuration commands, for example changing theme, restarting the TypeScript server, open your preferences JSON file, and much more.

## Navigating inside files

Besides navigating your overall code editor, you also should be able to move around a file with your keyboard. This next section covers some of the shortcuts I use to move around inside a file.

#### `Cmd + arrow keys`

Jump to Top/Bottom of file (arrows up and down). Or jump to beginning/end of line (arrows left and right).

#### `Alt + left/right`

Move cursor a whole word left or right. Very useful for navigating within a single line of code.

#### `Ctrl + up/down`

Not included in VS Code by default, but I've set this up to jump 8 lines at a time. For example, pressing `ctrl + up` twice quickly moved my cursor 16 lines up. It's useful when needing to move quickly to another area of your file.

If you want to explore setting up your own keybindings like this, press `Cmd + Shift + P` and search for `Preferences: Open Keyboard Shortcuts (JSON)`. In that JSON file you can add your own keybindings. The one I just mentioned above looks like this:

```json
[
  {
    "key": "ctrl+up",
    "command": "cursorMove",
    "args": {
      "to": "up",
      "by": "line",
      "value": 8
    },
    "when": "editorTextFocus"
  },
  {
    "key": "ctrl+down",
    "command": "cursorMove",
    "args": {
      "to": "down",
      "by": "line",
      "value": 8
    },
    "when": "editorTextFocus"
  }
]
```

## Editing files

Eventually we want to made edits to the files we're navigating. Adding, removing, duplicating, copying/pasting, etc, content.

#### `Cmd + Shift + K`

Delete the current line. It doesn't matter where on the line your cursor is.

#### `Alt + up/down`

Move the selected line (or lines) up or down.

#### `Shift + Alt + up/down`

Duplicate the current line up or down, depending on up/down arrow key. Very useful when you want to copy a line of code and then make a small change to it.

#### `Cmd + X`

We all know we can cut text with `cmd + x`. But if you don't have any text selected, the command will cut the whole line where your cursor is focused.

#### `Cmd + Alt + up/down`

Used to select multiple lines at ones. Once you have multiple lines selected, you can use other commands, for example `Cmd + right-arrow` to move all the selected lines to the end of the line.

#### `Cmd + D`

Select a word. Use Cmd + D to keep selecting the same word in the same file. Then do multi cursor edit.
