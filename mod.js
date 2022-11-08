// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=Number.NEGATIVE_INFINITY;function n(n){return 0===n&&1/n===r}function t(r){return r!=r}var u=Number.POSITIVE_INFINITY;function e(e,I){var N,f,a,i;if(2===(N=arguments.length))return t(e)||t(I)?NaN:e===r||I===r?r:e===I&&0===e?n(e)?e:I:e<I?e:I;for(f=u,i=0;i<N;i++){if(t(a=arguments[i])||a===r)return a;(a<f||a===f&&0===a&&n(a))&&(f=a)}return f}export{e as default};
//# sourceMappingURL=mod.js.map
