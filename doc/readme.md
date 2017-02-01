# Safe Merge

<? @include {=readme} badges.md ?>

Fast and safe object merge that does not mangle complex instances.

* Tiny ES6 code, ~100 LOC
* Returns object copy
* Recursive merge by default
* Own properties only
* Complex instances by pointer
* Copies RegExp instances
* Errors on circular reference

***
<!-- @toc -->
***

<? @include {=readme} install.md ?>

## Usage

<? @source {javascript=s/(\.\.\/)+index/safe-merge/gm} usage.js ?>

<? @include {=readme} license.md links.md ?>
