---
title: 'Study Report - 01/25/2024'
description: 'What I learned today'
pubDate: 'Jan 25 2024'
heroImage: '/blog-placeholder-4.jpg'
---

## Summary
**Time Spent Studying** : 1:47:12\
**Total Time Spent Studying this Year**  69:15:31 \
**Time Remaining this Year** : 930:44:29

**Todays Completed Tasks** : \
✅ Fixed an issue where I couldn't build myip.bwcii.com with reqwest\
✅ Published a blog post that detailed some issues I was having with building reqwest on project IDX\
✅ Refactored my study plan for my Angular Playground app, essentially breaking basic IP info and IP Geolocation info into two components

## What I learned

Today was definitely a recovery day. Work was crazy and for some reason my body wanted to take a 2 hour nap after work, which is super unusual to me. That's ok though! I'm still ahead of my study goals and getting almost 2 hours done today is still progress!

I think my mom said it best. "Always good to listen to your body."

### Project IDX packages can be weird sometimes

All of the details are in [this blog post.](https://bwcii.com/blog/build-reqwest-on-idx/) The short version is that I was having an issue building my project after adding the reqwest crate to my project because of how IDX and nix handle packages. I'm sure this was a knowledge issue, but hey, I got it fixed and learned something along the way!

### Scope creep is real

This is probably a small lesson I learned today, but I think it was still a good one. 

I've been wanting to add a component to my [Angular Playground](https://angularplayground-410317.uc.r.appspot.com/) app that tells you detailed information about your public IP address. I already had a component build that shows you your public IP address, so I thought that it would fit well in that same component, but there was so much extra that needed to be done to add the additional information that it felt like I was never going to finish that component.

So I didn't add it.

Scope creep is insidious and the biggest negative impact it has is the negative way it influences an engineers psychology. Nobody likes to have the goal moved on them, and nothing will ever be perfect when you deploy it. So I decided to get that dopamine hit and call the current IP Info component finished, then break out the IP Geolocation component into its own component. I don't regret it one bit.

If you feel like you're going nowhere chasing perfection, take a hard look and ask yourself if it's really worth the delay. In my case, I'm just here to learn so all of my design decisions are self imposed. So why drag on a single component when I can just build another one to replace it.

I don't know if that makes a ton of sense, but it really worked for me.

## What I'll be Working on Tomorrow

Now that I can build reqwests into my crate, I'll be working on building the API for my IP Geolocation route. I've never used reqwest and I've never tried to make an asychronous api call within an asychronous function call, so I'm not sure exactly how that'll work reliably. I'm sure I'll get that figured out though. Greater minds than mine have worked on this problem.

I think it may require that I use [middleware in Tower](https://docs.rs/tower/latest/tower/), but we'll see.

I'm really excited to get this done so that I can move onto my next learning objective, using [fire store](https://firebase.google.com/docs/firestore) in my angular playground. I think I'll just make something super simple, like a button you can click that only ever increases a number in the database. That way multiple people can click the button and the number will increase.

I think I should be able to take this concept and add a page view counter to the playground and to the blog too. That'll be a fun opportunity to take one concept and apply it to different platforms.

## Conclusion

Today was definitely not as productive as yesterday, but I'm not too upset about it. Keeping my body healthy is critical when you're doing long term studying. 

Not only that, but this stuff is HARD sometimes! Having to troubleshoot my inability to build my project after adding reqwest was an unexpected and difficult problem for me to solve. In situations like that, where all I want to do is write code, it's so easy to get frustrated. 

Frustration is tricky because it's a good signal to listen to when trying to keep yourself from burning out, but it's also a natural part of the learning process. It can be difficult to balance the two. Fortunately I managed to get my issue fixed before I had to stop, but if you ever have to call it quits for the day that's OK!

Anyway, I'm still tired even though I had my evening nap. I'll catch you all later!