# <%= slugname %>

[![Build Status][travis-image]][travis-url]
[![npm][npm-image]][npm-url]
[![npm Downloads][downloads-image]][downloads-url]<% if (config.codeCoverage) { %>
[![Coverage Status][coveralls-image]][coveralls-url]<% } %>

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

<%= props.description %>

## Install

```sh
$ npm install --save <%= slugname %>
```

## Usage

```js
var <%= safeSlugname %> = require('<%= slugname %>');
<%= safeSlugname %>('Rainbow');
```
<% if (config.cli) { %>
## CLI
```sh
$ npm install --global <%= slugname %>
```<% } %>

## API

Coming soon...

## License

<%= props.license %> © [<%= props.authorName %>](<%= props.authorUrl %>)
* project generated with [maurizzzio/generator-node-npm](https://github.com/maurizzzio/generator-node-npm) *

[travis-image]: https://travis-ci.org/<%= props.username %>/<%= slugname %>.svg?branch=master
[travis-url]: https://travis-ci.org/<%= props.username %>/<%= slugname %>
[npm-image]: https://img.shields.io/npm/v/<%= slugname %>.svg?style=flat
[npm-url]: https://npmjs.org/package/<%= slugname %>
[downloads-image]: http://img.shields.io/npm/dm/<%= slugname %>.svg
[downloads-url]: https://www.npmjs.org/package/<%= slugname %>
<% if (config.codeCoverage) { %>[coveralls-image]: https://coveralls.io/repos/<%= props.username %>/<%= slugname %>/badge.svg
[coveralls-url]: https://coveralls.io/r/<%= props.username %>/<%= slugname %><% } %>

