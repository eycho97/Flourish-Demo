# Flourish Breaking Activity Implmentation

This is an implementation of what the breaking activity page of Flourish looks like.
This version only implements the scribbling option where you can scribble over the negative message.

## Getting Started

Install the dependencies:

```bash
npm install
```

Run the project locally:

```bash
npm start
```

## Structure

Each screen is stored in `/screens/...` and the screens are rendered in `App.js`. All the images used are in `/assets/images`.

The main module this demo uses is [react-native-draw-on-screen](https://www.npmjs.com/package/react-native-draw-on-screen).
Note that this module doesn't seem to be regularly maintained, but it supports Android, iOS, and Expo.
