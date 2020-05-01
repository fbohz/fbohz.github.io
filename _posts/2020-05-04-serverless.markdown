---
layout: post
title:      "What is Serverless?"
date:       2020-05-04 19:31:03 -0400
permalink:  serverless_intro
---

> Serverless allows you to run and deploy apps without having to worry about managing server infraestructure

Probably most of us have heard about serverless computer, and probably you've asked yourself (like me) wheteher if its a good technology to learn. Here I'm sharing some high level points I learned after seeing a [presentation](https://www.youtube.com/watch?v=MEeZLM1XVLI&feature=youtu.be) about it at Byteconf React. 

# So, What is Serverless?

**Serverless allows you to run and deploy apps without having to worry about managing server infraestructure**. Examples include AWS Lambda, MongoDB Stitch and Microsoft Azure. Developers then worry about building the business logic only.

So the name *serverless can be misleading* because there are actually servers, its just serverless for us, the developers.

Why serverless is popular right now:
- No managing infraestructure, nor provisioning.
- No capacity planning.
- No patching.
- Not worrying about scaling.
- *Can be cheaper*. Not running 24/7 only when running serverless functions.

But what's the *catch* with serverless?
- Servers need to warm up
  - If you scale up pretty quickly you need to configure this with cloud provider to mitigate this.
- Deployment pipeline (DevOps) still needs to happen.
- Serverless functions means state is managed externally.

## When to use serverless

- If you had a static site that needs ocassionaly server updates. No need for 24/7 servers.
- Variable traffic level, and augment existing systems to handle additional load.

## When to avoid serverless

- If you don't want to rely on third party vendor.
- As app grows it might get more complicated your serverless management, so there's an additional learning curve.

## Some considerations when using serverless

- Avoid lock-in with a single vendor.
- Ensure that it remains easy to build.

## Quick Example Connecting React App to Serverless Provider

Depending on the provider, you might have access to an SDK that you can easily include on your React app. 

In the example below with MongoDB Stitch you pass `MongoDB Stitch ID` on where is in the cloud and kind of works like Redux where you pass as props to get data from server components.

![demo1](https://user-images.githubusercontent.com/15071636/80838027-a5810f80-8bbd-11ea-8064-5743d907638a.png)

Then you can use MongoDB Queries (MQL) to get data and update state from it. 

![demo2](https://user-images.githubusercontent.com/15071636/80838438-a5cdda80-8bbe-11ea-8268-9a57ba4fccb5.png)

![demo3](https://user-images.githubusercontent.com/15071636/80838542-e594c200-8bbe-11ea-9e23-b4e50e7f76ba.png)

## Future of serverless

- Infraestructure will continue to be abstracted by cloud providers.
- More serverless options will pop up, so many more to chose form.
- Serverless will get cheaper and faster in the future.