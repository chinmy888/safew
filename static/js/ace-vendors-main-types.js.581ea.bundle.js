"use strict";(self.webpackChunkmy_webpack_project=self.webpackChunkmy_webpack_project||[]).push([[6961],{4911:(e,n,r)=>{var t=r(3025),i=r(9141),o=r(6192),u=r(1230);function f(e){return e.call.bind(e)}var a="undefined"!=typeof BigInt,c="undefined"!=typeof Symbol,y=f(Object.prototype.toString),s=f(Number.prototype.valueOf),p=f(String.prototype.valueOf),d=f(Boolean.prototype.valueOf);if(a)var A=f(BigInt.prototype.valueOf);if(c)var b=f(Symbol.prototype.valueOf);function w(e,n){if("object"!=typeof e)return!1;try{return n(e),!0}catch(e){return!1}}function l(e){return"[object Map]"===y(e)}function k(e){return"[object Set]"===y(e)}function B(e){return"[object WeakMap]"===y(e)}function j(e){return"[object WeakSet]"===y(e)}function g(e){return"[object ArrayBuffer]"===y(e)}function S(e){return"undefined"!=typeof ArrayBuffer&&(g.working?g(e):e instanceof ArrayBuffer)}function m(e){return"[object DataView]"===y(e)}function M(e){return"undefined"!=typeof DataView&&(m.working?m(e):e instanceof DataView)}n.isArgumentsObject=t,n.isGeneratorFunction=i,n.isTypedArray=u,n.isPromise=function(e){return"undefined"!=typeof Promise&&e instanceof Promise||null!==e&&"object"==typeof e&&"function"==typeof e.then&&"function"==typeof e.catch},n.isArrayBufferView=function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):u(e)||M(e)},n.isUint8Array=function(e){return"Uint8Array"===o(e)},n.isUint8ClampedArray=function(e){return"Uint8ClampedArray"===o(e)},n.isUint16Array=function(e){return"Uint16Array"===o(e)},n.isUint32Array=function(e){return"Uint32Array"===o(e)},n.isInt8Array=function(e){return"Int8Array"===o(e)},n.isInt16Array=function(e){return"Int16Array"===o(e)},n.isInt32Array=function(e){return"Int32Array"===o(e)},n.isFloat32Array=function(e){return"Float32Array"===o(e)},n.isFloat64Array=function(e){return"Float64Array"===o(e)},n.isBigInt64Array=function(e){return"BigInt64Array"===o(e)},n.isBigUint64Array=function(e){return"BigUint64Array"===o(e)},l.working="undefined"!=typeof Map&&l(new Map),n.isMap=function(e){return"undefined"!=typeof Map&&(l.working?l(e):e instanceof Map)},k.working="undefined"!=typeof Set&&k(new Set),n.isSet=function(e){return"undefined"!=typeof Set&&(k.working?k(e):e instanceof Set)},B.working="undefined"!=typeof WeakMap&&B(new WeakMap),n.isWeakMap=function(e){return"undefined"!=typeof WeakMap&&(B.working?B(e):e instanceof WeakMap)},j.working="undefined"!=typeof WeakSet&&j(new WeakSet),n.isWeakSet=function(e){return j(e)},g.working="undefined"!=typeof ArrayBuffer&&g(new ArrayBuffer),n.isArrayBuffer=S,m.working="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView&&m(new DataView(new ArrayBuffer(1),0,1)),n.isDataView=M;var v="undefined"!=typeof SharedArrayBuffer?SharedArrayBuffer:void 0;function I(e){return"[object SharedArrayBuffer]"===y(e)}function O(e){return void 0!==v&&(void 0===I.working&&(I.working=I(new v)),I.working?I(e):e instanceof v)}function h(e){return w(e,s)}function W(e){return w(e,p)}function U(e){return w(e,d)}function V(e){return a&&w(e,A)}function F(e){return c&&w(e,b)}n.isSharedArrayBuffer=O,n.isAsyncFunction=function(e){return"[object AsyncFunction]"===y(e)},n.isMapIterator=function(e){return"[object Map Iterator]"===y(e)},n.isSetIterator=function(e){return"[object Set Iterator]"===y(e)},n.isGeneratorObject=function(e){return"[object Generator]"===y(e)},n.isWebAssemblyCompiledModule=function(e){return"[object WebAssembly.Module]"===y(e)},n.isNumberObject=h,n.isStringObject=W,n.isBooleanObject=U,n.isBigIntObject=V,n.isSymbolObject=F,n.isBoxedPrimitive=function(e){return h(e)||W(e)||U(e)||V(e)||F(e)},n.isAnyArrayBuffer=function(e){return"undefined"!=typeof Uint8Array&&(S(e)||O(e))},["isProxy","isExternal","isModuleNamespaceObject"].forEach((function(e){Object.defineProperty(n,e,{enumerable:!1,value:function(){throw new Error(e+" is not supported in userland")}})}))}}]);