# Safe Merge

Fast and safe object merge that does not mangle complex instances.

* Tiny ES6 code, ~100 LOC
* Returns object copy
* Recursive merge by default
* Own properties only
* Complex instances by pointer
* Copies RegExp instances
* Errors on circular reference

<? @include {=readme} badges.md ?>

***
<!-- @toc -->
***

<? @include {=readme} install.md ?>

## Usage

<? @source {javascript=s/(\.\.\/)+index/safe-merge/gm} usage.js ?>

<? @include {=readme} license.md links.md ?>
