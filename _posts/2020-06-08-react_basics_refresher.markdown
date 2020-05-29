---
layout: post
title:      "React 5 Minute Refresher"
date:       2020-06-08 19:31:03 -0400
permalink:  react_basics_refresher
---

> This is a quick React refresher on the basics...If you're new to React this should get you started on a conceptual realm. 

# React 5 Minute Refresher

This is a quick React refresher on the basics, **recommended to those with experience in React**. If you're new to React this should get you started on a conceptual realm. 

## React Brief History

- Back in the day website had sincronous ask from backend what it needed.
- jQuery took care of complexities and also worked in all browsers
- Backbone.js allowed to organize these js files.
- SPA was born out of working more and more with the DOM.
    -   AJAX downloading all files at once. JS updating as needed.
- Angular was born out of this. It had containers that wrap a project. It also had an MVC pattern.
    -    now there was more complexity. Data flowing everywhere and app maintenance was harder.
- 2013 React was released by Facebook. 2014 Angular was also rewritten as response.

## React Core Principles

-  React virtual DOM - Don't touch the DOM. React will do it. 
   - *Imperative Programming*: Changing directly the DOM through JS (e.g. getElementById). This approach has that it becomes difficult to point and identify relationships between events.
   - *Declarative Programming*: Declares to React what the state or data should look like. React will make the decision of how to implement it. This `state` is one big JS object. Resulting in less complexity, faster developer times. 
- Components. 
  - Put toguether they form bigger components and form the whole app. You can copy these components and reuse them. Components are built with JSX.
  - Reusable components e.g. React.bootstrap, Blueprint etc.
- *Unidirectional* Data Flow.
  - Anytime we want something to change 'state' has to change.
  - Data flows one way. State changes and trickle down. Data can't move up.
  - This could allow for easier debugging.
  - Angular is opposite here.
- React is not a framework
  - Angular is a framework and gives you everything. 
  - *React is a library* and lets you use any tools you want from outside.
- React Everywhere
  - React native
  - React desktop, React 360 (VR)

## Create React App

- CLI created so we can build fast React apps.
- npx allows you to build using Create React App without globally installing it first.
- VS code remember to install code in path to open files and folders
- `react-scripts` does things for us so we don't worry about webpack nor Babel. 
- when we do build on React project, it will take all code inside src and bring it to public folder.
- Babel will make sure that the JS files will work on all browser.
- Webpack is a module bundler. Let us write modular code. It takes all our javascript and optimize it for us.
- React library allows us to write JSX. ReactDOM like the virtual DOM which interacts with the actual DOM.

**Warning: Ejecting Create React App**

- You have all scripts for webpack and build, start and test scripts.
- It's a lot of code, so not recommended to eject. It is like a lot of competing with developers that work full time on this. They keep up-to-date with industry trends.

## Expanding React Key Concepts

**React and JSX**

JSX has different keywords such as `className` instead of regular HTML 'class'. Also anything in between `{}` is JavaScript injected through JSX.

React always intercepts all events and then we use setState to trigger a *re-render*, b/c state just got updated. 

JSX creates that virtual DOM and then re-renders as state changes.

**React Components**

You can have react components as classes just as functions. React class components have a `render()` method. We use classes to get access to `state` and `setState` to change state. We build these with `class` syntax.

We can also have components that *do not* extend from `React.Component`, we can also get access to state via *hooks*. We build this with ES6 arrow function syntax. In the past these functional components only received props and returned HTML form JSX.

Our React components act like custome elements that we can mix with common HTML elements but with special powers! 

To be able to do special things we get to use the special attribute `props` that carry data, functions and eveything to make our application work effectively.

Last thing. You might notice on Class Components could have methods and arrow function declarations inside. A good rule of thumb is this: Use arrow functions on any class methods you define and aren't part of React (i.e. render(), componentDidMount()).

**React Lifecycle Methods (Class Components)**

They are methods that get called automatically by React in particular instances of the component life.

1. `constructor()`: Called first. Allows the class to have access to lifecycle components. Here is where you declare your state.
2. `render()`: Render is called next to display HTML.
3. `componentDidMount()`: This lifecycle component when component is mounted good when calling fetch requests. This will cause a re-render so `render()` gets called again.
4. `componentDidUpdate`: Any updates brings your component to updating phase. React here selectively changes parts of the DOM and it *doesn't remount the component*. `componentDidUpdate` is called after update. Here you can do additional fetch calls as you compare prev and new props. [Read more](https://reactjs.org/docs/react-component.html#componentdidupdate).

Other lifecycle methods:

- `shouldComponentUpdate()`: It checks the props and can decide whether or not update. This is done for optimization read [here](https://reactjs.org/docs/react-component.html#shouldcomponentupdate) to learn more. You can also consider using React Pure Components, read [here](https://reactjs.org/docs/react-api.html#reactpurecomponent).
- `componentWillUnmount()`: Called when a component is being removed from the DOM. This is where cleanup can be done, such as memory leaks that JS garbage collection has not picked up. Read [docs](https://reactjs.org/docs/react-component.html#componentwillunmount) to learn more.

Check out this useful [diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/) on React lifecycle methods.


**Birth of SPAs**

Before you used to make requests to the backend you'll visit one or another page. Now with SPAs although the JS file is bigger, we don't have to keep coming back to request a new page to the server and just *request for data* and refresh any part of page we need. 

So with SPAs you'll start talking with APIs to get the data you need. So we build pages dynamically depending on user input.

**When do we decide to break a part of our app into a component?**

This is key for you to practice and know as a React developer. You should decide this for your self. The idea is that you can reuse this components on other applications and make things more flexible. So you start building your component library. Learn more about component libraries [here](http://fbohz.com/component_library_storybook). 

**State and Props**

When we pass down state, this is usually received as prop by children. This is related to *one way data flow* of React. 

Remember you can also put state wherever you want. You'll have to practice how to implement that. Every time state changes there might be implications on re-render and could apply performance. You'll start creating a *tree of state* that changes effect trickle down.

When you work on your tree of state you might want to *lift state* to parent components so that it can be shared by children. 

**Synchronous vs Asynchronous**

Remember this distinction. Synchronous happens literrally immediately. Async takes time that JavaScript nor React does not know. JS runs the code after it, and then returns when the promise is resolved. React `setState()` is async, because React decides for itself when is the best time to run it. In order to see change after when using setState you must use the second argument on its syntax.

**Virtual DOM**

Remember we don't directly (impreatively) change the DOM. React takes care of through the virtual DOM. React has what is called `synthetic Event`, which it means that React will interfere on all events and decide what to do. React only deals with the real DOM when it sees fit and with its own parameters that is why React feels so fast. 

So React takes all the hard work on showing and hiding elements from the DOM for us but we have to learn its mechanism for re-render and how we manage state. 


## So how, can I be a top React developer?

- **Decide on Components**: What is a component and how you will divide the app.
- Decide on **state and where it lives**.
- Know **what changes when state changes**.

## Resources

- [**JSON Placeholders**](https://jsonplaceholder.typicode.com/)
- Styling with[ **Styled Components**](https://www.youtube.com/watch?v=feYJ5D7VknE&feature=emb_title).
- [**React lifecycle methods**](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/).
- [**React course**](https://www.udemy.com/course/complete-react-developer-zero-to-mastery/).