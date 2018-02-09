import set from 'lodash/set';

export interface Object {
  [key: string]: any;
}

export type FlattenObject = (obj: Object, path?: string[]) => Object;
export type ConvertObject<T = {}> = (obj: Object) => T;

const flatten: FlattenObject = (obj, path = []) => {
  return Object.keys(obj).reduce((result, key) => {
    const thisPath = [...path, key];
    const value = obj[key];

    if (typeof value === 'object' && !Array.isArray(value)) {
      return {...result, ...flatten(value, thisPath)};
    }

    return {...result, [thisPath.join('.')]: value};
  }, {} as Object)
}

const expand: ConvertObject = (obj: Object) => {
  return Object.keys(obj).reduce((result, path) => {
    return set(result, path, obj[path]);
  }, {} as Object)
}

export const toDeep: ConvertObject = obj => {
  return expand(obj);
}

export const toShallow: ConvertObject = obj => {
  return flatten(obj);
}
