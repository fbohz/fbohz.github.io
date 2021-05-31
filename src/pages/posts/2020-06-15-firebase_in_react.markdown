---
template: post
title:      "Implementing Firebase in a React Project"
date:       2020-06-15 19:31:03 -0400
permalink:  firebase_in_react
filename: 2020-06-15-firebase_in_react
---

> In Building [Studio Ghibli's Fan Hub](https://studio-ghibli-fanhub.herokuapp.com/), a project made with React, I decided to implement Firebase for its backend.

# Implementing Firebase in a React Project ✨

In Building [Studio Ghibli's Fan Hub](https://studio-ghibli-fanhub.herokuapp.com/), a project made with React, I decided to implement Firebase for its backend.

Note: Firebase library is always expanding and evolving. You can read about what we went over [here](https://firebase.google.com/docs/auth/web/google-signin).

**What is Firebase?**

Firebase as being a backend deals with everything related to:

- *Database*: any data important to application. The frontend will pull the data that it needs.
- *Server*: Server determines the most efficient way to get the data out of the database.
- *Authentication*: It is the way in which we confirm the users and authenticate them so they can access their data. So they confirm whether or not the user is who they say they are (through passwords, SSO login).

Firebase is pretty efficient and is maintained by Google. It gives a lot of features to developers without having to do a lot of backend development.

## Getting Started with Firebase

Once you access the Firebase website make sure you login with your Google account then click on 'Create/Add Project'. Add the project name usually as `projectName-db` or `projectName-backend` . Then leave all the defaults and let your project finish up spinning up and completing setting up.

Now make sure you are in the *Spark - Free Plan*. You'll wanna upgrade as you feel more comfortable with Firebase. At the beginning is very rare you exceed the limits.

As you look at your project focus on the Develop tab and get acquinted with it specially the three first sections:

![1](https://user-images.githubusercontent.com/15071636/83354289-38c47680-a31d-11ea-91fe-71f7f59142c3.png)

Here it is worth mentioning that Storage is more for assets like images and videos and database is more your other types of data.

Other sections such as Hosting involve Firebase hosting your website, ML Kit is for machine learning and Functions you'll learn when you're more advanced.

## Setting up our Firebase Backend for React App

1. Click on 'Project Overview' on top.
2. Click on Web Icon (the last)
3. Register firebase by adding a name (internal name) like the convention above. I named mine also as `studio-ghibli-fan-hub-db`. 
4. You'll get a code snippet. Make sure you *copy* the `var firebaseConfig` contents which includes your API configuration.
5. Go back to terminal and do `yarn add firebase` or `npm i firebase`.

Now we're ready for the next step ✨

## Adding Firebase to our React App

- Create a folder named 'Firebase' inside your 'src' folder. Then make a new file called `firebase.utils.js`. Make sure you have that config object info ready.
- Then do the following to import your firebase utilities.

```js
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    // your config info here
}

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
```

Here we are only importing what we need then the second imports are attached to the firebase keyword. After we initialize our app there's some setup code that is in the documentation. We export auth() and firestore().

Then the rest of the code is to setup Google Login. The `prompt: 'select_account'` is the popup that will show up and then we can Login users.

Note: You might be worried to expose your key publicly. But it is generally save to expose Firebase apiKey. Read more [here](https://twitter.com/search?q=firebase%20api%20key%20gitguardian&src=typd).

**Allow Google Sign in on Firebase**

1. Click on Authentication then on 'Set up sign in method' and select Google.
2. Click on edit icon, enable it, add project support email.
3. Click Save.

**Adding Google Sign in to your Login Component**

- Import as `import { signInWithGoogle } from '../../firebase/firebase.utils'` in your Login/Sign in Component. 
- Add another button and do the onClick to take the imported function. My button looks like this.

```js
<button type="submit" onClick={signInWithGoogle} isGoogleSignIn>Login with Google</button>
```

- Go ahead and test your app and make sure the pop up works and don't get weird errors on console.

![Screen Shot 2020-05-31 at 9 34 59 AM](https://user-images.githubusercontent.com/15071636/83354981-079a7500-a322-11ea-982f-eb6db4d2dadb.png)

- Go back to Firebase and click on Authentication there you'll see the user that just signed in!

## Using Firebase Auth Data on Your React App

In order to add Firebase data into our application we do the following.

- Import into our `App.js` our firebase utils file. As `import { auth } from './firebase/firebase.utils'`.
- First lets add `currentUser` to state and add a componentDidMount() function that will call our imported auth as this.

```js
this.state = {
  currentUser: null,
}

componentDidMount() {
auth.onAuthStateChanged(user => {
  this.setState({ currentUser: user })
})
}
```

- Note that the `onAuthStateChanged()` connection is always open as long as App.js is mounted so you don't have to re-call it again.
- One of the key things of Firebase is that it has user auth persistance. So if you do a console.log on 'user' you'll see that your previous user persisted on your React app. So we don't need to have the user re-sign when the page refreshes. Even on Dev mode. 
- Because `onAuthStateChanged` we need to unsuscribe so we modify our code as:

```js
unsubscribeFromAuth = null

componentDidMount() {
  this.unsubscribeFromAuth = auth.onAuthStateChanged
  (user => {
    this.setState({ currentUser: user })
  })
}

componentWillMount() {
  this.unsubscribeFromAuth()
}
```

- Now we'll pass out the state of our users to the components that need it. 

**Logout Users**

This depends on your component implementation but usually implemented on a Header or Nav component pass out the user state.

First you import the auth library as you did in App.js. Then pass the 'user' props to your Nav/Header component. Then you might want to render another header item that will conditionally render either Login or Logout and if clicked you'll pass the `signOut()` function from our auth that we imported to firebase. This is how I did it on Studio Ghibli's app:

```js
// props.currentUser was passed from App.js. Link is a react-router-dom element.

{
 props.currentUser ? 
 <div className="option" onClick={() => 
 auth.signOut()}>LOGOUT</div> 
 : 
 <Link className="option" 
  to="/signin">LOGIN</Link>
}
```

## Implementing Firebase Firestore to Save and Get User Data

Firestore is a *noSQL* database, kind of pretty much a database made up of a big JSON object. With that in mind let's create our database

On Firebase console, click on Database then create database. You'll have two options to start in production (locked) or test mode. Select `test-mode`, you'll wanna write some access rules as you go. Now you can follow up the prompts and click Done.

**Types of Firestore Data**

In your new db you can have two types of data. One of them is called 'collection' and you can add a collection if you access your new db, lets name our collection 'users'.

![Screen Shot 2020-05-31 at 11 52 25 AM](https://user-images.githubusercontent.com/15071636/83357924-38d07080-a335-11ea-82b4-1a84bfbb893b.png)

You saw a new path was created named '/users'. Here we can add a new 'document' or new user with its own ID. You can play with it to see how to add items. 

You can also nest collections so a collection can have its own collection as objects such as. Here we have an example of a cart-items collection on an user having two documents (or items):

![Screen Shot 2020-05-31 at 11 55 08 AM](https://user-images.githubusercontent.com/15071636/83357976-99f84400-a335-11ea-81e2-0cfc116632ec.png)

So in firebase we can have either *documents* or *collections* types of data. Now in a nutshell you can access such documents in React like this:

![Screen Shot 2020-05-31 at 11 59 41 AM](https://user-images.githubusercontent.com/15071636/83358048-49351b00-a336-11ea-8f85-5aa0620c1c48.png)

**Storing to our database - First Steps**

The following function will take that user we get from Authentication and then store the information we need in our database. To do so we'll head to the `firebase.utils.js` and `App.js`.

```js

// firebase.utils.js
export const createUser = async (userAuth, addData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...addData
      });
    } catch (error) {
      console.log('error creating user', 
      error.message);
    }
  }

  return userRef;
};

```

```js
//App.js

componentDidMount() {
this.unsubscribeFromAuth = auth.onAuthStateChanged(
  async user => {
  createUser(user)
})
}

```

In this function which is an async request, we query first if it exists. Continue reading to learn more about what this functions does. Do not test the app, just yet.

*QueryReference vs QuerySnapshot*
Query is a request to Firestore to get something from the db. Firestore returns either references or snapshots. Of these objects it can be either a Document or Collection. Firestore will always give us the object. Using the object we can determine or not if there's any data.

*QueryReference* is that object that represents the current place in the db we are querying. This one doesn't have the actual data. Just properties that tell us details about it and the method to get the *QuerySnapshot* with the actual data. We could call them as:

`frestore.doc('/users/userId')`
`frestore.collections('/users')`

Regarding QueryReference, there are *DocumentReference* vs *CollectionReference*. There are some differences as follows:

![Screen Shot 2020-05-31 at 12 18 31 PM](https://user-images.githubusercontent.com/15071636/83358405-dd07e680-a338-11ea-95a7-3dc6e399594d.png)

If you console.log the snapShot you get something like this:

![Screen Shot 2020-05-31 at 12 21 45 PM](https://user-images.githubusercontent.com/15071636/83358454-50a9f380-a339-11ea-9070-29740f351a90.png)

Here the 'exists' property tells if there's any data. Here in our code we are checking if the user already exists. If snapShot doesn't exists then we use CRUD on documentRef (not snapShot ). We get the data we need (in this case displayName and email) and make the request to the firebase to create with the Firebase method of `.set()`

The function above will always return the userRef if we need to use that userRef object. So now head to your Firebase console and login and check on your Database to see if the user is created. Refresh the user persisted and still one user. Great right!

**Storing User Data in our App**

Did you notice your app Login button is not being changed to Logout. This is because we are not setting state. We need to modify our App.js to use that userRef object.  We need use the `onSnapshot()` method we get from this object to get a *DocumentSnapshot*. 

A documentSnapshot allows us to check if a document exists using the `.exists` property which returns a boolean and we can actually get the actual data using the `data()` method which returns a JSON of the document. If you do on the code a console.log of snapShot.data() inside onSnapshot() call you can see the same data you saw on the Firebase console. The id we just get by snapShot.id

```js
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUser(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }
    // if userAuth is null do this:
      this.setState({ currentUser: userAuth });
    });
  }

```

Now try again and see if all is back to normal! 

**Moving other data into Firebase Firestore**

Studio Ghibli's fan app has shop data related to the films and products it offers. In the beginning this data was stored as a separate js and in an object data type. Now what if this data grows? What if we have 10 million shop items? Here is where an object might not be the right choice. 

So how do we move this shop collection data into Firebase? Remember when we make query requests we either get both of these two objects (even if nothing exists in the response):

- *QueryReference*: It represents the current place in the database we are querying. It doesn't have the actual data.
- *Snapshot Object*: Also either as document type or collection type. Note a collection snapshot object is called specifically a "QuerySnapshot". 
  - DocumentReference we can use CRUD methods.  Remember we can check if the snapshot document object exists in db with the `.exists` property. If you need the data you call `.data()` on object.
  - QuerySnapshot. With the collectionRef we can add documents to collections. The important methods here are `docs()`, `empty()` and `size`.

**Populating Our Firebase With Additional Data**

We need to get back to our Firestore console and add another collection. Before we do that lets take at how our shop.data basic structure looks:

```js
// shop.data.js

export const SHOP_DATA =  {
memorabilia: {
id: 1,
title: 'Memorabilia',
routeName: 'memorabilia',
items: [
  {
    id: 1,
    name: 'Calcifer Toy (Handsewn)',
    imageUrl: 'imageUrlHere',
    price: 10
  },
  ]
},

films: {
  id: 2,
  title: 'Selected Films',
  routeName: 'films',
  items: [
    {
    id: 10,
    name: 'Nausicaä of the Valley of the Wind',
    imageUrl: 'imageUrlHere',
    price: 25,
    description: "Warrior and pacifist Princess Nausicaä",
    director: "Hayao Miyazaki",
    producer: "Hayao Miyazaki",
    release_date: "1984",
    },  
  ]
}
}
```

As you check your Firebase is almost the same, it has keys that point to names that hold values. This is because Firebase is NoSQL so it can have as many properties as possible (properties can be different among documents of same collections) as it is not stored as tables like SQL.

Firestore supports many types of data. So we need to think about what data we will store as. With that in mind, lets export our `shop.data.js` by adding this on our Firebase `firebase.utils.js` file.

```js
// firebase.utils.js
export const addCollectionAndDocuments = 
  async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey)

  const batch = firestore.batch()
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc()
    batch.set(newDocRef, obj)
  })

  return await batch.commit()
}
```

Here we can see it implements a batch write that if any document fails then everything fails so ensure all collection is saved. Now that this is setup, then we can modify our `App.js`, please refer to [source code](https://github.com/fbohz/studio-ghibli-fan-app-demo/commit/f16ab99ffb42448ed44352c0424c9c7c7988914e) to see what we added.

Now that we have dynamically populated our db. We need to *remove the code we wrote on the App.js* because this only runs once so we did it to avoid the manual write of it! We'll keep the firebase.utils `addCollectionAndDocuments` code for future reference if we need it.

Now in order to access our Firebase shop data in the frontend, there are a couple roads we could take. We need to access the most up level component and create and subscribe to listen to firebase changes then unsubscribe when component unmount. While I won't go into a lot of detail, feel free to take a look at the [repo](https://github.com/fbohz/studio-ghibli-fan-app-demo) to see how I implemented on the app.

Now that we moved this data out of the frontend it can be shared along other implementations such as React Native and there's a single source of truth with Firebase.

## Final Thoughts

Firebase is a pretty robust platform that can take a while to learn. But the more you practice the better you become. The concepts covered are the core of Firebase so once you have them settled you'll know how to use it. Learning Firebase is important because at the end is easier than spinning up our own backend, database and authentication.

Also you saw there are some Firebase commands, as a React Developer, you do not need to memorize these things and most of the time you can always refer to the [documentation](https://firebase.google.com/docs/firestore/quickstart).