---
layout: post
title:      "React Hooks: Going Beyond useState"
date:       2020-07-07 19:31:03 -0400
permalink:  going_beyond_usestate_react
filename: 2020-07-07-going_beyond_usestate_react
---

> Handling payments is very complex, not talking the security risks one can take if handling payment information. Stripe API, make things easier, secure and faster to deploy

# React Hooks: Going Beyond `useState`

Hooks were implemented in 2019. They have very interesting features and bring some changes to building components. Hooks can only be used in React 16 or higher and on functional components. Read about the motivation to add React Hooks [here](https://reactjs.org/docs/hooks-intro.html#motivation).

Now probably by know, everyone with some React knowledge should know about the `useState` Hook. It lets us use state in functional components. You can use as many as use state hooks as needed. This is an alternative to setting state with deeply nested objects. On this article we'll go beyond useState and explore other hooks.

**useEffect**

`useEffect` lets us employ lifecycle kind of methods to functional components. This has to do with dealing with side-effects including API calls. 

```js
// mimics as a render lifecycle method

useEffect(() => {
    console.log('hello')
})

// ...assume this code on an input
onChange={e => setQuery(e.target.value)}

// useEffect gets called whenever onChange changes value

```

useEffect does not get a value, but gets a function that gets called whenever the component changes/updates and re-renders. It works as componentDidMount and also as the render method when the component gets updated.

If we want to use useEffect as componentDidMount we add an array as second argument.

```js
useEffect(() => {
    console.log('hello')
},[])

```

The array takes an array of properties we want to watch and it will render if those properties change. If the array is empty is like componentDidMount. Now how could we implement an API call using useEffect?

```js
useEffect(() => {
    if (query.length > 0) {
        const fetchUser = async () => {
            const res = await fetch('baseURL')
            const resJson = await res.json()
            //useState call
            setUser(resJson)
        }
    
        fetchUser()
    }
},[query])

```

Make sure you add the *empty array*, or with special properties if you plan it to run it once. In this case it will update if the search query updates on the example above. The conditional then ensures we are calling useEffect if queries are valid. You can read more about [Hook rules](https://reactjs.org/docs/hooks-rules.html).

*Note*: You might get a warning when using useEffect that says something like 'React Hook useEffect has a missing dependency...etc'. To add a safeguard if calling an API pass in the api in the array list as such:

```js
    // behaves like componentDidMount avoids missing dependency warning
    useEffect(() => {
      checkUserSession()
    }, [checkUserSession])

```

**useEffect as componentWillUnmount**

We can also pass a cleanup function, so return a function from a function. This is useful when implementing subscriptions, so on the cleanup function it will be for unsubscribing.

![Screen Shot 2020-06-10 at 9 52 11 PM](https://user-images.githubusercontent.com/15071636/84339775-cb0e1b00-ab64-11ea-8100-21328333460d.png)

**useEffect Boilerplate Code**


```js
//ComponentDidMount
//Class
componentDidMount() {
    console.log('I just mounted!');
}
 
//Hooks
useEffect(() => {
    console.log('I just mounted!');
}, [])


//ComponentWillUnmount
//Class
componentWillUnmount() {
    console.log('I am unmounting');
}
 
//Hooks
useEffect(() => {
    return () => console.log('I am unmounting');
}, [])


// ComponentWillReceiveProps
//Class
componentWillReceiveProps(nextProps) {
    if (nextProps.count !== this.props.count) {
        console.log('count changed', nextProps.count);
    }
}
 
//Hooks
useEffect(() => {
    console.log('count changed', props.count);
}, [props.count])

```

**Reusable Custom Hooks**

Sometimes you might have similar situations in which you're using the same hooks, with very small differences.  Lets say you're fetching with useEffect then setting state depending on the return of the fetch. Here's where reusable Hook components work. 

Here's how we can implement custom hooks:

1. Create new folder called 'effects' then a file with the name of your custom hook with the 'use' keyword. E.g. 'useFetch'.
2. Create your custom hook. E.g.

![Screen Shot 2020-06-11 at 12 26 38 PM](https://user-images.githubusercontent.com/15071636/84421224-db63db80-abe0-11ea-9fe5-fe6addc1779f.png)

3. Import it and use it
   
![Screen Shot 2020-06-11 at 12 42 25 PM](https://user-images.githubusercontent.com/15071636/84421372-16fea580-abe1-11ea-9bb1-9cbc68fb35b7.png)

It is like writing utility functions. Then you can make those custom hooks to share functionality. 

Note also the example there's no second argument with the `[]` passed so it gets called whenever the `useFetch` custom hook gets called. We could also pass the 'url' as the second argument. Since our user might change and there are no dependencies here we don't pass the second argument in this use case. So in this case the component that use it, will fire the useFetch whenever it re-renders. 

**useReducer**

The useReducer hook can be similar as to what you use with Redux. useReducer is for cases where you need more complex state management than useState. You can read the documentation [here](https://reactjs.org/docs/hooks-reference.html#usereducer). 

Consider the following [useReducer example](https://gist.github.com/fbohz/6440ad94a264336fe6c2b00c2ce2131f).

<script src="https://gist.github.com/fbohz/6440ad94a264336fe6c2b00c2ce2131f.js"></script>

As you can see is similar to Redux. We also destruct different values. In the useReducer, we pass the reducer and the initial state value.

The initial state we created accordingly and the reducer is just like in Redux. Then you can see the action creators setUser and setQuery with types and payload, again like Redux. Now how we pull the values we destruct them from our state variable and we dispatch them with our dispatch, e.g. `dispatch(setUser(resJson[0]))`. So React seems to be moving in which we might or not want to use Redux in our case or the other. 

**Implementing Context API with `createContext` and `useContext`**

Context API was recently updated by the React team. Context API is also used by Redux but now is more powerful. Context API tries to solve props drilling, and is a way to store different states in separate components and add them as Hooks. This is done like Redux.

In order to implement context Hook:

- Create the context using createContext
- Import the context you created and also the useContext library. Pass in the context created to useContext as your context. E.g. `const myContext = useContext(sampleContext)`.

In Studio Ghibli Fan App we implemented this in the [Collection page](https://github.com/fbohz/studio-ghibli-fan-app-demo/blob/1.4.0.5_ContextAPI/src/pages/collection/Collection.js). The context created can be found [here](https://github.com/fbohz/studio-ghibli-fan-app-demo/tree/1.4.0.5_ContextAPI/src/contexts/collections).

**Dynamically Set Values with Context API**

Here we take advantage of Context.Provider. We implemented it on [App.js](https://github.com/fbohz/studio-ghibli-fan-app-demo/blob/1.4.0.5_ContextAPI/src/App.js) wrapping the header to pass the currentUser context. We use the `value` attribute to pass the state we need on on to the Context Consumer in this case Header. So if currentUser changes then Header, as the consumer re-renders. Take a look at how Header consumes the context created [here](https://github.com/fbohz/studio-ghibli-fan-app-demo/blob/1.4.0.5_ContextAPI/src/components/Header.js).

We can even create whole providers with Context API that we pass into our own index.js just like Redux.

Here you might see a *caveat* that we have to re-leverage component state to use this created context. But it can be easier to pass state into nested components. Remember we are solving prop drilling.

**Context API vs Redux**

It is rare that you have an app that uses both. But you'll have to decide. Things like Redux-persist, Redux-logger still are pretty robust and difficult to implement fast with Context API. Redux is more opinionated but with Context API we loose sagas, thunk, etc. Context API might make our component less reusable as we tight the components to their specific contexts they live. Also as app grows with Context API you might be having a lot of providers in index.js while redux there's the root provider. So Redux for larger scale apps might be a better go. Context API would be good for a portfolio project or small landing page with not that much reusability. 

**Should we adopt Hooks?**

Hooks are fairly new, but apps are using them, there's still a lot of hype around them. A lot of companies have built scalable apps without hooks, so it'll take time to migrate to hooks. Below are some resources you can use in your learning of these exciting hooks.

- [React Redux Hooks](https://react-redux.js.org/next/api/hooks). Look into the useSelector.
- [Complete guide of useEffect](https://overreacted.io/a-complete-guide-to-useeffect/).