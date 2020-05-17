---
layout: post
title:      "JS Back-to-Basics: Part I"
date:       2020-05-25 19:31:03 -0400
permalink:  js_back_to_basics1
---

>  We'll go back to the basics in JavaScript and discuss about the JS Engine and JS Runtime


On this article, we'll go back to the basics in JavaScript and discuss about the JS Engine and JS Runtime.

## JavaScript Engine 

JS Engine allows to have the machine to understand code. So it acts as a *translator*. There are a ton of JS Engines written by programmers. They can be written in other languages such as C++. An example of this is V8. These engine allows JS to run faster and faster.

Engines looks for lexical anaylisis formed into a **tree like structure call AST**:

![1](https://user-images.githubusercontent.com/15071636/81210695-db483e80-8f97-11ea-820d-3006718796e1.png)

It then goes to the interpreter and moves forward so it can be understood by computer.

ECMAScript was created as governing body of JS. It tells engine creators parameters of creating engines. There are many engines b/c they can be implemented in many ways.

**Interpreters and Compilers**

Interpreter translates and reads file line-by-line. Compiler doesn't translate on the fly. Compiler does one run and then writes a new program in a program that the computer can understand like machine code. You can still run JS using one or the other.

**Babel and Typescript**: They are heavily used in the Javascript ecosystem and you should now have a good idea of what they are:

Babel is a Javascript compiler that takes your modern JS code and returns  browser compatible JS (older JS code). Typescript is a superset of Javascript that compiles down to Javascript.

Both of these do exactly what compilers do: Take one language and convert into a different one!

**V8 Engine**

Interpreter is good for JS. Interpreters can get very slow with things like loops and often doesn't do optimization. Compiler can be a bit better in some instances.

*JIT Compiler:* Just In Time Compilers. V8 engine does this to get best of both worlds. Here the profiler and compiler work as the code is running.

![2](https://user-images.githubusercontent.com/15071636/81311026-7c8fcd00-904a-11ea-88c4-3ec3d28c19f0.png)

**Compared with other languages**

.exe is usually a C++ file that is compiled to a executable machine code file.Java uses the JVM to compile code.

Javascript initially was an interpreted language with time evolving JS has compilers as part of V8 engine, so depends. Python can also be run through a compiler or interpreted.

**Writing Efficient / Optimized Code**

Be mindful with some keywords and JS patterns that can make code not optimized.

![3](https://user-images.githubusercontent.com/15071636/81311646-4868dc00-904b-11ea-9d81-4430dc05d9da.png)

Thinks like inline caching and hidden classes will also learn. For hidden class you want to assign properties of the object in the constructor or add things in the same order. 

Some of these optimizations help the compiler.

Some Resources:
- Read article [**here**](https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#3-managing-arguments)
- Check [**this other article**](https://richardartoul.github.io/jekyll/update/2015/04/26/hidden-classes.html)

*So why don't write machine code from the beginning?*

WebAssembly - could make things better and avoid some JIT Compiler and make things more standarized.

## JS Engine Key Concepts

### Call Stack and Memory Heap

JS engine needs to store and keep track of everything. Memory heap uses, allocates memory. Call stack keeps track of where we are in the code in the execution.

Memory heap is like a free store, with no order. Allows to store variables.

Call stack is like a region in memory acts like a FIFO method. You add things like functions to the call stack starting with the global execution context (sometimes as anyonymous)

You can check the call stack in google chrome:

![4](https://user-images.githubusercontent.com/15071636/81314979-59b3e780-904f-11ea-97ff-0b65c0ad2022.png)


So call stack stores functions in memory. And **the first one in is the last one getting popped out the call stack**.

Where variables are allocated it depends, sometimes they are stored in the stack and more complex are in memory heaps. More on this soon.

**Stack Overflow**

Happens when we keep calling functions nested over and over. This happens a lot with recursion functions (functions that call themselves). Example:

```js

    function inception() {
        inception()
    }

```

**Gargage Collection**

When JS allocates memory automatically with JS when we finish calling the function it is going to clean it. So it automatically frees up the memory we no longer use. 

In that case it makes sure we don't use all memory. It gives a false sense of security. *JS developers sometimes have false impression that they don't need to care about memory*.

In JS garbage collection uses a *mark and sweep* algorithm. So it basically 'marks' what it needs and 'seeps' what it doesn't.

**Memory Leaks**

Memory can happen on *infinite loops* when we fill our memory heap and app crashes.

Common memory leaks:
- Global Variables.
- Event listeners
  - So add event listeners and you never remove them when you don't need them.
- Using `setInterval`
  - unless we clear it and stop it it will run and run.

An example happened with SoundCloud plug-in the background [here](https://developers.soundcloud.com/blog/garbage-collection-in-redux-applications)

*JS Single Threaded*

JS is a single threaded programming language so only one set of instructions at the time. It only has **one call stack**.

Because of this JS is synchronous, doing one thing at a time.
- This could make difficult with long running tasks. An example is `alert` that when it is executed only alert runs.

However most of the time we **don't use JS Engine** but use the **JS Runtime** to make things asynchronous.

## JavaScript Runtime

So how do we make asynchronous calls with the JS Runtime.

*Web API* 

The Web API communicates with JS engine and comes with browser. These web API can do variety of things. The web API is usually the `window` and you can check what it has available such as `fetch`, `setTimeout`. 

Browser provides help so that users don't keep waiting for things to finish. So browser uses low level languages such as C++ to do other stuff.

*Event Loop*
Items come to call stack, lets say `fetch` comes, the call stack identifies it and gives it to the Web API and it doesn't it in the background. Web API returns data received to the appropiate part.

```js

console.log('1')

setTimeout(() => {console.log('2')}, 0)

console.log('3')

//runs 1, 3, 2 because it has timeout of 1 second, moved away from call stack gives to web API, and keeps running next line
```
This event loop runs all the time, won't start putting anything to the call stack is empty and already runs.

No matter how fast setTimeout is, it still gets sent to the Web API.

[**Great tool to visualize Call Stack and Web APIs**](http://latentflip.com/loupe/?code=ZnVuY3Rpb24gcHJpbnRIZWxsbygpIHsNCiAgICBjb25zb2xlLmxvZygnSGVsbG8gZnJvbSBiYXonKTsNCn0NCg0KZnVuY3Rpb24gYmF6KCkgew0KICAgIHNldFRpbWVvdXQocHJpbnRIZWxsbywgMzAwMCk7DQp9DQoNCmZ1bmN0aW9uIGJhcigpIHsNCiAgICBiYXooKTsNCn0NCg0KZnVuY3Rpb24gZm9vKCkgew0KICAgIGJhcigpOw0KfQ0KDQpmb28oKTs%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)

This makes it possible to not rely on just one call stack and memory heap and achieve asynchronous code, with **multiple threads**.

## Final Thoughts

There are many Runtimes, so what is *Node.js*? 

**Node.js** is a *runtime*. So it runs outside the browser. It is a C++ program, like a Node.exe. Node you can access file systems and other things. There are differences such as in Node there's not window but it is replaced with `global`. It creates a runtime outside of the browser. It also uses the asynchronous runtime.

**Stay tuned for next week's article**, as we'll talk about more basic JavaScript concepts. Till then!