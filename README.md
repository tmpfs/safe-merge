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
* Copies RegExp instances
* Errors on circular reference

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

