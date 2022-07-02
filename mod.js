// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=Number.NEGATIVE_INFINITY,n=r;var t=function(r){return 0===r&&1/r===n};var u=function(r){return r!=r},e=Number.POSITIVE_INFINITY;function I(n,I){var N,a,f,i;if(2===(N=arguments.length))return u(n)||u(I)?NaN:n===r||I===r?r:n===I&&0===n?t(n)?n:I:n<I?n:I;for(a=e,i=0;i<N;i++){if(u(f=arguments[i])||f===r)return f;(f<a||f===a&&0===f&&t(f))&&(a=f)}return a}export{I as default};
//# sourceMappingURL=mod.js.map
