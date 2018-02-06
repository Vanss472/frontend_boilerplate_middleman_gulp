# Frontend Boilerplate using Middleman and Gulp
> A boilerplate is a front-end template to get you going in each project. SAVE TIME.

## Require

- Node.js >= 8.9.3 installed
- npm >= 5.5.1
- Make sure you have Xcode Command Line Tools installed. If not yu can install from the terminal:
  ```bash
  $ xcode-select --install
  ```
- Ruby >= 2.2.2

## Installation

1. bundle install will install all Gemfiles
2. npm install will install all the devDependencies and dependencies from the package.json

```bash
$ bundle install
$ npm install
```

## Development

* Start Middleman server. Gulp is been fired via the external pipeline.

```bash
$ bundle exec middleman server
```


## Build

```bash
$ bundle exec middleman build
```

## Lint ES6

#### Require
- npm install -g eslint
- npm install -g babel-eslint

```bash
$ eslint source/javascripts/name-of-file.js
```

## Middleman vs. Gulp

| Middleman            | Gulp                 |
|:--------------------:|:--------------------:|
| HTML Templating      | imagemin:build       |
| Browser LiveReload   | SASS                 |
| sprockets-es6        | Autoprefixer         |
|                      | babel:build debug    |
|                      | ESLINT               |
|                      | JS concat/min        |


## References

- [Middleman Helpers](https://middlemanapp.com/basics/helper-methods/#lorem-ipsum-placehold-it-helpers)
- [Gulp for Beginners](https://css-tricks.com/gulp-for-beginners/)
- [Rules in ESLint](https://eslint.org/docs/rules/)


