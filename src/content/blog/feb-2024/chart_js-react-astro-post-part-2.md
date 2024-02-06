---
title: '🦆 Chart.js, React, Astro, Oh My! - Part 2 🦆'
description: 'I built a thing, time to talk about how it works (again)'
pubDate: 'Feb 06 2024'
heroImage: '/blog-placeholder-3.jpg'
---

## Summary

So in the [previous part](../chart_js-react-astro-post) I talked about adding the ability to render React components in Astro. In this post I'll talk about what I pulled together to get my component working and then finally talk about what the actual code does to render the component.

## Dependencies

So to add my Chart.js component I had to add a few node packages.

- chart.js : Provides the essential functionality that allows the chart to be created
- react-chartjs-2 : Provides React components for the chart.js package.

<br>

```shell
npm install chart.js react-chartjs-2
```
*installed using the above command*

And with that installed, we're ready to get coding!

## An Example progress.astro app

So while building the react component, I made a single simple page called progress.astro that ended up looking like tihs...

```astro
---
// Component Imports
import BaseHead from '../components/BaseHead.astro';
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';
import {MyLine} from '../components/react/MyLine.jsx'
---
<!doctype html>
<html lang="en">
	<head>
		<BaseHead title={SITE_TITLE} description={SITE_DESCRIPTION} />
	</head>
	<body>
		<Header title={SITE_TITLE} />
		<main>
			<h1>2024 Study Progress</h1>
      	<MyLine 
      	client:only="react"
      	/>
		</main>
		<Footer />
	</body>
</html>

```
*Just figured out how to add this nice langage specific code highlighting!*

So let's talk about some important things here.

**Import React Component**

```astro
---
import {MyLine} from '../components/react/MyLine.jsx'
---
```
*Line of Interest*

This is pretty straight forward. We're importing the react component that I've created. When I first made this I went straight to Typescript and was trying to make it work in a .tsx file, but after messing with it and noticing that the rest of the site was made with regular JavaScript I decided to use a .jsx file instead.

**Using the React Component**

```astro
<MyLine 
client:only="react"
/>
```
*Lines of Interest*

This section is also pretty straight forward. This is where we actually use the react component that we've imported. Do notice however that the *client:only="react"* directive is important, and I spent a couple hours trying to figure out why the heck my component wasn't rendering on my page even though I didn't have any errors. Check out the documentation [here.](https://docs.astro.build/en/reference/directives-reference/)

The client directives control how UI Framework Components (aka frontend js stuff) are are hydrated on the page. If you leave this out then guess what, your react component won't render on the page! 

In the examples in this blog post I used *client:only="react"*, but after reviewing the docs I changed it to *client:visible*. Hopefully that'll improve the performance hit that I took according to the lighthouse developer tool.

## Now Let's Talk About The React Component Code


