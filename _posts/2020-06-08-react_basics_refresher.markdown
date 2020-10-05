---
layout: post
title:      "React 5 Minute Refresher"
date:       2020-06-08 19:31:03 -0400
permalink:  react_basics_refresher
---

> This is a React refresher on the basics...If you're new to React this should get you started on a conceptual realm. 

# React 5 Minute Refresher

This is a React refresher on the basics, **recommended to those with experience in React**. If you're new to React this should get you started on a conceptual realm. 

## React Brief History

- Back in the day, websites had synchronous tasks from the backend, and refreshed the page every time new data was needed.
- jQuery took care of complexities and also worked in all browsers.
- Backbone.js allowed to organize these .js files.
- Single Page Applications (SPA) were born out of working more and more with the DOM.
  - AJAX downloading all files at once. JS updating as needed.
- Angular.js was born out of this. It had containers that wrap the project. It also had an MVC pattern.
    - Angular in the beginning was very complex. Data flowing everywhere and app maintenance was harder.
- In 2013 React was released by Facebook. In 2014 Angular was also rewritten as a response.

## React Core Principles

-  React virtual DOM (don't touch the DOM). React will do it. 
   - *Imperative Programming*: Changing directly the DOM through JS (e.g. `getElementById`). This approach has that it becomes difficult to point and identify relationships between events.
   - *Declarative Programming*: Declares to React what the state or data should look like. React will make the decision of how to implement it. This `state` is one big JavaScript object. Resulting in less complexity, and faster developer times. 
- *Components* 
  - Put them together and they form bigger components and the whole app. You can copy these components and reuse them. 
  - Components are built with JSX. JSX stands for JavaScript XML. JSX allows us to write HTML with JavaScript.
  - Reusable components and we can use many component NPM packages. E.g React.Bootstrap, Blueprint etc.
- *Unidirectional* Data Flow.
  - Anytime we want something to change `state` has to change.
  - Data flows one way. State changes and trickle down. Data can't move up.
  - This could allow for easier debugging.
  - Angular is often thought as the opposite.
- React is not a framework
  - Angular is a framework and gives you everything. 
  - *React is a library* and lets you use any tools you want from outside.
- React Everywhere
  - React Native
  - React Desktop and React 360 (VR)

## Create React App

- Run as `npx create-react-app <app-name>`
- Create-React-App is CLI created so we can build fast apps.
- `npx` allows you to build using Create-React-App without globally installing it first.
- When we do `build` on React project, it will take all code inside src folder and bring it to public folder.
- Babel will make sure that the JS files will work on all browsers.
- Webpack is a module bundler that allows to write modular code. It takes all our Javascript and optimizes it for us.
- `react-scripts` does things for us so we don't worry about Webpack nor Babel. 
- React library allows us to write JSX. ReactDOM like the virtual DOM which interacts with the actual DOM, and makes DOM decisions for us.

**Warning: Ejecting Create-React-App**

- You have all scripts for Webpack to build, start and test your app.
- It's a lot of code, so not recommended to eject. 
- It is a lot like competing with a team of developers that work full time on this. They keep up-to-date with industry trends.

## Expanding React Key Concepts

**React and JSX**

JSX has different keywords such as `className` instead of regular HTML 'class'. Also anything in between `{}` is JavaScript injected through JSX.

React always intercepts all events and then we use setState to trigger a *re-render*. React re-renders anytime state is updated. 

So JSX creates that virtual DOM with state and then React re-renders the DOM as state changes.

**React Components**

Our React components act like custom elements that we can mix with common HTML elements but with special powers! 

You can have react components as classes or as functions. React class components have a `render()` method. We use classes to get access to `state` and `setState` to change state. We build these with ES6 `class` syntax.

To be able to do special things we get to use the special attribute `props` that carry data, functions and anything in between to make our application work effectively.

We can also have components that *do not* extend from `React.Component`. We can also get access to state via *hooks*. We build this with ES6 arrow functions. In the past these functional components only received props and returned HTML form JSX. With hooks, this has changed.

You might notice how Class Components could have methods and arrow function declarations inside. 

**Good Rule of Thumb**: 

Use *arrow functions* on any class methods you define that aren't part of React (i.e. render or componentDidMount.

**React Lifecycle Methods (Class Components)**

They are methods that get called automatically by React in particular instances of its component life.

1. `constructor()`: Called first. Allows the class to have access to lifecycle components. Here is where you declare your state.
2. `render()`: Render is called next to display HTML.
3. `componentDidMount()`: This lifecycle component when component is mounted good when calling fetch requests. This will cause a re-render so `render()` gets called again. This runs every time you refresh the page.
4. `componentDidUpdate`: Any updates brings your component to updating phase. React here selectively changes parts of the DOM and it *doesn't remount the component*. `componentDidUpdate` is called after update. Here you can do additional fetch calls as you compare prev and new props. [**Read more**](https://reactjs.org/docs/react-component.html#componentdidupdate).

Other lifecycle methods:

- `shouldComponentUpdate()`: It checks the props and can decide whether or not update. This is done for optimization read [**here**](https://reactjs.org/docs/react-component.html#shouldcomponentupdate) to learn more. You can also consider using React Pure Components, read [**here**](https://reactjs.org/docs/react-api.html#reactpurecomponent).
- `componentWillUnmount()`: Called when a component is being removed from the DOM. This is where cleanup can be done, such as memory leaks that JS garbage collection has not picked up. Read [**docs**](https://reactjs.org/docs/react-component.html#componentwillunmount) to learn more.

Check out this useful [diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/) on React lifecycle methods.

**Dawn of SPAs**

Before you used to make requests to the backend and you'll visit one or more pages. Now with SPAs (although the Javascript file is bigger) we don't have to keep coming back to request a new page to the server. Today we just *request for data* and refresh any part of page we need. 

So with SPAs you'll start talking with APIs to get the data you need. We build pages dynamically depending on user input/interaction.

**How do we decide to break a part of our app into a component?**

This is key for you to practice and know as a React developer. You should decide this for yourself. The idea is that you can reuse this components on other applications and make things more flexible. So you start building your component library. 

Learn more about component libraries [here](http://fbohz.com/component_library_storybook). 

**State and Props**

When we pass down state, this is usually received as prop by children. This is related to *one way data flow* of React. 

Remember you can also put state wherever you want. You'll have to practice how to implement that. Every time state changes there might be implications on re-render and could affect performance. You'll start seeing how there is a *tree of state* that any changes might have trickle down effects.

When you work on your tree of state you might want to *lift state* to parent components so that it can be shared by children. 

Managing state can become tedious and complicated at best, we recommend using [Redux](https://redux.js.org/) state management add-on as your state gets more complicated. 

**Synchronous vs Asynchronous**

Remember this distinction. Synchronous happens literally immediately. Async takes time that JavaScript nor React knows. JS runs the code after it, and then returns when the promise is resolved. React `setState()` is async, because React decides for itself when is the best time to run it. 

Tip: In order to see changes after using setState you must use its second argument. [Read more](https://medium.com/@yelstin.fernandes/using-setstates-optional-second-parameter-in-react-js-1ecd5de6f1ea).

**Virtual DOM**

Remember we don't directly (imperatively) change the DOM. React takes care of the DOM through the virtual DOM. React has what is called `synthetic event`, which it means that React will interfere on all events and decide what to do. React only deals with the real DOM when it sees fit and with its own patterns, that is why React feels so fast. 

So React takes all the hard work on showing and hiding elements from the DOM for us. But we have to learn its re-render mechanism and how to manage state. This will make us a pro React developer.

## How Can I be a Top React Developer?

1) **Decide on Components**: What is a component and how will you divide the app.
2) Decide on **state and where it lives**. Decide how you'll manage state (e.g. Redux, hooks, or props).
3) Know **what changes when state changes**.

## Resources

- [**JSON Placeholders**](https://jsonplaceholder.typicode.com/)
- Styling with[ **Styled Components**](https://www.youtube.com/watch?v=feYJ5D7VknE&feature=emb_title).
- [**React lifecycle methods**](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/).
- [**React course**](https://www.udemy.com/course/complete-react-developer-zero-to-mastery/).
- [**React Router**](https://reacttraining.com/react-router/web/guides/quick-start). For Navigation in React. How is navigation possible in SPAs? React Router takes advantage of the history API brought by modern browsers to mimic routing.

😅 Well this wasn't exactly a 5 minute refresher. But hopefully it was useful. Happy React studying 🙌🏼