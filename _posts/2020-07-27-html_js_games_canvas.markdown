---
layout: post
title:      "HTML5 + JS Games - An Intro to the Canvas Element 👾"
date:       2020-07-27 09:31:03 -0400
permalink:  html_js_games_canvas
filename:   2020-07-27-html_js_games_canvas
---

> HTML Games are fun way to practice your HTML `canvas` tag skills as well as Javascript concepts.

# HTML5 + JS Games - An Intro to the Canvas Element 👾

Couple of weeks ago I built a clone of the arcade classic snake, [Retro Snake](http://fbohz.com/html5_games/retro_snake.html). Today we'll talk about some basic concepts involved in building HTML5 and JS games.

**HTML Canvas**

HTML Games are fun way to practice your HTML `canvas` tag skills as well as Javascript concepts.

`<canvas>` is an element that has height/width and you can draw anything inside.
- Canvas is like a box with a border. Inside of the box you can make another box, circle, line and text. You cannot do anything outside of the canvas. 
- Canvas is defined inside the body.

```html
<body>
    <canvas height="500" width="500" 
    style="border: 2px solid #000;" 
    id="ctx"></canvas>
</body>
```

**Adding Text with JS to Canvas**

`getContext()` is used in JS and '2d' to specify as two-dimension.

With `fillText()` you can add text, in specific x and y coordinates, and get something like this:

```js
var ctx = document.getElementById("ctx")
    .getContext('2d');

ctx.fillText("HOLA BRAVE NEW WORLD!", 150, 250);
```

![1](https://user-images.githubusercontent.com/15071636/81889102-61502080-9568-11ea-952c-96daee4d9c55.png)

To make font larger you can do like `ctx.font = "30px Calibri"`.


**Draw Line in Canvas**

`strokeText()`: gives embossed look to font.

`moveTo()`: takes two params. First cursor will move to specific position. You use it to draw lines with `lineTo()`. You can then create line with `stroke()`. 

```js
ctx.moveTo(100,300)
ctx.lineTo(200,300)
ctx.stroke();
```

So first two methods define line, third draws the line.

`fillStyle()`. You can add color such as `ctx.fillStyle = '#efa556'` into a rectangle with `fillRect()`.

`fillRect()` takes four arguments. The first two position then next two width and height of rectangle as `ctx.fillRect(250, 300, 200, 300);`.

![2](https://user-images.githubusercontent.com/15071636/81889930-57c7b800-956a-11ea-9b2a-66d24fb86c55.png)

**Canvas State**

The canvas object we identified as `ctx` has many properties like we've been describing. Sometimes if we `fillStyle()` ctx then everything after could be red as well! 

To manage this we have *canvas state*. 

- `save()`: whatever was the state we want to save at that point like a *checkpoint*
- we can then call `restore()` to restore to previous state.

So when we do modification on canvas and then save the checkpoint and then restore as we need it.

**Drawing JS Objects in the Canvas**

Lets try to draw this object:

```js
const square = {
    width: 300,
    height: 200,
    x: 100,
    y: 200,
    color: 'red'
}

```

We can easily draw our square by accessing the square attributes:

```js
ctx.fillStyle = square.color
ctx.fillRect(
    square.x, square.y, 
    square.width, square.height
    )
```

**Using JS Functions**

Games like video are just a *series of frames*. The main difference is that you *can interact with the game* and not the video.

We use the `setInterval()` to accomplish this. This will call the function every specified time. If we have `setInterval(myFunction(),1000)` then it will be like *1fps*, as every 1 second there will be new frame. It will be very slow game so we can decrease when `setInterval()` can be called to have more frames.

**User Inputs & Event Handling**

You can control events with keyboard and mouse such as:

- `onmousedown`
- `onmouseup`
- `onkeydown`

Here are some examples:

```js

document.getElementById("ctx").onmousedown = function() {
    ctx.fillStyle = 'blue';
    ctx.fillRect(100,100,50,50);

}


document.getElementById("ctx").onmouseup = function() {
    ctx.fillStyle = 'red';
    ctx.fillRect(100,100,50,50);

}

document.onkeydown = function(e) {
    //a = 65 code
    if (e.keyCode == 65) {
        ctx.fillText('A has been pressed', 100,100);
    }

}
```

**Recap**

When building HTML5 + JS games make sure you:

1. Declare the `canvas` element.
2. Build objects of the game. For example: Snake and Food (for Snake game). 
3. Draw objects in the canvas.
4. Move objects as required.
5. Use functions to meet game requirements. Make sure you have the game requirements clear.
6. Add common features such as scores, game over, initial screen etc.
7. Add other features. E.g difficulty.

**Resources**

- Here's my implementation of snake, [<b>Retro Snake</b>](http://fbohz.com/html5_games/retro_snake.html). Note I used Express/MongoDB as a backend to track high scores.
- Read [<b>W3 Schools HTML Canvas Drawing</b>](https://www.w3schools.com/graphics/canvas_drawing.asp).
- Checkout [<b>MDN Drawing Shapes with Canvas</b>](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes).