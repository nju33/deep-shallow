export interface Object {
    [key: string]: any;
}
export declare type FlattenObject = (obj: Object, path?: string[]) => Object;
export declare type ConvertObject<T = {}> = (obj: Object) => T;
export declare const toDeep: ConvertObject;
export declare const toShallow: ConvertObject;
