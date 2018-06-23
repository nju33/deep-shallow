import {toDeep, toShallow, ConvertObject} from './deep-shallow';

describe('deep-shallow', () => {
  const deepObject = {
    a: 'aaaa',
    b: 'bbbb',
    foo: {
      x: 123,
      y: 444,
      z: 999
    },
    bar: {
      a: 'a',
      b: 'b',
      c: 'c',
      d: 'd'
    },
    arr: ['qqq', 'www', 'eee']
  };
  type DeepObject = typeof deepObject;

  const shallowObject = {
    a: 'aaaa',
    b: 'bbbb',
    'foo.x': 123,
    'foo.y': 444,
    'foo.z': 999,
    'bar.a': 'a',
    'bar.b': 'b',
    'bar.c': 'c',
    'bar.d': 'd',
    arr: ['qqq', 'www', 'eee']
  };
  type ShallowObject = typeof shallowObject;

  test('toDeep', () => {
    const result = (toDeep as ConvertObject<DeepObject>)(shallowObject);
    expect(result).toMatchObject(deepObject);
  });

  test('toShallow', () => {
    const result = (toShallow as ConvertObject<ShallowObject>)(deepObject);
    expect(result).toMatchObject(shallowObject);
  });
});
