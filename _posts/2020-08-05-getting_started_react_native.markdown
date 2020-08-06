---
layout: post
title: "Getting Started with React Native"
date:       2020-08-05 19:31:03 -0400
permalink: getting_started_react_native
filename: 2020-08-05-getting_started_react_native
---

> This article on React Native assumes previous knowledge on React so there will be concepts that come from React.

# Getting Started with React Native

**Before you get started:** This article on React Native assumes previous knowledge on React so there will be concepts that come from React. While reading please refer to the [**Demo repository**](https://github.com/fbohz/react-native-blogs-practice/tree/master/1.Demo) I made previously. Also, read my previous blog on [React basics](http://fbohz.com/react_basics_refresher) if you need a refresher.

React Native (RN) is:

- Cross-platform, native iOS and Android apps without web views
- Mainly focused on the front-end. Uses React JavaScript
- 100% access to native APIs via JavaScript and reuse of packages from NPM
- Backed by Facebook

**React Native Approach**

There are React native specific components such as `<View>` and `<Text>`. RN is a real mobile app. It also uses hot reloading.

It also gives you the options to go native and inject out Swift/Java should you need. Although most of the time you shouldn't do it.

**How RN works**

![rn1](https://user-images.githubusercontent.com/15071636/82259138-b43b2680-9920-11ea-86be-545e6896e3fd.png)

Android has (V8 JS) and iOS (JS core), RN has the bridge that then implements its framework with JS. RN then spits out native code when we are ready to build with the `export SDK`.

**Getting Started: Using Expo (Preferred)**

First [read React Native docs](https://reactnative.dev/docs/getting-started).

Then, to get everything running you should install Expo at [expo.io](https://expo.io/learn). Expo will ensure you can test app on mobile straight.

After installation. To start directly with a new expo app use `expo init projectName` then do `expo start`. You can also clone the [**source code repository**](https://github.com/fbohz/react-native-blogs-practice/tree/master/1.Demo). Then just do `npm install` and `expo start`.

From here, you'll need to download the mobile app version (either in AppStore or GooglePlay) of Expo and create an account. Once in the Expo app just scan the generated QR code and you're up and running!.

**RN Project Structure**

Similar convention with React but no `index.js`. `App.js` also is your entry point.

Also note the inline based styling different from React. `StyleSheet` is imported from RN like JS to apply styles that you can reuse. RN uses _flexbox_ CSS.

## React Native Components

These are just like React components!

- All the features of React components: state, props, JSX, etc.
- It uses native components instead of web components in building the view
- We also use an all-in-one _UI kit_ for creating apps in react native!
- It provides several useful UI components
- Useful in designing the UI for your app

There are some _primitive RN elements_ such as the following:

![Screen Shot 2020-05-20 at 5 29 00 PM](https://user-images.githubusercontent.com/15071636/82503725-73c5df00-9abf-11ea-93dc-2a5ae3287c92.png)

As you follow along don't forget to download and run the following repo [here](https://github.com/fbohz/react-native-blogs-practice/tree/master/1.Demo). Again, if you navigate to `App.js`, you'll notice `StyleSheet.create`, this is optional and you can also pass styles **inline** just like in React.

You might also notice how when you need to return more than one element you need to wrap it in a single element in this case we can do it in a `<View>`.

**Implementing React Native Elements**

The following example uses `FlatList` from 'react-native' and `ListItem` from 'react-native-elements'.

If you check on the [repo](https://github.com/fbohz/react-native-blogs-practice/tree/master/1.Demo), you'll see the `<ListScreen>` component. There you'll identify the React Native's _FlatList Element_:

![Screen Shot 2020-05-20 at 8 14 30 PM](https://user-images.githubusercontent.com/15071636/82512733-8bf52880-9ad6-11ea-9a40-03fd346f35d6.png)

So FlatList does optimizations for you for the mobile world when lists become big. Here the FlatList reminds us just like React that `key` is important. 'Keys' are important when this list is changed, RN will have to rebuild the entire list if we don't specify the key. Keys optimize and RN will re-render only what it needs.

FlatList properties:

- `horizontal` will make list horizontal. Only need to add keyword `horizontal` as Flatlist element prop.
- To hide horizontal bar below just have `showsHorizontalScrollIndicator={false}`

## RN Navigation

Extensible and easy-to-use navigation solution. React Native Navigation supports navigational features. We can have common views of a navigational menu, with _stack based_ pages we commonly see on mobile apps.

![Screen Shot 11 56 01 AM](https://user-images.githubusercontent.com/15071636/82474695-0a2edc00-9a91-11ea-9dcb-ebd4ccb89357.png)

To install read documentation [here](https://reactnavigation.org/docs/getting-started/).

_Note:_ You might notice the newer version of RN Navigation has different implementation.

Features:

- It automatically adds back bottom.
- Provides support for transition between screens
- Manages navigation history
  - Similar to web browser
- Provides the gestures and animations when navigating between routes in the stack
  - Enables you to go back, tied to Android back button

**Two Types of Buttons for Navigation**

![Screen Shot 2020-05-20 at 9 19 19 PM](https://user-images.githubusercontent.com/15071636/82516115-99fb7700-9adf-11ea-80b6-00c9ef98ec47.png)

We add the text as string and use the `onPress` attribute. Remember Button element is self-closed. Out of both for navigation we recommend TouchableOpacity element if you need more customization.

**Implementing Navigation**

We implement navigation on RN with React Navigator. In `App.js` we see how it uses the `createStackNavigator()` method. Depending on the version of React Navigator the way you implement it might change.

With props passed by the stackNavigator() we can tell what to show or not on the screen. To access the navigation object you access it by `props.navigation`. On the included `props.navigation.navigate()` method we can pass in the screen we defined on App.js and it will render the component we want! It is easy as:

`onPress={() => props.navigation.navigate('ComponentName')}`

And voilà! This takes us to the basic navigation and UI display with React Native!

![May-20-2020 22-38-00](https://user-images.githubusercontent.com/15071636/82520784-a33e1100-9aea-11ea-97de-cf99b4713692.gif)

## React Native - Further Reading

<ul>
<li><a href="https://blog.nerdjfpb.com/project-ideas-for-react-native-beginners-to-expert/" target="_blank" rel="noopener nofollow">15 React Native App IDEAS: BEGINNER TO EXPERT</a></li>
<li><a href="https://www.logicroom.co/react-native-architecture-explained/" target="_blank" rel="noopener nofollow">React Native Architecture : Explained!</a></li><li><a href="https://medium.com/kuralabs-engineering/reactive-core-architecture-for-react-native-and-react-applications-d590daf4ef8a" target="_blank" rel="noopener nofollow">Reactive Core architecture for React Native and React applications</a></li><li><a href="http://www.discoversdk.com/blog/how-react-native-works" target="_blank" rel="noopener nofollow">How Does React Native Work?</a></li><li><a href="https://www.youtube.com/watch?v=7rDsRXj9-cU" target="_blank" rel="noopener nofollow">React.js Conf 2015 Keynote 2 - A Deep Dive into React Native</a></li>
<li><a href="http://www.smashingmagazine.com/2014/10/providing-a-native-experience-with-web-technologies/" target="_blank" rel="noopener nofollow">Hybrid Mobile Apps: Providing A Native Experience With Web Technologies</a></li><li><a href="https://developer.salesforce.com/page/Native,_HTML5,_or_Hybrid:_Understanding_Your_Mobile_Application_Development_Options" target="_blank" rel="noopener nofollow">Native, HTML5, or Hybrid: Understanding Your Mobile Application Development Options</a></li><li><a href="http://mobile-frameworks-comparison-chart.com/" target="_blank" rel="noopener nofollow">Mobile Frameworks Comparison Chart</a></li><li><a href="http://www.riaxe.com/blog/top-cross-platform-mobile-development-tools/" target="_blank" rel="noopener nofollow">40+ CROSS PLATFORM DEVELOPMENT TOOLS FOR MOBILE APP AND GAMES</a></li>
<li><a href="https://facebook.github.io/react-native/docs/components-and-apis.html" target="_blank" rel="noopener nofollow">Components and APIs</a></li><li><a href="https://facebook.github.io/react-native/docs/view.html" target="_blank" rel="noopener nofollow">View</a></li><li><a href="https://facebook.github.io/react-native/docs/text.html" target="_blank" rel="noopener nofollow">Text</a></li><li><a href="https://facebook.github.io/react-native/docs/flatlist.html" target="_blank" rel="noopener nofollow">Flatlist</a></li><li><a href="https://facebook.github.io/react-native/docs/stylesheet.html" target="_blank" rel="noopener nofollow">Stylesheet</a></li><li><a href="https://react-native-training.github.io/react-native-elements/docs/getting_started.html" target="_blank" rel="noopener nofollow">React Native Elements</a></li><li><a href="https://react-native-training.github.io/react-native-elements/docs/overview.html" target="_blank" rel="noopener nofollow">React Native Elements 1.0.0-beta5 Documentation</a></li><li><a href="https://react-native-training.github.io/react-native-elements/docs/listitem.html" target="_blank" rel="noopener nofollow">RNE List Item</a></li><li><a href="https://react-native-training.github.io/react-native-elements/docs/card.html" target="_blank" rel="noopener nofollow">RNE Card</a></li>
</ul>
