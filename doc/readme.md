# Safe Merge

<? @include {=readme} badges.md ?>

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

***
<!-- @toc -->
***

<? @include {=readme} install.md ?>

## Usage

<? @source {javascript=s/(\.\.\/)+index/safe-merge/gm} usage.js ?>

<? @include {=readme} license.md links.md ?>
