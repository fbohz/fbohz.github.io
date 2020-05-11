---
layout: post
title:      "React Component Library"
date:       2020-06-01 19:31:03 -0400
permalink:  js_back_to_basics2
---

> We'll expand on last week's concepts and talk about other exiting JS foundational concepts!

*Note:* This is a follow up is a continuation to [last week's article](http://fbohz.com/js_back_to_basics1).


## JS Back-to-basics Part II

This week, we'll expand on last week's concepts and talk about other exiting JS foundational concepts!

*Quick Reminder*
In JS we basically
- Assign variables
- Write functions

That's all we really do, all the time!

As soon as JS engine sees `()` it creates an **Execution Context (EC)**:
- Items get pushed to our call stack each with its own execution context
- It starts with the `global()` execution context (first item in the stack), then narrows down to the function being called.
  - This global() has the `globalObject` and `this`.
  - In browser the globalObject is the `window`.
  - Depending on the function context `this` might refer to one thing or the other.
  - you can add functions, variables to this globalObject
- **Execution base** is where you run your code.

**Lexical Environment / Scope**
- It means **where** you write something.
- They are like little universes each time there's a new execution context.
- functions within fuctions are in the lexical environment of another functions
- Knowing where it was written, the compiler can make decisions what to do.
- Remember everytime we add a new function we create a new planet.

Execution context tells which lexical environment (planet) is currently running.

**Our lexical scope (available data + variables where functions were defined) determines our available variables NOT where the function is called (dynamic scop)**. It doesn't matter where we call our functions.

*The very first lexical environment is the global environment*.

**Hoisting**
In the creation phase (when set globalOject and this) before execution of code we have hosting:
- Hoisting is the behavior of moving variables and fn declarations to their context.
- During creation phase (first go through) it allocates memory. As soon as they see variables or function it allocates them, the first run they will be as `undefined`.
  - variables with `var` are then **partially hoisted**. Var is as undefined.
    - `let` and `const` are NOT hoisted.
  - function declarations are **fully hoisted**.
  - function expressions (defined with var) are partially and `undefined`.
- Compiler is not moving lines but in the first pass is just **allocating memory**

Hoisting exercises:
- [Here](https://repl.it/@aneagoie/hoisting)
- [Second](https://repl.it/@aneagoie/hoisting-2)
- and [last](https://repl.it/@aneagoie/hoisting-exe)


**Function Invocation**

Remember JS **programs assing in memory variables and then write functions to do something with those variables**.

So what are functions?
- function *declaration* start with `function` keyword. They get hoisted. Define at run-time.
- function *expression* are saved to a variable. Expressions don't get hoisted. Defined at parse-time, first run because hoisted.  . 
- Function have invocation/call/execution
  - We invoke by running in parenthesis like `myFunction()`.
- With function invocation we get the `arguments` keyword.
  - This arguments keyword gives us an object with the arguments.
  - `arguments` is only available when we create new execution context with a function.
  - Remember **do not use arguments keyword**. They are not an array, so cannot use array methods but if you use `Array.from` you could convert into array object it.
- You can also use spread operator in our arguments such as. `function marry(...args) {console.log(args[0])}`

**Variable Environment**

What about variables created inside of execution contexts of functions? They are called Variable Environment.

Some functions have access to certain variables, while others not. Remember functions have their own execution content in which variabs reside and the first execution context is the global() one. 

Variables default to their outermost execution context. Execution context have their own variable environment.

**Scope Chain**

Each EC has a link to the outer world. When the code runs it goes down the scope chain in parent environment if it doesn't find variable.

```js
var x = 'x'

function printX() {
  console.log(x)
}

```
Lexical or **static** scope, only by looking at code determines  which environment a certain variable lives in. Scope chain starts inner and goes all the way to global context.

**Function lexical environment**, creates closures on environment.  This closures are defined internally so you cannot access outside for a variable that is defined internally. 


![scopeclosure](https://user-images.githubusercontent.com/15071636/81589013-b0d2f880-937e-11ea-9b06-0e95b6118953.png)

**Reminder**
Remember `undefined` means, **yes** we have 'x' variable but it doesn't have any value while something like `Reference Error` is like 'x' is completely undeclared not found anywhere in the scope chain.

Lexical environment === [[scope]]. So each environment has a field, and each field with its own scope and the link to next scope. Also named [[scope]]. `Scopes` will give you all the scopes you can test in console.

**Function vs Block Scope**
Scope means what variables we have access to.

Other coding languages have *block scope*. Any time you do code in curly brackets `{}` you create block scope. In JS this is done with `let` and `const` create block scope!

So let and const **create block scope** just like in {}

**Scope Exercies**:
- https://repl.it/@fbohz/JS-is-Weird
- block scope: https://repl.it/@fbohz/Block-Scope-vs-Function-Scope 

**Note on global variables**

You can pollute global namespace. Remember **we have limited space and our memory heap is limited**. You can pollute global scope by keep adding global variables.

You can also **overwrite** global variables.

## Concluding Toughts

This seems to be a robust discussion on JS foundational concepts. There are still other concepts worth exploring including IIFE, this keyword and more. Please be sure to read on them. An article I previously wrote about this can be found [here](https://medium.com/swlh/javascript-this-a-quick-example-regular-arrow-functions-and-methods-95fdfae01c98).
