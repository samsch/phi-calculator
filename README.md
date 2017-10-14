# Phi Calculator

This is a simple app that lets you input a number, and gives the results for multiplying and dividing by the first ten powers of Phi (the Golden Ratio) as a design (or math) aid.

## Running this project

You need a current version of Node.js installed (this was originally tested and built with 8.5.0).

Clone the project, and run `npm install` to install the dependencies. (This project does not include the package-lock.json, to encourage using the latest versions. Please file an issue if a dependency is out of date.)

Run the development server with `npm start`. This will open the test page in your browser, and rebuild then refresh the page on source changes.

You can also run the Webpack development build and source watcher with `npm run dev`, which will only recompile. (You might do this to use an external server).

You can make a production build of the bundle with `npm run build`.

## Live app

The [live app](https://samsch.github.io/phi-calculator/) is hosted with Github pages, so there is no project-specific production server, just the front end assets.
