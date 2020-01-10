# wind-sql

[![NPM Version][npm-version-image]][npm-url]
[![NPM Downloads][npm-downloads-image]][npm-url]
[![Node.js Version][node-image]][node-url]

## Table of Contents

- [Install](#install)
- [Introduction](#Introduction)
- [INSERT](#INSERT)
- [UPDATE_BY_ID](#UPDATE_BY_ID)
- [UPDATE_BY_COLUMN](#UPDATE_BY_COLUMN)
- [DELETE_BY_ID](#DELETE_BY_ID)
- [SELECT_BY_ID](#SELECT_BY_ID)
- [SELECT_ALL](#SELECT_ALL)
- [SELECT_BY_COLUMN](#SELECT_BY_COLUMN)

## Install

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).
Node.js 0.6 or higher is required.

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```sh
$ npm install wind-sql
```

## Introduction

This is a node.js framework for [mysql](https://github.com/mysqljs/mysql). It is written in JavaScript, does not
require compiling, and is 100% MIT licensed.

Here is an example on how to use it:

```js
var windSQL    = require('wind-sql');
var mysql      = require('mysql');
var pool = mysql.createPool({
  host     : 'localhost',
  user     : 'me',
  password : 'secret',
  database : 'my_db'
});

windSQL.initSSQL({
    mysql: pool,
    resultUseCamelCase: true,
});

```

## INSERT

```js
var windSQL = require('wind-sql');
windSQL.initSSQL({
    mysql: pool,
    resultUseCamelCase: true,
});

let cat = {
    name: 'Tom',
    age: 12,
};
await windSQL.insert(cat, 'cat');

```
*  `windSQL.insert(model, table);`id cannot appear in attribute.
*   require model
*   require table

## UPDATE_BY_ID

```js
var windSQL = require('wind-sql');
windSQL.initSSQL({
    mysql: pool,
    resultUseCamelCase: true,
});

let cat = {
    id: 1,
    name: 'Tom',
    age: 12,
};
await windSQL.updateById(cat, 'cat');

```
*  `windSQL.updateById(model, table);`
*   require model
*   require table

## UPDATE_BY_COLUMN

*  developing

## DELETE_BY_ID

```js
var windSQL = require('wind-sql');
windSQL.initSSQL({
    mysql: pool,
    resultUseCamelCase: true,
});

await windSQL.deleteById(1, 'cat');

```
*  `windSQL.deleteById(id, table);`
*   require id
*   require table

## SELECT_BY_ID

```js
var windSQL = require('wind-sql');
windSQL.initSSQL({
    mysql: pool,
    resultUseCamelCase: true,
});

await windSQL.selectById(1, 'cat');

```
*  `windSQL.selectById(id, table);`
*   require id
*   require table

## SELECT_ALL

```js
var windSQL = require('wind-sql');
windSQL.initSSQL({
    mysql: pool,
    resultUseCamelCase: true,
});

await windSQL.selectAll('cat');

```
*  `windSQL.selectAll(table);`
*   require table.

## SELECT_BY_COLUMN

*  developing

[node-image]: https://badgen.net/npm/node/wind-sql
[node-url]: https://nodejs.org/en/download
[npm-downloads-image]: https://badgen.net/npm/dm/wind-sql
[npm-url]: https://npmjs.org/package/wind-sql
[npm-version-image]: https://badgen.net/npm/v/wind-sql