---
title: 'Study Report - 01/24/2024'
description: 'What I learned today'
pubDate: 'Jan 24 2024'
heroImage: '/blog-placeholder-4.jpg'
---

## Summary
**Time Spent Studying** : 3:40:54\
**Total Time Spent Studying this Year**  67:22:08 \
**Time Remaining this Year** : 932:37:52

**Todays Completed Tasks** : \
✅Published my nearly finished post from yesterday\
✅Updated the homepage for myip.bwcii.com, which is  [my website that tells you your ip address](https://myip.bwcii.com)\
✅Configured Google's Secret Manager to store an api key for https://ipgeolocation.io \
✅Connected the secret to my cloud run instance for myip.bwcii.com and confirmed I could read the api key as an environment variable\
✅Figured out how to add a new line in markdown...\
🙃Started to add a new route to my api for myip.bwcii.com but ran into some issues calling an external api as part of my response. Need to do more research.

  ## What I learned

Oh boy, did I learn plenty today! I got to practice and learn new aspects of HTML and CSS for sure. That's always fun. However, there were two major things I learned to love today!

### Handlebars
First off, I learned to love the rust implementation of [handlebars templating](https://crates.io/crates/handlebars). I haven't managed to get ```cargo watch -x run``` working in google IDX yet, so the web preview of static sites using rust was a little annoying, but I just made an html file for what I wanted the site to look like and then updated my .hbs template to fit. It worked really well and I was able to easily add Google analytics and Google ads information to the page too. 

I can't wait to see what the site looks like with ads. I don't need them on the blog or any of my other sites, but I've always been curious to see what the process is like, what unknown pain points exist, and things like that. Later this year I'll need to be able to confidently and elegantly add ads to a larger project I have in the pipeline, so this is just practice for that.

### SVG Graphics in HTML
OH, I also am really loving the ability to render SVG images directly in html. I love that you don't have to have the actual file. Since SVGs are vector files, you don't have to have the file. You can just calculate the image on demand. Super sleek, but probably not very performant. Worked for me though.

I did have this one curious interaction with embedding the github logo SVG in my web page. Kind of caught me by surprise. The original SVG file was 98px X 96px, but I needed something smaller for the site. After I converted the SVG to something I could use in HTMl using [this amazing site](https://nikitahl.github.io/svg-2-code/) it was really easy to add the logo, but resizing it was a pain in the butt.

I ended up using [viewBox](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/viewBox), [width](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/width), and [height](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/height) attributes to reduce the size of the SVG on the site. My code ended up looking like this...

```<svg viewBox="0 0 98 96" width="50" height="50" xmlns="http://www.w3.org/2000/svg">```

So I set the viewBox to be the same size as the original image, so I could see the whole image, and then I set the width and height to be 50. Resulting in a much smaller image with basically the same look. Technically I changed the aspect ratio, but I can live with that for now.

## What I'll be Working on Tomorrow

So I'm trying to build an API into myip.bwcii.com with a workflow that goes like this.

![API Workflow](https://storage.googleapis.com/bwcii-dev-blog-bucket/20240124-Desired-API-Workflow.png)

This is the first time I've tried to do an api proxy in rust. I threw one together quickly enough node and express in my [playground-api](https://github.com/bwcii/playground-api), which is just where most of the custom logic for the playground frontend will live, but with Rust it's clearly different. 

From what I've gathered in the little bit of research, I can use a crate called [reqwest](https://docs.rs/reqwest/latest/reqwest/) to make requests to external APIs, and then use [serde](https://docs.serde.rs/serde/) to deserialize the response into something axum can use to send the response. I'm pretty sure I'm on the right track, but I haven't found a convenient cook book for this so it'll take a while. Lucky for you though, because I'll make an example project and post about it once I get it figured out.

Anyway, I'll be working on that tomorrow and I don't think it should take more than a couple of days, but dang... I've used Rust much longer than I've used Javascript (neither for anything serious) and I kind of just want to go back to that. Maybe it's hind sight fogging up my glasses, but I feel like I could throw this together much faster in node. 🤷

To make matters worse, I'm having a heck of a time building my project in Project IDX once I include reqwest in my cargo.toml file. It has to do with how nix and the environment are handling OpenSSL installations. Cargo is having a hard time finding it once I add the package to my dev.nix file, and I kind of think I may need to hard code all of the paths it needs for OpenSSL. I'll get it figured out for sure and if I really get stuck I may open a bug report with Google or something.

**Conclusion**

Today was an exceptional study day. I was over my goal for the day, got a ton of stuff done, and I was even happy enough with myip.bwcii.com that I made a post on X about it. I'm sure nobody will look at it, but I'm proud of myself with the progress I've made these 24 days.

Get out there and go make something! Catch you all later!