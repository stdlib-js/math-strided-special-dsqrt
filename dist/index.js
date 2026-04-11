"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var q=s(function(z,n){
var j=require('@stdlib/strided-base-dmap/dist'),x=require('@stdlib/math-base-special-sqrt/dist');function l(e,r,a,t,i){return j(e,r,a,t,i,x)}n.exports=l
});var d=s(function(A,v){
var R=require('@stdlib/strided-base-dmap/dist').ndarray,_=require('@stdlib/math-base-special-sqrt/dist');function E(e,r,a,t,i,y,f){return R(e,r,a,t,i,y,f,_)}v.exports=E
});var p=s(function(B,c){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),o=q(),b=d();O(o,"ndarray",b);c.exports=o
});var g=require("path").join,h=require('@stdlib/utils-try-require/dist'),k=p(),u,m=h(g(__dirname,"./native.js"));m instanceof Error?u=k:u=m;module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
