---
title: 'Study Report - 02/02/2024'
description: 'So like... Firebase is a while thing...'
pubDate: 'Feb 02 2024'
heroImage: '/blog-placeholder-4.jpg'
---

## Summary
**Time Spent Studying** : 1:48:45\
**Total Time Spent Studying this Year**  83:16:29 \
**Time Remaining this Year** : 916:43:31

**Todays Completed Tasks** : \
✅ Made Today's blog post (Not much, but it's something!) \
✅ Created a page in the blog that lists my projects and some basic information about them.


Man, this week has been crazy. Like the whole week was nuts. I went from being a 10 out of 10 on the stress scale on Monday to an 8 on Thursday and then suddenly a 1 today. It was all work related too. It's just been different kinds of 9-5 work, plus a bunch of stuff like helping friends, relatives, and acquaintances all day since last weekend through yesterday. Today everything settled out and hopefully I can focus on the stuff I want to focus on.

Don't get me wrong, I love that I can help so many people. I just can't catch up on 4 days of low study times in a single weekend, which is just frustrating. That's how the game goes somethines though.

## What I learned

I haven't made a blog post since 1/30 and as far as my projects go nothing has really changed. I'm still waiting for google ads to approve my site, but now for some reason https://bwcii.com/ads.txt isn't detected. I don't really understand that, because it's clearly there. IDK, it's just a waiting game now. 

That being said, I've been wanting to integrate my [Angular Playground App](https://angularplayground.bwcii.com) with firebase for a while now. It's been a part of my personal roadmap for a while. Turns out that Firebase is quite the platform! I've spent most of my week researching Firebase, it's various products, and how to use them effectively and safely.

I honestly haven't done enough research to implement it, but I think I've got a high level plan for how I'll work with it. To start with, I've created a new repo called [fire-notes](https://github.com/bwcii/fire-notes). I'll use this to start fresh with Firebase, just so I have fewer variables to deal with. 

When it comes to the products I'll integrate with first, I think it'll look something like this.

**Firebase Hosting > Firebase Authentication > Firebase Firestore**

I think that strikes the right balance of impact and difficulty. I've already got manual deployments to Firebase Hosting completed, but I'd really like to get that automated via CI/CD. Once that's done I'll get Firebase Authentication implemented so I can keep people from accessing the notes of others. Finally, I'll flesh out the UI and then integrate Firebase Firestore to store the notes.

I may need to use Firebase Functions to actually handle the CRUD actions, but I'll cross that bridge when I come to it.

## What I'll be Working on Tomorrow

Tomorrow I'll focus on getting the CI/CD pipeline set up so that I don't have to do manual pushes to Firebase Hosting. It looks like it's really well documented, so this shouldn't require too much work I don't think.

## Conclusion

I've finally got some time to this weekend to get caught up on the study time I missed last week, but I feel good and think this is going to go really well!