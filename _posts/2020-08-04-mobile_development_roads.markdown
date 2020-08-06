---
layout: post
title:      "Mobile Development - Which Road To Take?"
date:       2020-08-04 19:31:03 -0400
permalink:  mobile_development_roads
filename: 2020-08-04-mobile_development_roads
---

> You will be surprised that many of the mobile applications that you use are actually hybrid mobile applications (using frameworks like React Native)...

# Mobile Development - Which Road To Take?

There are few options available when it comes to mobile development.

*Native Apps* (using Swift for iOS or Java for Android):
- Platform specific skills
- Highest performance
- Full access to device capabilities

Basically when you hear 'native' it doesn't mean that you are writing in machine code. There's still some level of abstraction, so although called native, it is not to the strictest sense.

However you'll need *two separate code bases*. So can we do mobile app and use a single code base? 

*Option 1: Mobile Web Apps*
- Fully hosted in the mobile browser
- Slowest
- No access to device capabilities. However it is improving but still lots of limitations

*Option 2: Hybrid with WebView*
- Embedded web view based with partial implementation in native code 
- Slow, but comparable to native apps based on functionality. Still some limitations.
- Some access to device capabilities
- Example: Ionic framework.

*Option 3: Compiled/Interpreted/VM Hybrid*
- Makes use of Native UIs with the native platform’s rendering engine, not WebViews 
– Near-native performance 
– Access to most device capabilities 
- Built in JS engine that both Android/iOS use
- Example: React Native

## Digging Deeper

*WebView App*
- The HTML, CSS and JavaScript code base runs in an internal browser (called WebView) that is wrapped in a native app. Some native APIs are exposed to JavaScript through this wrapper
- This mobile app feels native.
– Examples: Ionic Framework + Cordova/Phonegap, Trigger.io

*Compiled/Interpreted/VM hybrid app*
- The code is written in one language (such as C# or JavaScript) and gets
compiled/interpreted to native code or run on a Virtual Machine (VM) for each supported platform. The result is a native app for each platform, but less freedom during development
- Examples: React Native, NativeScript, Appcelerator Titanium, Xamarin, Embarcadero, FireMonkey

*Different types of frameworks aimed to build hybrid apps*
- Frameworks targeting HTML5 content like Ionic + Cordova/Phonegap (both
via JS byte code)
- Frameworks like React Native, NativeScript and Appcelerator Titanium that render the UI using the platform’s native controls but still work via JS
- Free (or partially free) Frameworks aiming to produce real native code like Unity (C# or JS based, Games oriented), Kivy (Python Based) or libgdx (Java based, Game Oriented)
- Commercial Frameworks aiming to produce real native code like Xamarin
(using C#) or Embarcadero

## Advantages/Disadvantages of Hybrid Development

**Advantages of Hybrid Approach**
- Developer can use existing skills
- One code base for multiple platforms
- Reduced development time and cost
- Easily design for various form factors (including tablets) using responsive web design
- Access to (some) device and operating system features
- Advanced offline capabilities. You get access to the native storage capabilities on the mobile devices. 
- Increased visibility because the app can be distributed natively (via app stores) and to mobile browsers (via search engines)

**Drawbacks of Hybrid Approach**
- Performance issues for certain types of apps (ones relying
on complex native functionality or heavy transitions, such
as 3D games)
- Increased time and effort required to mimic a native UI and
feel
- Not all device and native features (fully) supported
- Risk of being rejected by Apple if app does not feel native
enough (for example, a simple website)

**Where Hybrid Apps Work Best**
- Hybrid approach does not suit all kinds of apps
- Need to carefully evaluate your target users, their
platforms of choice and the app’s requirements.
- Mainly suitable for content-driven apps
  - Business and Productivity
  - Enterprise
  - Media

You will be surprised that many of the mobile applications that you use are actually hybrid mobile applications (using frameworks like React Native). Take Facebook app as an example, it is completely done using React Native!

So now that you know the options available *which road will you take?*

## References
- [**Multiplatform Mobile App Development with React Native**](https://www.coursera.org/learn/react-native)