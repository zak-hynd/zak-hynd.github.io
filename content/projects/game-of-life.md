---
title: Conway's Game of Life
description: 
date: 2024-10-23
cover: conways.webp
order: 1
---

# Conway's Game of Life
This was perhaps not the most useful, or impressive project I've worked on, but it has definitely been the most fun thing I’ve built.
This was one of the “extra for experts” challenges we were given in the Dev Academy course, which I don't think anyone else completed. 
The initial challenge was to build the game using JavaScript and render it in the terminal. Which was straightforward enough. Later, I ported the code to a React app to render it in a web browser.

<img src="/images/projects/conways.webp" alt="screenshot of my Conway's UI" style="max-width: 600px; height: auto;">


When implementing pre-canned boards (like Gosper’s gliders), I discovered a bug in the game logic. 
I painstakingly added nearly 20 different console logs, methodically debugging to find where the 
logic went awry. Ultimately, the issue was with my logic for creating the “next board.” I needed to 
create a “true” copy of the “current board” because my initial implementation caused incorrect 
neighbor counts. Debugging can be painful, but the reward of solving it was worth every moment!

          
Click here to see the working version once it's redeployed...
        