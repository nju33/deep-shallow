import set from 'lodash/set';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyMapObject = Record<string, any>;

export type FlattenObject = (
  obj: AnyMapObject,
  path?: string[],
) => AnyMapObject;
export type ConvertObject<T = {}> = (obj: AnyMapObject) => T;

const flatten: FlattenObject = (obj, path = []): AnyMapObject => {
  return Object.keys(obj).reduce(
    (result, key): AnyMapObject => {
      const thisPath = [...path, key];
      const value = obj[key];

      if (typeof value === 'object' && !Array.isArray(value)) {
        return {...result, ...flatten(value, thisPath)};
      }

      return {...result, [thisPath.join('.')]: value};
    },
    ({} as unknown) as AnyMapObject,
  );
};

const expand: ConvertObject = <O = AnyMapObject>(
  obj: Record<string, O[keyof O]>,
): Record<string, O[keyof O]> => {
  return Object.keys(obj).reduce(
    (result, path): Record<string, O[keyof O]> => {
      return set(result, path, obj[path]);
    },
    ({} as unknown) as Record<string, O[keyof O]>,
  );
};

export const toDeep: ConvertObject = <O = AnyMapObject>(
  obj: O,
): Record<string, O[keyof O]> => {
  return expand(obj);
};

export const toShallow: ConvertObject = <O = AnyMapObject>(
  obj: O,
): Record<string, O[keyof O]> => {
  return flatten(obj);
};
