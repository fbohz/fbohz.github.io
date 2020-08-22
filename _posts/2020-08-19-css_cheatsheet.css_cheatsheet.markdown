---
layout: post
title:      "CSS Cool Tricks Cheatsheet 😎"
date:       2020-08-19 09:31:03 -0400
permalink:  css_cheatsheet
filename: 2020-08-19-css_cheatsheet
---

> If you always feel you have to look up CSS terms, checkout this cheatsheet! It will make your CSS life easier.

# CSS Cool Tricks Cheatsheet 😎

If you always feel you have to look up CSS terms, checkout this cheatsheet! It will make your CSS life easier. I applied some if this tricks while I was building Museo, a [Vanilla CSS/SCSS Landing Page](http://fbohz.com/css-learning/museo-demo/index.html).

**Know About the Three Pillars to Write Good CSS**

1. *Responsive Design*: Building a website that works well on all devices. You'll have to know about fluid layouts, media queries, responsive images, correct units (for e.g. font sizes) and desktop-first vs mobile-first.
2. *Writing maintainable/scalable code*: Write code that is clean and reusable. Think about CSS folder architecture, and class naming.
3. *Web Performance*: Make it faster and smaller in size. Less HTTP requests, compress code, and use a CSS preprocessor. Also less images and if images, compress them.

**Reset Styles Globally**

Sometimes you want to reset styles from those that might be imposed by the browser by default. Here's an example

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

**Attribute Selectors**

We can select attributes by wrapping them in `[]`

```css

/* ^ means starts with */

[class^="col-"] {
    float: left;
    background-color: orange;
}

```

**Converting `px` units to `rem`**

The `rem`  unit is related to root font size. So by setting the root font size, then use rem so you can easily make changes to root without changing all lines of codes. You can specify root font size. Instead of having root font as as px we could use percentages. 

```css
html {
    font-size: 62.5%;
}
```

Since usually default font size is 16px here we are saying 62.5% which is roughly 10px. This will mean that 1rem is 10px, 2rem is 20px and so forth. 

You can then use rem as this:

```css
.logo-box {
 position: absolute;
 /* 4rem = 40px */
 top: 4rem; 
 left: 4rem;
}
```

**`!important`**

`!important` overrides specificity rules. Can save headaches to make it work before you debug accordingly.

You can add it also on utilities (using SASS), as reusable stylings. [Read more](https://css-tricks.com/when-using-important-is-the-right-choice/).

**`box-sizing: border-box`**

 With `box-sizing: border-box` we can change the box model. This is useful when an element’s specified width and height aren’t affected by padding or borders. This has proven so useful in responsive design that has found its way into reset styles. So border-box can help make responsive layouts more manageable.

![Screen Shot 2020-06-23 at 1 02 30 PM](https://user-images.githubusercontent.com/15071636/85438771-eceaa300-b551-11ea-8a51-b767df986fc8.png)

**`clip-path: polygon()`**

You specify the polygon you want to add the clipping. Then you add clippings with x and y coordinates left to right.  Use [Clippy tool](https://bennettfeely.com/clippy/) to calculate it for you! You can make some cool polygon effects. 

**CSS Animations with `@keyframes` and `animation`**

We use `@keyframes` and then give animation a name. Then you specify what happens when animation starts, ends and anything in the middle.

```css
@keyframes moveInLeft {
0% {
 opacity: 0;
 transform: translateX(-100px);
}

100% {
 opacity: 1;
 transform: translate(0);
}
}
```

Then once you define it, you can add it to the specific element you want to apply with the `animation` keyword.

```css
.btn-animated {
/* animation name, animation duration
    animation timing function, 
    animation delay
*/
animation: moveInBottom .5s ease-out .75, 
}
```

**`backface-visibility: hidden`**

Whenever you work with animations and with `translate()`, many times `backface-visibility: hidden;` fixes many errors. So try to add it if you are having issues!


**`overflow: hidden`**

Another trick when an element is too big and is overflowing. You can use `overflow: hidden` to fix it.

**Pseudo Elements and Pseudo Classes**

*Pseudo classes* are a special state of a selector. For example `.btn:link` selects the elements on a special condition in this case when a button is a link.

```css
.btn:link {
  display: inline-block;
  text-decoration: none;
  text-transform: uppercase;
}
```

*Pseudo elements* allow us to select certain part of an element. They are denoted with two colons to differentiate them from pseudo classes. This is the syntax:

```css
selector::pseudo-element {
  property: value;
}
```

There are various pseudo elements. Take a sneak peak and learn more about them [here](https://blog.logrocket.com/a-guide-to-css-pseudo-elements/).

**`box-shadow`**

With box shadow you can add shadow to elements. Take a look at this [box shadow generator](https://www.cssmatic.com/box-shadow).

**`@supports` For Older Browser Support**

You can do graceful degradation with `@supports`. Example:

```css
@supports (-webkit-backdrop-filter: blur(7px)) or (backdrop-filter: blur(7px)) {
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
    background-color: rgba($color-black, .7);
}
```

This will make your CSS support older browsers.

## BONUS - SASS Preprocessor

If you wanna use SASS in your project just install it with `npm i node-sass --save-dev`.

**Implement SASS Variables**

We can use SASS to implement variables, e.g. when specifying colors.

```css

$color-primary: #f9ed69

nav {
  background-color: $color-primary;
}
```

**Implement Nesting With SASS**

In SASS you can do nesting and it will read much better.

```css
.navigation {
  list-style: none;

  li {
    display: inline-block;

    &:first-child {
      margin: 0;
    }
  }
}
```

Note that `&` replaces selectors up to the point. So in normal CSS this will equate  `.navigation li:first-child`. In CSS we would write everything above as the following (notice how we save a lot of repetition):

```css
.navigation {
 list-style: none;
}

.navigation li {
 display: inline-block;
}

.navigation li:first-child {
  margin: 0;
}
```

Be careful on how deeper you go on nesting. Usually don't go deeper than two levels!

**Mixins**

*Mixin* is a reusable piece of code. Let's say we want to implement a [Clearfix](https://www.w3schools.com/howto/howto_css_clearfix.asp) in multiple places. We use the `@mixin` keyword to define it and `@include` where we want to use it.

```css
@mixin clearfix {
 &:after {
     content: "";
     clear: both;
     display: table'
 }   
}

nav {
 @include clearfix;
}
```

You can also pass in variables to mixin definitions. Just make sure when you want to use it, also pass in the variable for the mixin to work. Mixins then do become like functions. There are also extends and functions in SCSS so become familiar with them, but mixins are used the majority of times.

**Fast Development Environment with SASS**

*Remember* to install SASS. Then you can compile by adding this script in package.json:

```ruby
"scripts": {
 "compile:sass": "node-sass sass/main.scss css/style.css -w"
},
```

The `-w` will keep watching for whatever we do in our code. You can also install `npm i live-server -g`. Then run it as `live-server` on root folder. For the changes to be reflected without needing to reload manually.

**Build Scripts for SASS**

We can implement simple NPM build processes after we finish a feature.

![Screen Shot 2020-06-28 at 7 35 10 PM](https://user-images.githubusercontent.com/15071636/85962487-9a0c5380-b976-11ea-8dae-b021b308f223.png)

There are a couple of NPM packages we use, we can install as `npm i concat --save-dev`, `npm i autoprefixer --save-dev`, `npm i postcss-cli --save-dev`, `npm i npm-run-all --save-dev`.

We do this on `package.json`, check it on [Github repository](https://github.com/fbohz/css-learning/blob/master/museo-demo/package.json) or see below the updated scripts part on package.json:

```ruby
"scripts": {
  "watch:sass": "node-sass sass/main.scss css/style.css -w",
  "devserver": "live-server",
  "start": "npm-run-all --parallel devserver watch:sass",
  "compile:sass": "node-sass sass/main.scss css/style.comp.css",
  "concat:css": "concat -o css/style.concat.css css/linea-icon-fonts.css css/style.comp.css",
  "prefix:css": "postcss --use autoprefixer -b 'last 10 versions' css/style.concat.css -o css/style.prefix.css",
  "compress:css": "node-sass css/style.prefix.css css/style.css --output-style compressed",
  "build:css": "npm-run-all compile:sass concat:css prefix:css compress:css"
},
```

Note the `--parallel` flag on start script. It means both run at the same time. On compile script be careful of your own .scss and .css file locations and update it accordingly.

It doesn't matter if you don't understand everything. To compile your SASS into CSS all you do:

`npm run build:css`

With this, your CSS will be compiled, concat, compressed and ready for production! Bam💥

## Even More Tricks and Resources

- [**CSS Reference**](http://tympanus.net/codrops/css_reference/) you can take a look. 
- [**Emmet Cheat Sheet**](https://docs.emmet.io/cheat-sheet/). Write HTML faster in VS Code
- [**Box Sizing**](https://css-tricks.com/box-sizing/)
- [**HTML Glyphs**](https://css-tricks.com/snippets/html/glyphs/)
- [**Linea Free Icons**](https://linea.io/)
- [**Coverr - Free Videos**](http://coverr.co/)
- [**Easings.net**](https://easings.net/).Pick your favorite transition and then copy the `cubic-bezier` function and voila! You can compare bezier curves with [this tool](https://cubic-bezier.com/#.17,.67,.83,.67).
- [**Sizzy**](https://sizzy.co/), a tool for responsive website building.
- [**Good Udemy Course**](https://github.com/jonasschmedtmann/advanced-css-course)
- [**Can I Use**](https://caniuse.com/), for browser support checking