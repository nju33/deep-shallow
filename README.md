# deep-shallow

## Usage

```ts
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
  }
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
//   }
// };
```
