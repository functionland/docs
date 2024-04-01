---
title: Style Guide
id: styling
---
This style guide is adapted from IPFS's ["__Grammer, formatting, and style__"](https://docs.ipfs.tech/community/contribute/grammar-formatting-and-style/) rules.

This page details the syntax and formatting rules for writing Fula documentation. For more conceptual ideas of writing, check out the [writing guide](writing-guide.md).

## Grammar and spelling

Here are some language-specific rules that the Fula documentation follows. If you use a writing service like [Grammarly](https://www.grammarly.com/), most of these rules are turned on by default.

### American English

While Fula is a global project, the fact is that American English is the most commonly used _style_ of English used today. With that in mind, when writing content for the Fula project, use American English spelling. The basic rules for converting other styles of English into American English are:

1. Swap the `s` for a `z` in words like _categorize_ and _pluralize_.
2. Remove the `u` from words like _color_ and _honor_.
3. Swap `tre` for `ter` in words like _center_.

### The Oxford comma

Follow each list of three or more items with a comma `,`:

| Use                           | Don't use                    |
| ----------------------------- | ---------------------------- |
| One, two, three, and four.    | One, two, three and four.    |
| Henry, Elizabeth, and George. | Henry, Elizabeth and George. |

### Acronyms

If you have to use an acronym, spell the full phrase first and include the acronym in parentheses `()` the first time it is used in each document.

> Example: Virtual Machine (VM), Decentralized Web (DWeb).

### Differentiation between token and network

Capitalization is required when referring to the $FULA token, but not required when referring to the Fula network.

Example:
>
> $FULA is going to the moon!
>
> I uploaded my files to the Fula net to save my files to the decentralized cloud.

## Formatting

How the Markdown syntax looks, and code formatting rules to follow.

### Syntax

The Fula Docs project follows the _GitHub Flavored Markdown_ syntax for markdown. This way, all articles display properly within GitHub itself. This gives readers the option to view articles on [the docs website](https://docs.fx.land) or [its GitHub repo](https://github.com/functionland/docs).

#### Relative links

Relative links in Docusaurus can be created using a pages' `ID` tag, or their file name. If you include internal (relative) links to other content on the Fula docs site, please link to them using full relative paths (e.g. use `../` for climbing a directory) and specifying the file's full name (e.g. `awesome-tutorial.md#subheading`). This ensures that users who read docs content directly in-repo on GitHub's web UI are able to follow relative links correctly.

### Rules

We use the rules set out in the [VSCode Markdownlint](https://github.com/DavidAnson/vscode-markdownlint) extension. You can import these rules into any text editor like Vim or Sublime. All rules are listed [within the Markdownlint repository](https://github.com/DavidAnson/markdownlint/blob/master/doc/Rules.md).

We highly recommend installing [VSCode](https://code.visualstudio.com/) with the [Markdownlint](https://github.com/DavidAnson/vscode-markdownlint) extension to help with your writing. The extension shows warnings within your markdown whenever your copy doesn't conform to a rule.

## Style

The following rules explain how we organize and structure our writing. The rules outlined here are in addition to the [rules](https://github.com/DavidAnson/markdownlint/blob/master/doc/Rules.md) found within the [Markdownlinter extension](https://github.com/DavidAnson/vscode-markdownlint).

### Text

The following rules apply to editing and styling text.

#### Titles

1. All titles follow sentence structure. Only _names_ and _places_ are capitalized, along with the first letter of the title. All other letters are lowercase:

   ```markdown
   ## This is a title

   ### Only capitalize names and places

   #### The capital city of France is Paris
   ```

2. Every article starts with a _front-matter_ `title` and `id`:

   ```markdown
   ---
   title: Example article
   id: arbitrary-id
   ---

   ## This is a subtitle

   Example body text.
   ```

   In the above example, `title:` serves as a `<h1>` or `#` tag. There is only ever one title of this level in each article.

3. Titles do not contain punctuation. If you have a question within your title, rephrase it as a statement:

   ```markdown
   <!-- This title is wrong. -->

   ## What is Fula net?

   <!-- This title is better. -->

   ## Fula net explained
   ```

#### Back ticks

Back ticks `` are used to highlight keywords. For example, when the reader must interact with something displayed in an app for example: buttons, hyperlinks, images with text in them, window names, icons, or needs directions.

```markdown
To `Log Out` first go to `Home`->`Settings`->`Log Out`.

In the `Login` window, enter your email into the `Username` field and click `Sign in`.
```

#### Italics

Underscores `_` are used to define _italic_ text. Style the names of things in italics, except input fields or buttons:

```markdown
Here are some American things:

- The _Spirit of St Louis_.
- The _White House_.
- The United States _Declaration of Independence_.
```

Quotes or sections of quoted text are styled in italics and surrounded by double quotes `"`:

```markdown
In the wise words of Winnie the Pooh _"People say nothing is impossible, but I do nothing every day."_
```

#### Code blocks

Tag code blocks with the syntax of the code they are presenting:

````markdown
    ```javascript
    console.log(error);
    ```
````

##### Command-line examples

Write command-line inputs without any other characters. Precede outputs from the command line with a greater-than sign `>`. Include an empty line between the input and output of a command-line example:

````markdown
    ```bash
    ping Fula.io

    > PING Fula.io (209.94.90.1): 56 data bytes
    > 64 bytes from 209.94.90.1: icmp_seq=0 ttl=53 time=15.830 ms
    > 64 bytes from 209.94.90.1: icmp_seq=1 ttl=53 time=19.779 ms
    > 64 bytes from 209.94.90.1: icmp_seq=2 ttl=53 time=20.778 ms
    > 64 bytes from 209.94.90.1: icmp_seq=3 ttl=53 time=20.578 ms
    > --- Fula.io ping statistics ---
    > 4 packets transmitted, 4 packets received, 0.0% packet loss
    ```
````

Command-line examples can be truncated with three periods `...` to remove extraneous information:

````markdown
    ```bash
    ping Fula.io

    > PING Fula.io (209.94.90.1): 56 data bytes
    > 64 bytes from 209.94.90.1: icmp_seq=0 ttl=53 time=15.830 ms
    > ...
    > 4 packets transmitted, 4 packets received, 0.0% packet loss
    ```
````

#### Inline code tags

Back ticks also are used to surround directories, file names, and version numbers between inline code tags `` ` ``.

```markdown
Version `1.2.0` of the program is stored in `~/code/examples`. Open `exporter.exe` to run the program.
```

#### List items

All list items follow sentence structure. Only _names_ and _places_ are capitalized, along with the first letter of the list item. All other letters are lowercase:

1. Never leave Nottingham without a sandwich.
2. Brian May played guitar for Queen.
3. Oranges.

List items end with a period `.`, or a colon `:` if the list item has a sub-list:

1. Charles Dickens novels:
   1. Oliver Twist.
   2. Nicholas Nickelby.
   3. David Copperfield.
2. J.R.R Tolkien non-fiction books:
   1. The Hobbit.
   2. The Silmarillion.
   3. Letters from Father Christmas.

##### Unordered lists

Use the dash character `-` for un-numbered list items:

```markdown
- An apple.
- Three oranges.
- As many lemons as you can carry.
- Half a lime.
```

#### Special characters

Whenever possible, spell out the name of the special character, followed by an example of the character itself within a code block.

```markdown
Use the dollar sign `$` to enter debug-mode.
```

#### Keyboard shortcuts

When instructing the reader to use a keyboard shortcut, surround individual keys in code tags:

```bash
Press `ctrl` + `c` to copy the highlighted text.
```

The plus symbol `+` stays outside of the code tags.

### Images

The following rules and guidelines define how to use and store images.

Docusaurus allows for both markdown and HTML in their markdown files.

You can add a markdown file with:
```markdown
![this is an alt text box](/img/path/here.png)
```

You can add HTML images using the `<img>` tag. Using HTML for images is helpful because you are able to center images like this:
```html
<div class="text--center">
    <img src="/img/path/here.png">
</div>
```

Now you can transform the image with in-line HTML styling tags.

#### Alt text

All images contain alt text so that screen-reading programs can describe the image to users with limited sight:

```markdown
![Screenshot of an image being uploaded through the Fula desktop application.](/img/Fula-desktop-image-upload-screen.png)
```

#### Storage location

Store images under a subfolder in the `./static/img/` directory. The subfolder must be named the same as the parent folder of the article the image is in. Docusaurus makes it easy to reference images from this directory. This also makes all articles and images separate, which makes for a better navigating experience when working under the `docs` directory.

```markdown
![Screenshot of an image being uploaded through the FxBlox iOS app.](/img/upload-a-photo/fxblox-upload-screen.png)
```

The directory structure of this article looks like this:

```
static/
├── img/
|   └── upload-a-photo/
|       ├──Fula-desktop-image-upload-screen.png
|       └── ...
|   └── delete-a-photo/
```

### File names

All file names are lower-case with dashes `-` between words, including image files:

```
Fula-desktop/
├── add-a-user.md
├── enable-debug-mode.md
├── images
│  ├── additional-information-screen.png
│  ├── dark-mode-enabled.png
│  └── user-profile-image.png
├── log-into-the-application.md
└── upload-a-photo.md
```