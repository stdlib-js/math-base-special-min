// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var n=Number.NEGATIVE_INFINITY;function r(n){return n!=n}function t(t,u){return r(t)||r(u)?NaN:t===n||u===n?n:t===u&&0===t?function(r){return 0===r&&1/r===n}(t)?t:u:t<u?t:u}export{t as default};
//# sourceMappingURL=mod.js.map
