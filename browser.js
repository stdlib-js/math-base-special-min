// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,n;e=this,n=function(){"use strict";var e=Number.NEGATIVE_INFINITY,n=e,t=function(e){return 0===e&&1/e===n},r=function(e){return e!=e},f=Number.POSITIVE_INFINITY;return function(n,u){var i,o,d,I;if(2===(i=arguments.length))return r(n)||r(u)?NaN:n===e||u===e?e:n===u&&0===n?t(n)?n:u:n<u?n:u;for(o=f,I=0;I<i;I++){if(r(d=arguments[I])||d===e)return d;(d<o||d===o&&0===d&&t(d))&&(o=d)}return o}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).min=n();
//# sourceMappingURL=browser.js.map