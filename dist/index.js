"use strict";var q=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var s=q(function(I,f){
var u=require('@stdlib/math-base-assert-is-infinite/dist'),i=require('@stdlib/math-base-special-copysign/dist'),v=require('@stdlib/number-float64-base-signbit/dist'),a=require('@stdlib/math-base-assert-is-nan/dist'),c=require('@stdlib/math-base-special-atan/dist'),o=require('@stdlib/constants-float64-pinf/dist'),t=require('@stdlib/constants-float64-pi/dist');function p(r,e){var n;return a(e)||a(r)?NaN:u(e)?e===o?u(r)?i(t/4,r):i(0,r):u(r)?i(3*t/4,r):i(t,r):u(r)?i(t/2,r):r===0?e>=0&&!v(e)?i(0,r):i(t,r):e===0?i(t/2,r):(n=c(r/e),e<0?n<=0?n+t:n-t:n)}f.exports=p
});var N=s();module.exports=N;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
