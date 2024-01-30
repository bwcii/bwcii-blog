---
title: 'Study Report - 01/29/2024'
description: 'Light on studying, heavy on fun'
pubDate: 'Jan 29 2024'
heroImage: '/blog-placeholder-4.jpg'
---

## Summary
**Time Spent Studying** : 3:33:48\
**Total Time Spent Studying this Year**  74:46:05 \
**Time Remaining this Year** : 925:13:55

**Todays Completed Tasks** : \
✅ Finished the mat-table implementation for my Angular Playground web app using mock API response data \
✅ Added an IP Geolocation API to https://myip.bwcii.com so that the caller is given all the information about their IP address that's given by https://ipgeolocation.io

Oh man. Today was still very busy and I've got a lot of things I want to do yesterday that are just going to have to wait until tomorrow. Kind of a stressful day to be honest, but I managed to reduce my study time deficit by about 50 minutes. Not much, but man was today productive!

## What I learned

Even though today was pretty darn busy, I managed to get almost everything I needed to get the IP Geolocation component completed for my Angular Playground web app. I got the UI done using the mat-table component using mock data, and I think it looks really slick. I also got the backend API working to proxy requests to the IP Geolocation API using my API key. 

Both were a lot of fun and honestly didn't take too long. It humbles me to think of the thousands of shoulders I stand on that let me implement something like that so quickly. 

### mat-table in Angular

I'd been working on the mat-table component, but I just couldn't get Angular to render it for me. Yesterday I took an example from some Angular Material documentation and confirmed it worked and that I wasn't crazy, but today I finally found my issue.

I'm not sure why exactly, I'll take some time this week to find out and make a blog post about it, but the short version is that I couldn't use my data source for the table by directly referencing the variable contianing my data. For some reason I had to assign it to another variable and then use that second variable. 

```
  table_data: IPGeoTableInfo[] = [
    {"IP_Property": "IP Address", "IP_Attribute": mock_response.ip},
    {"IP_Property": "ISP", "IP_Attribute": mock_response.isp},
    {"IP_Property": "Country", "IP_Attribute": mock_response.country_name},
    {"IP_Property": "State", "IP_Attribute": mock_response.state_prov},
    {"IP_Property": "City", "IP_Attribute": mock_response.city},
    {"IP_Property": "Zip Code", "IP_Attribute": mock_response.zipcode},
  ];
  dataSource = this.table_data;
```
*Code Snip from working ip-geo-info.component.ts file*

```
<table mat-table [dataSource]="dataSource" class="mat-elevation-z8">
...
</table>
```
*Can't reference table_data directly in the html for some reason*

It was such a small detail that it was driving me crazy, but I finally got there. I'm sure it's some typescript thing that I'm just not aware of.

### My First Implementation of the reqwest Crate

Even more exciting than the front end work was the back end work. Today I added a new api endpoint at https://myip.bwcii.com/v1/ipgeo that proxies requests to https://ipgeolocation.io and returns a lot of information about the IP address of the caller.

I come from the land of interpreted languages, where we make API calls and then get the entire JSON response and then have to deal with it after that. I'm kind of loving how Rust and Typescript handle them though.

Instead of receiving the full response and then having to verify it's correct, parse it manually, and honestly massaging the data as needed, typescript and rust compel you to write interfaces. I like the way that logrocket.com describes [interfaces](https://blog.logrocket.com/understanding-using-interfaces-typescript/#:~:text=TypeScript%20has%20inbuilt%20support%20for,how%20it%20will%20be%20done.). 

*"An interface defines the specifications of an entity. It lays out the contract that states what needs to be done but doesn’t specify how it will be done."*

So instead of just gulping in any arbitrarity response we get from a 3rd party API and then hoping that our code handles it correctly, we create predetermined "templates" and if the data we receive doesn't match what we've determined, then we get severe runtime errors. 

I think the feeling of comfort that I get comes from the fact that if there's a significant change to the API then my code will panic instead of potentially creating dirty data to be used by downstream processes. I'm a big fan!

## What I'll be Working on Tomorrow

Tomorrow I'll be connecting the IP Geolocation component in my angular playground frontend to the IP Geolocation API I just created. I'll have to update the mock api response that I've been using in the front end to exclude a couple data points since I'm using the free tier of the ipgeolocation.io api, but that won't take long at all.

Once I've confirmed nothing breaks by changing the mock response, I'll just need to make the API call, process the Observable, and then update the mat-table data to include only the attributes of the response I want to show the caller. I should be able to get that wrapped up tomorrow.

Once that's working I'm going to move on to adding a component that lets anyone click a button and have the total number of times the button has been clicked tracked by updating a value in Fire Store. That should be a quick one too I hope!

I think I may need to buy a different domain for the Angular Playground app too. I honestly never thought it would get the functionality that it has now, and I've still got 11 months to go. Might as well put it on a cool domain so that I don't have to look at this ugly URL again!

https://angularplayground-410317.uc.r.appspot.com/

## Conclusion

I know I'm going to continue to be super busy all week, but I'm excited and happy to be back on my study track. I've got less than a 5 hour deficit on my study goal, and I bet I'll be caught up by the end of the week!

I've made great progress on my projects already and it's only Monday!

Happy Building!