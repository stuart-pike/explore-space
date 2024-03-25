# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Screenshot

![Design preview for the Space tourism website coding challenge](./public/crew_desktop_hurly.jpg)

### Links

- Solution URL: [Add solution URL here](https://github.com/stuart-pike/spacetourism)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

A Vite + React development environment was setup with vanilla Javascript. Components for home, destination, crew, and technology were created with the navigation integrated into each page. JSON data is imported to a Context data provider allowing each page to update its content from the json.data file. Naviagation bars and tabs were seperated from their respective pages and made into components. React Router is implemented to some degree and Framer motion added to smooth out the content transitions between pages. Sounds added to links for fun.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Pixabay](https://pixabay.com/sound-effects/search/buttons/) - For sound effects
- [Framer](https://www.framer.com/motion/) - For page transitions

### Continued development

The Router implementation is incomplete, the subroutes do not appear in the URL yet. There is some lag with the sounds that needs addressing. In using Framer motion to create a transition from one page to the next the screen has a brief flash of white as the page exiting and the page entering both have zero opacity.

### Useful resources

- [Hitesh Choudhary](https://www.youtube.com/watch?v=Bvwq_S0n2pk&t=23008s) - Hitesh provides easy to comprehend examples of React router, Context and other React hooks which were implemented in this project
- [PedroTech](https://www.youtube.com/watch?v=FdrEjwymzdY&t=2s) - Pedro's demonstration of Framer Motion is very helpful.

### acknowledgments

Kevin Powell for sharing his knowledge of HTML, CSS and JavaScript. Observing how he approched this project was enlightening.
And Scrimba for providing the platform in which so many can learn from Kevin.
