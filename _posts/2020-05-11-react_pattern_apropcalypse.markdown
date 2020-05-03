---
layout: post
title:      "A React Pattern to Avoid Apropcalypse"
date:       2020-05-11 19:31:03 -0400
permalink:  react_pattern_apropcalypse
---

> React patterns are useful to promote code reuse while maintaining component simplicity and flexibility.

Today we'll go over some React patterns I learned while participating at [Byteconf React](https://www.bytesized.xyz/react-2020). React patterns are useful to promote code reuse while maintaining component simplicity and flexibility. This article is a bit on the **advanced React** side.

## Typical Component Development

Lets imagine a custom component that has an accordion UI. So we'll build this `Accordion` component.

![accordion1](https://user-images.githubusercontent.com/15071636/80917534-37eff300-8d25-11ea-95a5-cc4853fafd34.png)

Imagine another developer wants you to allow more flexibility to your accordion so that the order of the accordion items can be customized. Here you might think passing out a `props` like `top` so if true then the accordion item becomes the first.

Now, another developer wants you to have the text on the side rather than at the bottom. Then after working on it you change the CSS so it can have it on the side with `props` as `right`, then if true it moves to the right.

![accordion2](https://user-images.githubusercontent.com/15071636/80917657-25c28480-8d26-11ea-804f-993e9ecc2401.png)

Then things can start making hard when needs want you to have it on the left, then use cases start to pop up. Your accordion then starts having a lot of props to take control and deal with.

![accordion3](https://user-images.githubusercontent.com/15071636/80917860-34f60200-8d27-11ea-9d11-89786a2ee2cd.png)

Easily you can jump into having a component with props to record levels!

Some problems with a component with lots of props (**apropcalypse**) and use cases to deal with:
- Hard to maintain
- Re-renders and JSX that doesn't even apply to your use case
- Implementation complexity - breeding ground for bugs
- API complexity. Harder for other people to use your project. Your documentation can become complex.

*So how can we support these use cases without keep adding new props?*

## Making it Simpler / Flexible

The following implementation might look a bit confusing at the beginning. Note it uses **React Hooks**, so you might wanna brush up on it before digging into it (you can read my [article](https://medium.com/swlh/learning-about-react-hooks-a-coffee-lover-perspective-c699f699fb3d) on Hooks).

![patt1](https://user-images.githubusercontent.com/15071636/80918025-61f6e480-8d28-11ea-9816-3efd1896dd19.png)

This implementation uses the **inversion of control** pattern. It has a default reducer, although anyone can use their own version of the reducer. 

So with this, we can build our own accordion component that might look like this:

![patt2](https://user-images.githubusercontent.com/15071636/80918255-9fa83d00-8d29-11ea-8dd4-4e4c12394d71.png)

And then we can pass items to render the accordion in the default way like `<Accordion items={accordionItems}>`

![accordion1](https://user-images.githubusercontent.com/15071636/80917534-37eff300-8d25-11ea-95a5-cc4853fafd34.png)


Because component is built on top of a hook then you can modify to make things your way. E.g. lets say we want the accordion to point up now. Then with just a few lines of code differences, the change now becomes the responsibility of who is implementing the code:

![patt3](https://user-images.githubusercontent.com/15071636/80918517-0d089d80-8d2b-11ea-9f19-bf77ce144750.png)

**What is important** is that this pattern doesn't add any complexity to the logic behind the component. You can add features to it and have total control of render and no you're no longer responsible of use cases you don't want to support.

As all the logic is stored in `useAccordion` custom hook, it gives flexibility and control as to how a particular user of the compoenent wants the UI to be rendered.

Remember we are **inverting control**, as it can receive its own custom reducer, props so it can adapt to it. This is a **benefit of React Hooks**.

Here we are using the systems design principle of **composability** so that users can use this component and assemble as depending on their needs.

Feel free to [watch](https://youtu.be/MEeZLM1XVLI?t=1884) the Byteconf React presentation Video. The presenter has different examples with reducers to take care of other use cases. Also check the code repo [here](https://github.com/kentcdodds/simply-react) to play with it yourself!

👋🏼👋🏼🚀
