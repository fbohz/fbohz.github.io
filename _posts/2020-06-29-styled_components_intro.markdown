---
layout: post
title:      "CSS In JS? Yes! Styled Components 💅🏽"
date:       2020-06-29 09:31:03 -0400
permalink:  styled_components_intro
filename: 2020-06-29-styled_components_intro
---

> Styled Components can be an advanced topic, and it comes with tradeoffs with pros and cons. As you move into becoming an advanced React developer know when to use this tool is efficient and when you should not add this overhead. Each project and each situation is different and you should make the right call before you jump into the latest trend. 

# CSS In JS? Yes! Styled Components 💅🏽

This is a hot topic. The usual way was separating your CSS files and add your styles as needed. Then import them to the appropriate component. With React we scope the CSS to the specific component that we want to style.

Back then styling was very simple, nowadays with large scales app styling can get very complicated and organizing CSS as difficult. 

Problem can be with CSS that shares same namespace so if another developer adds their own styling to `.name` then it could cause conflicts. To overcome this different implementations such as [BEM](http://getbem.com/) have risen. However with BEM class names can become very nested with lots of mental overhead. 

With React we could leverage this even further by creating style constants then apply it to the specific component. E.g.

![Screen Shot 2020-06-03 at 9 00 14 PM](https://user-images.githubusercontent.com/15071636/83706504-43ad2e80-a5dd-11ea-8564-d654dc5aa643.png)

With this way there are some limitation with limited functionality (not all CSS selectors are available here) but the most popular enhancement to CSS in JS right now is Styled Components (SC).

To purists they believe CSS should be done in CSS but performance might be enhanced along with the readability of your app.

**What is Styled Components?**

SC will make our code into components, so then we can *encapsulate* our CSS to avoid the usual problems of styles leaking across components.

*Note*: If you're on VS Code we recommend installing the `vscode-styled-components` extension, it will highlight your syntax so you get used to and it will help you get a head start with this great library.

After you [read](https://styled-components.com/) and install SC (`yarn add styled-components`) you should import it on the specific component you want to implement it. The documentation has a simple example:

```html
import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

render(
  <Wrapper>
    <Title>
      Hello World!
    </Title>
  </Wrapper>
);
```

Here you can see that the attribute after `style` it is just the element, so it could be an h2, div, img etc. Then we use string interpolation just like we usually do in React. However here we add our own styling. The styles we create are just elements that we can then use but with styles. These elements themselves can have additional styling, class names etc. So we use Title and Wrapper like any other React component – except they're styled!

Now if you do a console.log you will see that SC gives each component their own unique class name. Because of this styles will never bleed. So you can share names with different components, and they will never be collisions. 

SC also supports all selectors and it will even support `props`! Learn more about it in [docs](https://styled-components.com/docs/basics#passed-props).


**Implementing SC in our React App**

Now for small apps you could definitely implements SC in the components themselves. However you can also separate SC into their own JS files for better access by other developers. Here's the naming structure of folders and files.

So let's say you have a Homepage component with a className of "homepage" you'll then create a new JS file that will hold the specific SC code. Then you will just take a look at the CSS file code and convert it as SC code as this:

```css
/* old css file */
.homepage {
  display: flex;
  flex-direction: column;
  align-items: center;
}
```

homepage.styles.js:

```html
import styled from 'styled-components';

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
```

And our Homepage changes:

```js
//old Homepage.js
const HomePage = () => (
  <div className='homepage'>
  </div>
);


//Homepage.js with SC
import { HomePageContainer } from './homepage.styles';

const HomePage = () => (
  <HomePageContainer>
  </HomePageContainer>
);
```

Quiet easy right? With more complicated components you might need to go through the documentation, but all-in-all usually is pretty straightforward. You add styles as different const and for example if you need to style an imported element such as Link from React Router you'll just do:

```html
import {Link} from 'react-router-dom'

export const OptionLink = styled(Link)`
    height: 100%;
`

<OptionLink to="/shop"> SHOP <OptionLink/>
```

You saw how we use it in our component as pass the props as usual.

If you need to leverage CSS to reuse and share with other styles you can write it with style components such as in this example:

```html
import styled, { css } from 'styled-components';

const ReusableStyles = css`
    display: flex;
    cursor: pointer;
`

export const OptionLink = styled(Link)`
    ${ReusableStyles}
`

export const OptionDiv = styled.div`
    ${ReusableStyles}
`
```

If you want to make even more easier you can just use the `as` keyword and it will do the same as the reusable css code above without importing the css module. With the 'as' keyword you can also include `{}` to import other components etc. 

```js
<OptionLink as='div' onClick{() => handleChange()} />
```

With SC css you can also conditionally render CSS blocks.

```html
const buttonStyles = css`
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

const getButtonStyles = props => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;
};
```

You might notice that you can also implement SCSS patterns with SC.

**Styled Components Tradeoffs**

Styled Components can be an advanced topic, and it comes with tradeoffs with pros and cons. As you move into becoming an advanced React developer know when to use this tool is efficient and when you should not add this overhead. Each project and each situation is different and you should make the right call before you jump into the latest trend. 