"use strict";var a=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(s){throw (r=0, s)}};};var n=a(function(q,u){
var f=require('@stdlib/math-base-assert-is-negative-zero/dist'),t=require('@stdlib/math-base-assert-is-nan/dist'),i=require('@stdlib/constants-float64-ninf/dist');function v(e,r){return t(e)||t(r)?NaN:e===i||r===i?i:e===r&&e===0?f(e)?e:r:e<r?e:r}u.exports=v
});var N=n();module.exports=N;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
