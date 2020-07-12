---
layout: post
title:      "Solving Callback Hell😈: JS Promises and Async-Await in Node.js"
date:       2020-07-13 09:31:03 -0400
permalink:  async_await_node
filename: 2020-07-13-async_await_node
---

> Async/Await was introduced recently. In order to use async/await we need to use mark functions as `async` functions. Async functions return a promise and we can use one or more await functions. 

# Solving Callback Hell😈: JS Promises and Async-Await in Node.js

Last week we went through the baby steps involved in Node.js and setting up a Express server. Now we left a question unanswered, remember *callback hell* in Node.js?

```js
const fs = require("fs");
const superagent = require('superagent');

fs.readFile(`${__dirname}/dog.txt`, (err,data) => {
   superagent
  .get(`https://dog.ceo/api/breed/${data}/images/random`)
  .end((err, res) => {
      if (err) return console.log(err.message)

      console.log(res.body.message);

      fs.writeFile('dog-img.txt', res.body.message,err => {
          console.log("Dog Image Saved to File")
      });
  })
}) 
 
```
Note superagent is a NPM package we use to use APIs such as the Dog CEO API above. 

But note how here we ended up with callbacks inside of callbacks. This makes code messy and difficult to understand!

**Saving Callback Hell with Promises**

We can implement and consume promises easily. It implements a future value we are expected to receive in the future. Above `.get()` returns a promise so we can use it. To do that we use the `.then()` method:

```js

fs.readFile(`${__dirname}/dog.txt`)
  .then(data => {
    console.log(`Breed: ${data}`);
    return superagent
    .get(`https://dog.ceo/api/breed/${data}/images/random`);
  })
  .then(res => {
    console.log(res.body.message);
    fs.writeFile('dog-img.txt', res.body.message);
  })
  .then(() => {
    console.log('Dog image saved to file!');
  })
  .catch(err => {
    console.log(err);
  });

```

`.then` only handles fulfilled promises, `.catch` handles when error. Here we can see it looks much better and we're not nesting callbacks! However we still have callbacks function so we can make it event better 😏.

```js

const readFilePromise = file => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject('File not found 😢');
      resolve(data);
    });
  });
};

const writeFilePromise = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, err => {
      if (err) reject('File not found 😢');
      resolve('success');
    });
  });
};

```

The Promise constructor takes an executer function with resolve and reject as arguments. Then here just modify the `fs.readFile`, `fs.writeFile` to be `readFilePromise()`, `writeFilePromise()` with the file name and looks much better. So with that we solve and have less callbacks inside of callbacks. 

Remember in order to use `.then()` we need to make sure code returns a promise!

**Using Promises with Async / Await**

Async/Await was introduced recently. In order to use async/await we need to use mark functions as `async` functions. Async functions return a promise and we can use one or more await functions. 

```js
const getDogPic = async () => {
  try {
    const data = await readFilePromise(`${__dirname}/dog.txt`);
    const res = await superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    console.log(res.body.message)

    await writeFilePromise('dog-img.txt', imgs.join('\n'));
    console.log('Random dog image saved to file!');


  } catch (err) {
    console.log(err);
    throw err;
  }
};

getDogPic()

```

The await will make sure it waits for code to finish, once finished it will store it to variable. In in order to catch the error, we just wrap it in an try/catch block. So hope you can see how this looks sync even though is async code!

So this is called synthetic sugar for promises, it is still the same on the back but looks better on the front 😊.

**Bonus - `Promise.all`**

We can wait for multiple promises using `Promise.all` by passing as an array of some saved promises. Example:

```js
  const res1Pro = superagent.get(
    `https://dog.ceo/api/breed/${data}/images/random`
  );
  const res2Pro = superagent.get(
    `https://dog.ceo/api/breed/${data}/images/random`
  );
  const res3Pro = superagent.get(
    `https://dog.ceo/api/breed/${data}/images/random`
  );
  const all = await Promise.all([res1Pro, res2Pro, res3Pro]);
  const imgs = all.map(el => el.body.message);
  console.log(imgs);
```

## Further Reading 
[Node Docs](https://nodejs.org/en/docs/)
[Callback Hell](http://callbackhell.com/)
[Node.js Async Best Practices & Avoiding the Callback Hell](https://blog.risingstack.com/node-js-async-best-practices-avoiding-callback-hell-node-js-at-scale/)