---
layout: post
title:      "Implementing Stripe API in React"
date:       2020-07-20 19:31:03 -0400
permalink:  stripe_api_implementation
filename: 2020-07-20-stripe_api_implementation
---

> Handling payments is very complex, not talking the security risks one can take if handling payment information. Stripe API, make things easier, secure and faster to deploy

# Implementing Stripe API in React

In my latest React project, [Studio Ghibli's Fan Hub](https://studio-ghibli-fanhub.herokuapp.com/) I implemented Stripe API to test and handle payments on the Shop component of the app. 

Handling payments is very complex, not talking the security risks one can take if handling payment information. Stripe API, make things easier, secure and faster to deploy.

**Intro to Stripe**

Stripe is well known in the payments sphere. You can read the [docs](https://stripe.com/docs) to learn more how easy it can be implemented. But basically Stripe renders itself the handling of payments and you implement some configuration to get the payment information and handle it backend. For this post we will focus on the frontend with React.

**Setting Up Stripe**

Again we will implement the *frontend of Stripe*. We might implement the backend handling of the data received in a future blog.

First things first lets [sign up for Stripe account](https://dashboard.stripe.com/register).

**Integrating Stripe**

Lets add it to our package.json

`yarn add react-stripe-checkout`

With this installed we can now add our Stripe element to render it frontend. Lets begin by creating a boilerplate element such as this one.

```js
import React from "react";
import StripeCheckout from 'react-stripe-checkout'

const StripeBtn = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey = "your_key"
    
    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }

return (
<StripeCheckout
    label="Pay Now"
    name="Studio Ghibli's Fan Hub (Demo Purposes)"
    billingAddress
    shippingAddress
    image="https://svgshare.com/i/Lko.svg"
    description={`Your (demo) total is ${price}`}
    amount={priceForStripe}
    panelLabel="Pay Now"
    token={onToken}
    stripeKey={publishableKey}
>

</StripeCheckout>
)
}

export default StripeBtn
```

Not here it is worth mentioning that stripe handles values as cents, that is why we create the const. The `publishableKey` is your own API key. To get the key, just access your new account and click on developer tab then API keys. 

![img](https://i.udemycdn.com/redactor/raw/2019-07-01_06-21-56-2d4f24984f3ec9b4c75abae102479511.png)

Now, the imported `stripeCheckout` has a bunch of features and you can read more [here](https://github.com/azmenak/react-stripe-checkout).

`token` is where you process your payment on your backend. For now we will just log it to the console and have the fake alert.

With this you can go ahead and test adding this button to your appropriate component and see the button has been added accordingly. Here's how it shows on mine:

![Screen Shot 2020-06-03 at 1 42 14 PM](https://user-images.githubusercontent.com/15071636/83676511-6b31d600-a5a0-11ea-80d7-66ec5295fa64.png)

*You might see some console errors they are usual Stripe's end and had to do with style them, if it doesn't affect functionality ignore them for now.*

Go ahead and test by using any of the test credit cards found a [Stripe's docs](https://stripe.com/docs/testing). Everything should test correctly. And done you have implemented Stripe! Here's the token object format.

![Screen Shot 2020-06-03 at 1 46 45 PM](https://user-images.githubusercontent.com/15071636/83676736-c49a0500-a5a0-11ea-9a90-f9606edff021.png)

Now although these are just the first steps. You can continue building and show how as a React developer you can implement Stripe!