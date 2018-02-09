"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var set_1 = __importDefault(require("lodash/set"));
var flatten = function (obj, path) {
    if (path === void 0) { path = []; }
    return Object.keys(obj).reduce(function (result, key) {
        var thisPath = path.concat([key]);
        var value = obj[key];
        if (typeof value === 'object' && !Array.isArray(value)) {
            return __assign({}, result, flatten(value, thisPath));
        }
        return __assign({}, result, (_a = {}, _a[thisPath.join('.')] = value, _a));
        var _a;
    }, {});
};
var expand = function (obj) {
    return Object.keys(obj).reduce(function (result, path) {
        return set_1.default(result, path, obj[path]);
    }, {});
};
exports.toDeep = function (obj) {
    return expand(obj);
};
exports.toShallow = function (obj) {
    return flatten(obj);
};
