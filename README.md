# Safe Merge

[![Build Status](https://travis-ci.org/tmpfs/safe-merge.svg?v=8)](https://travis-ci.org/tmpfs/safe-merge)
[![npm version](http://img.shields.io/npm/v/safe-merge.svg?v=8)](https://npmjs.org/package/safe-merge)
[![Coverage Status](https://coveralls.io/repos/tmpfs/safe-merge/badge.svg?branch=master&service=github&v=8)](https://coveralls.io/github/tmpfs/safe-merge?branch=master)

Fast and safe object merge that does not mangle complex instances.

* Tiny ES6 code, ~100 LOC
* Returns object copy
* Recursive merge by default
* Own properties only
* Complex instances by pointer
* Supports clone on complex instances
* Copies RegExp instances
* Errors on circular reference

You nearly always want a merge to be recursive (otherwise just use `Object.assign()`) and normally want a copy of the objects so that they can safely be modified without modifying the original source object. However when copying most merge libraries will convert complex instances (instances of custom classes) to vanilla objects which can break the code in subtle ways.

This library will pass complex instances by pointer unless they declare a `clone()` method that allows them to be copied.

---

- [Install](#install)
- [Usage](#usage)
- [License](#license)

---

## Install

```
npm i --save safe-merge
```

## Usage

```javascript
const merge = require('safe-merge')
const defaults = {devtool: 'sourcemap', plugins: []}
const input = {devtool: false}
const options = merge(defaults, input);
console.dir(options);
```

## License

MIT

---

Created by [mkdoc](https://github.com/mkdoc/mkdoc) on February 1, 2017

[mkdoc]: https://github.com/mkdoc/mkdoc
[jshint]: http://jshint.com
[jscs]: http://jscs.info

