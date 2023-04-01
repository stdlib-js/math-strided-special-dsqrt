// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty,t=Object.prototype,n=t.toString,o=t.__defineGetter__,a=t.__defineSetter__,u=t.__lookupGetter__,i=t.__lookupSetter__;var l=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,l){var c,_,f,p;if("object"!=typeof r||null===r||"[object Array]"===n.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof l||null===l||"[object Array]"===n.call(l))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+l+"`.");if((_="value"in l)&&(u.call(r,e)||i.call(r,e)?(c=r.__proto__,r.__proto__=t,delete r[e],r[e]=l.value,r.__proto__=c):r[e]=l.value),f="get"in l,p="set"in l,_&&(f||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return f&&o&&o.call(r,e,l.get),p&&a&&a.call(r,e,l.set),r};function c(r,e,t){l(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function _(r,e,t,n,o,a){var u,i,l;if(r<=0)return n;for(u=t<0?(1-r)*t:0,i=o<0?(1-r)*o:0,l=0;l<r;l++)n[i]=a(e[u]),u+=t,i+=o;return n}function f(r,e,t,n,o,a,u,i){var l,c,_;if(r<=0)return o;for(l=n,c=u,_=0;_<r;_++)o[c]=i(e[l]),l+=t,c+=a;return o}c(_,"ndarray",f);var p=Math.sqrt;function y(r,e,t,n,o){return _(r,e,t,n,o,p)}function b(r,e,t,n,o,a,u){return f(r,e,t,n,o,a,u,p)}c(y,"ndarray",b);export{y as default,b as ndarray};
//# sourceMappingURL=mod.js.map
