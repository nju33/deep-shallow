# deep-shallow

An object convert between shallow and deep.

[![npm: deep-shallow](https://img.shields.io/npm/v/deep-shallow.svg)](https://www.npmjs.com/package/deep-shallow)
[![CircleCI](https://circleci.com/gh/nju33/deep-shallow.svg?style=svg)](https://circleci.com/gh/nju33/deep-shallow)
[![Coverage Status](https://coveralls.io/repos/github/nju33/deep-shallow/badge.svg?branch=master)](https://coveralls.io/github/nju33/deep-shallow?branch=master)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
![license: mit](https://img.shields.io/packagist/l/doctrine/orm.svg)

## Install

```bash
yarn add [-d] deep-shallow
```

## Usage

```js
import {toDeep, toShallow} from 'deep-shallow';

const deepObj = {
  foo: {
    a: 'a',
    b: 'b',
    c: 'c',
    d: 'd',
  },
  bar: {
    x: 'x',
    y: 'y',
    z: 'z',
  },
  arr: [1, 2, 3, 4],
};

const shallowObj = toShallow(deepObj);
// {
//   'foo.a': 'a'
//   'foo.b': 'b'
//   'foo.c': 'c'
//   'foo.d': 'd',
//   'bar.x': 'x',
//   'bar.y': 'y',
//   'bar.z': 'z'
//    arr: [1, 2, 3, 4],
// }

toDeep(shallowObj);
// {
//   foo: {
//     a: 'a',
//     b: 'b',
//     c: 'c',
//     d: 'd',
//   },
//   bar: {
//     x: 'x',
//     y: 'y',
//     z: 'z',
//   },
//   arr: [1, 2, 3, 4],
// };
```
