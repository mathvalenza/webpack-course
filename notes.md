# Course notes

## Introduction

Considering a project with a `src/main.js` file and an `dist/index.html`

### Building main-bundle.js

`webpack --config=config/webpack.dev.js`

### Serving with webpack-dev-server

`webpack-dev-server --config=config/webpack.dev.js`

Now, it runs on **localhost:8080**.

## CSS Loaders

### webpack doesn't know every languages, it just knows JS

So we need an appropriete loader to handle other types of files

### For `.css` files, use `npm i style-loader css-loader`

`style-loader` is responsible for injecting the CSS into the HTML

Running `webpack-dev-server` again, we can see `main.css` was included as **built**

Also, we can see the `main.css` content in `style` tag inside `head` inside the DOM
