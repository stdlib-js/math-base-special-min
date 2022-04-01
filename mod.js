// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=Number.NEGATIVE_INFINITY,n=r;var t=function(r){return 0===r&&1/r===n};var u=function(r){return r!=r},e=Number.POSITIVE_INFINITY,I=t,N=u,a=r,f=e;var i=function(r,n){var t,u,e,i;if(2===(t=arguments.length))return N(r)||N(n)?NaN:r===a||n===a?a:r===n&&0===r?I(r)?r:n:r<n?r:n;for(u=f,i=0;i<t;i++){if(N(e=arguments[i])||e===a)return e;(e<u||e===u&&0===e&&I(e))&&(u=e)}return u};export{i as default};
//# sourceMappingURL=mod.js.map
