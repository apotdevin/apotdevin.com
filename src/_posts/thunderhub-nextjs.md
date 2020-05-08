---
title: 'Going Isomorphic with ThunderHub and NextJS'
excerpt: 'The evolution of ThunderHub from multi repo to isomorphic.'
coverImage: '/assets/blog/thunderhub-nextjs/cover.jpeg'
date: '2020-04-13T05:35:07.322Z'
isDraft: false
---

The evolution of ThunderHub has been a bumpy road of finding ways to make it simpler for everyone to use. From users deploying the app, to developers getting it running on their local machines. As a beginner in having a public repository and maintaining it, I have been trying to learn and experiment as much as possible, keeping the “fail fast, fail often” mentality, and trying to improve the usability of ThunderHub step by step.

As a high level overview of how it’s composed: ThunderHub is a React app that uses Apollo to connect to a GraphQL backend. This stack has stayed the same throughout the process but the way they are connected and organized has significantly changed.

Like any developer that looks at code they wrote some weeks ago with sore eyes and not understanding why they would write something this ugly, well, for me, looking back at how ThunderHub was organized is pretty much the same.

## The Multi to Single Repository Start

At the beginning, ThunderHub consisted of two repositories, one containing the server backend and one the React frontend. It’s a simple organization that for other projects has worked OK for me. I can keep track of the commits that go into each, have separate deployment processes and separate package.json files. In general it’s easy to keep track of whats going on.

![Multi Repository](/assets/blog/thunderhub-nextjs/1.jpeg)

With ThunderHub it got tiresome very quickly. Most new features usually included code from both sides, frontend and backend, which meant two different commits, two different pull requests and then keeping both apps up-to-date locally so that everything worked. Not to mention getting everything running locally from zero. Clone two repositories, install the modules on each, make sure they align on ports so that they can connect, open two terminals and start both programs.

Horrible experience.

I would understand the need to separate the server and the frontend in larger projects, but for this one, this didn’t make much sense, so I decided to go the dirty way and just put both into a single repository. This solved not needing to clone two repositories and having separate commits and PRs, but all the other problems remained. Before, when I said the dirty way, what I meant is that now-a-days there are many monorepo helpers and good practices to maintaining such a structure, but I hadn’t read about it and ultimately did a cheap copy-paste without taking anything into consideration.

![Single Repository](/assets/blog/thunderhub-nextjs/2.jpeg)

This worked for a while until a started reading about LernaJS (one of the monorepo helpers I mentioned before) and decided to give it a shot. I got it set up and everything seemed to be working nice and clean. One repo to clone, one command to install all modules and yarn would even keep them in the root folder and optimize them.

![Repository with Lerna](/assets/blog/thunderhub-nextjs/3.jpeg)

The problems started when I wanted to get docker images and docker-compose setup. Having now three package.json files (backend, frontend and one main one), the Dockerfiles started complaining about not finding the correct modules. I moved things around, changed the files and ultimately got them working (mostly). This setup, again, worked for a while.

## Going Isomorphic

Just like everything changed when the fire nation attacked, everything changed for me as well when NextJS released version 9 to the world (some months ago but still). Reading through the release notes I saw the new API routes feature and figured I could probably add a GraphQL endpoint here! This would mean in a single repository I could have frontend and backend, integrated together in a seamless way and solve all the previous problems I had. So I got into it, set up a new repository and began to integrate. Step by step and file by file, frontend and backend started merging together.

![NextJs Repository](/assets/blog/thunderhub-nextjs/4.jpeg)

After a couple of days it was finished, I had a NextJS application that served the React frontend and an api route with GraphQL. The integration process didn’t have many complications to be honest only needing to change file and folder organization and some configurations for Next. The main pain-point was getting used to how Next handles routing and adapting the code to go with it.

After these days I have to say I am very impressed with NextJS. The ease of setting up a new project, the clear documentation and multiple integration examples they have, along with the amount of benefits and features you get, have definitely convinced me that NextJS will probably be included in the tech stack of other projects I decide to work on.

But going back to ThunderHub, ultimately what did it solve? With one repository to rule them all, commits and PRs are now more straight forward, there is one package.json to take care of and one Dockerfile to maintain. And for local development it’s a pleasure: clone the project, run yarn and then yarn dev and that’s it. Want a production build? then after yarn do yarn build and finally yarn start . There’s not much more to it.

After all this, ThunderHub is now an isomorphic app!

## Conclusion

Even though looking back at the project everything seems so wrongly organized (and I’m sure in some weeks I will find new things to improve) I am happy with the way it has evolved and sure that it wouldn’t be where it’s at without taking this long path here.

Thanks for reading and glad you stayed until the end!

If you want to check out ThunderHub, it’s publicly available here. Also feel free to follow me on twitter and DM me for a chat!
