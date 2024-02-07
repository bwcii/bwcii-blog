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

This is the content of my React component with some lines removed, because most of it is just lines for single data points in my data arrays formatted for readability.

```jsx
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
} from 'chart.js';
import { useEffect, useState } from 'react';

export const MyLine = (data) => {
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    ChartJS.register(
      LineElement,
      PointElement,
      LinearScale,
      Title,
      CategoryScale,
      Tooltip
    );
    setIsRegistered(true);
  }, []);

  if (!isRegistered) return <></>;

  return (
    <Line
      data={{
        labels: [
          '1-1-2024',
          '1-2-2024',
// Lines omitted for readability
          '2-8-2024',
        ],
        datasets: [
          {
            data: [
              1.86,
              2.70,
// Lines omitted for readability
              90.34,
            ],
            label: 'Actual Study Time',
            borderColor: '#3e95cd',
            fill: false,
          },
        ],
      }}
      options={{ 
        responsive: false,
        plugins: {
          title: {
            display: true,
            text: 'Total Study Time - 2024',
          },
        },
       }}
      width={500}
      height={250}
    />
  );
};
```

<br>

A good chunk of this was just copied and pasted from [this stackblitz example](https://stackblitz.com/edit/github-k3scdy), so thanks to [sachinraja](https://github.com/sachinraja) for putting this out there.

## What does the code do?

So let's talk about what this code does, mostly for my own enlightment...

**Imports**

```jsx
import { Line } from 'react-chartjs-2';
```

<br>

This one is easy enough. We're importing the [\<line>](https://react-chartjs-2.js.org/components/line) component from react-chartjs-2 so we don't have to write our own implementation of this using only react and Chart.js. It makes this implementation just a little bit easier.

One important thing that took me a while to figure out (by reading the documentation) is that the \<line> component supports all of the standard \<canvas> properties as well. According to the [mdn web docs](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/width) there really aren't many properties on the \<canvas> element, but it does mean you can set the width and length of the element this way.

You can see from the full code that I set the width and height to 500px by 250px. I'd like to make the \<line> component reactive so it's not hard coded, but baby steps.

```jsx
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
} from 'chart.js';
```

<br>

Instead of using importing Chart.js using **import Chart from 'chart.js/auto';** we're [importing the individual](https://www.chartjs.org/docs/latest/getting-started/integration.html) components we need just for my component. 

I'll list the individual imports and links to their documentation below.

- [Chart](https://www.chartjs.org/docs/latest/api/classes/Chart.html) : The main Chart class.
- [LineElement](https://www.chartjs.org/docs/latest/api/interfaces/LineElement.html) : The interface for the LineElement visual element. AKA, the actual line we're going to draw.
- [PointElement](https://www.chartjs.org/docs/latest/api/classes/PointElement.html) : The class for individual point objects.
- [LinearScale](https://www.chartjs.org/docs/latest/api/#linearscale) : A type of ChartComponent that sets the type of scale for the chart. AKA, not logarithmic.
- [Title](https://www.chartjs.org/docs/latest/api/#title) : A type of plugin that handles rendering the title of the chart.
- [CategoryScale](https://www.chartjs.org/docs/latest/api/#categoryscale) : A type ChartComponent that appears to modify the categories (labels set on the x axis in my case) for the line chart.
- [Tooltip](https://www.chartjs.org/docs/latest/api/interfaces/Tooltip.html) : The interface for the Tooltip visual element. AKA, what the user sees when they hover their mouse over the data point.

<br>

Going back over these I bet there are some that I could omit, and it's also kind of cool to actually know that I can add additional functionality to my line chart. I've really enjoyed looking at the Chart.js documentation!

```jsx
import { useEffect, useState } from 'react';
```

