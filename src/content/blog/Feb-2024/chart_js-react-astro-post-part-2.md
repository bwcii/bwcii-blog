---
title: '🦆 Chart.js, React, Astro, Oh My! - Part 2 🦆'
description: 'I built a thing, time to talk about how it works (again)'
pubDate: 'Feb 06 2024'
heroImage: '/blog-placeholder-3.jpg'
---

## Summary

Hello Everyone!

I just want to preface this post by saying that I'm effectively rubber ducking to myself and the great void. I don't know that you'll get any good information out of this post, but if you do then wonderfaul! I'd love to hear about it on [𝕏](https://x.com/bwcii_dev)!

## What I've Done So Far

So today I finally got a simple react component created that uses react-chartjs-2 to build a line chart showing my cumulative study time for the year.

![A photo of my cumulative study time line chart](https://storage.googleapis.com/bwcii-dev-blog-bucket/cumulative-study-line-chart.png)
*Screen shot of my cumulative study time line chart*

I wanted to use this as an excuse to play with React, because more complexity is better of course, and I figured it wouldn't take too awful long. All in it was about 4.5 hours. Not as quick as I was hoping, but honestly not bad at all.

## Chart.js

So not knowing anything about react, I immediately did the correct thing and focused on finding a good chart library to work with. Usually, I'd work my way from the framework to the library. However, I didn't want to add react to my blog just to end up making a config that wasn't going to work with a popular chart library.

I found [Chart.js](https://www.chartjs.org/) and took a look at the demos and examples. I really liked what I saw, and since this was going to be a simple chart with data manually added to a JS array I wasn't worried about performance and scalability.

*Step One, Done*

After deciding to use Chart.js as my chart library, I then decided to change focus to answering the question "How do I add React to Astro?"

## How to add React to Astro

Adding react to Astro was ✨AMAZINGLY✨ easy. Props to the team at Astro. I've had a harder time importing PowerShell Modules than I did adding React to Astro.

So how did I do it? My blog is relatively new and built from the start with Astro, so I got to take the easy route. 

*Check out this article on [how to add React to Astro](https://docs.astro.build/en/guides/integrations-guide/react/)*

I used the easiest option...

````
npx astro add react
````
<br>

This runs a small wizard that adds the necessary npm packages and updates some config files in Astro. Let's talk about what changed after I ran the command. 

## What Files Get Changed?

<strong>astro.config.mjs</strong>

![File Diff for astro.config.mjs](https://storage.googleapis.com/bwcii-dev-blog-bucket/astro.config.mjs.png)

Not too much changed here!

We've got a new import of react from @astrojs/react. That's relatively straight forward. It just gives us access to the [@astrojs/react](https://www.npmjs.com/package/@astrojs/react) package. 

This package has the description of "This Astro integration enables server-side rendering and client-side hydration for your React components." This description is important, because as I found out a basic understanding of hydration is important. Since Astro strives to serve as much Server Side Rendered content as possible, additional considerations need to be taken when trying to present React components, which are rendered on the client. We'll talk more about that later.

The second thing that's changed in this file is the addition of react() to the integrations section. This addition tells Astro that we want to enable the React integration and if needed gives us a way to add Custom Options to the integration. That's not relevant for my current implementation, but it's a good thing to know. 

You can find some related documentation on this [here](https://docs.astro.build/en/guides/integrations-guide/).

<strong>package-lock.json</strong>

This file changes of course, but we don't care about the details here. If you're worried about your package-lock.json file, you've already made a mistake.

<strong>package.json</strong>

![File Diff for package.json](https://storage.googleapis.com/bwcii-dev-blog-bucket/package.json.png)

We've got a few packages added here. I'll list them and give a brief description, but long story short they're packages we need to use react.

[*@astrojs/react*](https://www.npmjs.com/package/@astrojs/react)

We've already mentioned this package in the astro.config.mjs section. Moving on!

[*@types/react*](https://www.npmjs.com/package/@types/react)

This package contains type declarations for using react with typescript. For my implementation I don't think I actually needed this since I didn't use any typescript, but it was automatically added and I'm sure the Astro team knows better than I do.

[*@types/react-dom*](https://www.npmjs.com/package/@types/react-dom)

This package contains type declarations for using react-dom with typescript. According to [this documentation](https://react.dev/reference/react) this package contains a set of features that are only supported for web applications. It's pretty much middleware between React and the browser's DOM. So I guess no iphone apps for me!

[*react*](https://www.npmjs.com/package/react)

This package contains the actual React library. To quote the description from the website ...

*"The react package contains only the functionality necessary to define React components. It is typically used together with a React renderer like react-dom for the web, or react-native for the native environments."*

So it looks like the react package is specifically created to design the UI, and react-dom / react-native is the middle ware that connects the react ui with the rendering engine of the device. Very cool! I didn't know that.

[*react-dom*]()

This package contains the actual react-dom library. I'll quote the website again here...

*This package serves as the entry point to the DOM and server renderers for React. It is intended to be paired with the generic React package, which is shipped as react to npm.*

Pretty straight forward now, but honestly when I started this post I wasn't aware of the relationships between these packages.

<strong>tsconfig.json</strong>

![File Diff for tsconfig.json](https://storage.googleapis.com/bwcii-dev-blog-bucket/ts.config.png)

So let's talk about the three options that are highlighted here. I know strictNullChecks didn't change, but I don't know what it is so I'm gonna google it anyway.

[*strictNullChecks*](https://www.typescriptlang.org/tsconfig#strictNullChecks)

strictNullChecks is a ts.config option that does the following...

*"When strictNullChecks is false, null and undefined are effectively ignored by the language. This can lead to unexpected errors at runtime.*

*When strictNullChecks is true, null and undefined have their own distinct types and you’ll get a type error if you try to use them where a concrete value is expected."*

This is basically the on/off switch to have Typescript throw errors if you try and use a null or undefined value when Typescript expects a real data type. AKA, do your types match?!?

[*jsx*](https://www.typescriptlang.org/tsconfig#jsx)

OK, this one is a weird one for me. I've never looked into the actual post-compilation files that are made when using typescript. However, this sort of makes sense now.

Short version, the jsx option tells typescript how to compile the js files. As I have it in the screen shot, .js files will be created with the JSX changed to _jsx calls.

For example...

````
// original jsx file content
export const HelloWorld = () => <h1>Hello world</h1>;

// compiled .js file content
import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
export const HelloWorld = () => _jsx("h1", { children: "Hello world" });
````
<br>

[*jsxImportSource*](https://www.typescriptlang.org/tsconfig#jsxImportSource)

OK, this one probably goes over my head. It looks like this setting controls how the compiled .js import the packages required for the JS to work. So you can take the same react code, and depending on how this setting is configured it'll be compiled to work with react or with preact.

## To Be Continued

Man, we only ran one command and I've already got to break this out into another part. It's nearly my bed time.

I can say that it's pretty incredible what runs under the hood on just a single command. Lots of moving pieces!

It's also very interesting to learn about some of these things. Every single change to the files taught me something, and I love that.

Catch you in part two all!