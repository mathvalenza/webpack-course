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

## Better Errors and Loaders for HTML & Images

### using file-loader, extract-loader and html-loader for .html files, style-loader and css-loader for .css files and file-loader for images

### add `overlay: true` propery inside devServer config displays syntax error inside the browser

## Babel Basics

### Babel is a transpiler that let our application run in several browsers (turning new syntax usable in the old ones). There is a [try it out session](https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&spec=false&loose=false&code_lz=MYewdgzgLgBAHjAvDAngfgHRwNwyA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2%2Cenv&prettier=false&targets=&version=7.10.5&externalPlugins=)

### `.babelrc` file will contain babel rules and plugins

### install babel-core

### .babelrc file will contain babel rules and plugins

## Babel pollyfils, transforms & presets

### `npm install babel-plugin-async-to-promises` allows us to use `async / await` syntax because babel translates it in `Promises / .then` syntax. But not every browsers suports Promises, that's why we need `babel-polyfill`

### babel-polyfill is placed in main entry inside `webpack.dev.js`. Important: it increases main.bundle.js size so it is a good practice import only the exact polyfill we need

### We can also add a preset by doing `npm install babel-preset-env`. Its config overrides plugins config in `.babelrc` file
