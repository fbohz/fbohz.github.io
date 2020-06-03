---
layout: post
title:      "React Component Library"
date:       2020-05-18 19:31:03 -0400
permalink:  component_library_storybook
---

> React component libraries ensure that your application is well designed, accessible and easy to use. 

*Note:* This short article is a continuation of what I learned while participating at [Byteconf React](https://www.bytesized.xyz/react-2020). 

**React component libraries** ensure that your application is well designed, accessible and easy to use. 

As applications grow and evolve they could face these challenges:
- **Lack of consistency**: like different colors, fonts, so UI styles changes. UI elements could be different depending of component.
- **UX challenges**: E.g. if confirm button is blue on one page but then the cancel is blue on the next it can cause confusion.

Here's where component libraries can really help! 🙌🏼

## Storybook to the Rescue! 

First things first. The truth is that it **takes time** to build component libraries 😑. So often no one wants to build these. **However, it is worth investing the upfront time**.

**React Storybook**

Storybook is a React tool for developing UI components. An example of using Storybook tool to build component libraries can be found [here](https://myelin.herrmannsolutions.net/).

By using Storybook you can have a centralized a place for quick reference and create faster prototyping.  It offers example of common components along with specific styling and documentation.

Some examples:

![example1a](https://user-images.githubusercontent.com/15071636/80983926-cb432a00-8df2-11ea-9c9e-4c0022e0e0d3.png)

![example1b](https://user-images.githubusercontent.com/15071636/80983923-ca11fd00-8df2-11ea-8b7d-48ae1ca4b86b.png)

![example2a](https://user-images.githubusercontent.com/15071636/80983919-c8e0d000-8df2-11ea-8f40-c1dac9bc69a1.png)

![example2b](https://user-images.githubusercontent.com/15071636/80983890-bd8da480-8df2-11ea-94ca-16b5065001f6.png)


## How to Build Your Own Library

Building the components is the easiest part of building the library. Storybook has many add-ons you can use. You can start with vanilla Storybook and expand.

For animated components you can use **GreenSock** or **Animate.CSS**. For icons you can use FontAwesome. You can also try Rollup.js as an alternative to Webpack. 

*Building Your Library*

Go through your app screen by screen and create an **interface inventory** in a document. 

![uiinventory](https://user-images.githubusercontent.com/15071636/80984904-1873cb80-8df4-11ea-8ab1-6a97a5030795.png)

Then choose the *most used* components (8 max at the beginning). At the beginning you'll copy the code of it into Storybook.

As you have your **library small** of 5-8 components, you can have users start getting used to the library without having a lot of *unused components*.

Think about different situations in which each component will be used and build library on it. E.g. buttons:

![buttons](https://user-images.githubusercontent.com/15071636/80985340-b5366900-8df4-11ea-9141-aca06586b0a1.png)

Not only colors here but also *state* (e.g. disabled, active states).

*Consistent Components and Documentation*

Documentation is key so your users of the library will know how and when to use each component.

Check out this component [checklist](https://twitter.com/EmmaBostian/status/1177248937763311617) you can use as you build your library.

*Testing your Library*

As you have users testing your library you might have to do edits. You can prevent this by being thorough and trying to go on all use cases of components.

Ask users for specific feedback. E.g. What parts are useful/not useful? Do they hit snags in implementation?

*Expanding and Maintaining Your Library*

Keep **backlog of components** that you want to build in the future. This is important as you start to include other team members to contribute in your library. 

You might also see that some components are not being used. Try to reduce this clutter in library. Check with other developers and designers why a component is not being used. **Tag components** to denote status. E.g. retiring, active component etc. This labeling will keep users up-to-date on whats going on with your library.

You can also have an external version of library (such as the link shared above). The internal version can have internal tags as well, IP information, etc.

*Maintenance* is also key. Think where you can tie component library creation. Sprint planning can be useful to tie it with the component backlog. Make sure you're active in maintaining your library so it doesn't become outdated.


*Final tips*

- **Keep it simple**. Sometimes being limiting/restricting on props, might mean you have to add a lot of conditionals to keep up with all the use cases. So being open at the beginning can save you a lot of upfront time. Start with less opinionated component and build from there if really need it. Make your components more flexible. See my [**last blog**](http://fbohz.com/react_pattern_apropcalypse) for more info on flexible components.
- Unfinished components are ok. Build from the feedback of your users.
- Have accesibility in mind.
- [**Read Atomic Design Book**](https://atomicdesign.bradfrost.com/table-of-contents/) to increase your knowledge and build a solid library with advanced components families. 
- Don't forget the [**component checklist**](https://twitter.com/EmmaBostian/status/1177248937763311617) you can use as you build your library.
- Check out the presentation video [**here**](https://youtu.be/MEeZLM1XVLI?t=10258).

That's all folks. Happy component library building! 📗