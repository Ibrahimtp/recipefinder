# Recipe Finder

A lightweight web app for discovering recipes. Search by dish or ingredient, browse results as image cards, and open a detail page for each recipe.

## Features
- Keyword recipe search through the All-in-One Recipe API (RapidAPI)
- Responsive card grid showing each recipe's photo, name and cuisine
- Recipe detail page (`about-recipe.html?recipeId=…`) with recommendations
- Food photography from the Pexels API

## Tech stack
HTML · CSS · JavaScript (ES6+, async/await) · Axios · RapidAPI · Pexels API

## Run locally
1. Get a RapidAPI key for the All-in-One Recipe API and a Pexels API key.
2. Copy `config.example.js` to `config.js` (git-ignored) and add your keys: `cp config.example.js config.js`.
3. Serve the folder with any static server, e.g. `npx serve .`, then open `index.html`.
