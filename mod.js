// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var n=Number.POSITIVE_INFINITY,r=Number.NEGATIVE_INFINITY;function t(t){return t===n||t===r}var o="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var e=Object.prototype.toString;var a=Object.prototype.hasOwnProperty;var i="function"==typeof Symbol?Symbol.toStringTag:"";var f=o&&"symbol"==typeof Symbol.toStringTag?function(n){var r,t,o,f,u;if(null==n)return e.call(n);t=n[i],u=i,r=null!=(f=n)&&a.call(f,u);try{n[i]=void 0}catch(r){return e.call(n)}return o=e.call(n),r?n[i]=t:delete n[i],o}:function(n){return e.call(n)},u="function"==typeof Uint32Array;var c="function"==typeof Uint32Array?Uint32Array:null;var y,l="function"==typeof Uint32Array?Uint32Array:void 0;y=function(){var n,r,t;if("function"!=typeof c)return!1;try{r=new c(r=[1,3.14,-3.14,4294967296,4294967297]),t=r,n=(u&&t instanceof Uint32Array||"[object Uint32Array]"===f(t))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?l:function(){throw new Error("not implemented")};var v=y,p="function"==typeof Float64Array;var A="function"==typeof Float64Array?Float64Array:null;var w,U="function"==typeof Float64Array?Float64Array:void 0;w=function(){var n,r,t;if("function"!=typeof A)return!1;try{r=new A([1,3.14,-3.14,NaN]),t=r,n=(p&&t instanceof Float64Array||"[object Float64Array]"===f(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){n=!1}return n}()?U:function(){throw new Error("not implemented")};var b=w,m="function"==typeof Uint8Array;var I="function"==typeof Uint8Array?Uint8Array:null;var d,h="function"==typeof Uint8Array?Uint8Array:void 0;d=function(){var n,r,t;if("function"!=typeof I)return!1;try{r=new I(r=[1,3.14,-3.14,256,257]),t=r,n=(m&&t instanceof Uint8Array||"[object Uint8Array]"===f(t))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?h:function(){throw new Error("not implemented")};var N=d,F="function"==typeof Uint16Array;var S="function"==typeof Uint16Array?Uint16Array:null;var s,H="function"==typeof Uint16Array?Uint16Array:void 0;s=function(){var n,r,t;if("function"!=typeof S)return!1;try{r=new S(r=[1,3.14,-3.14,65536,65537]),t=r,n=(F&&t instanceof Uint16Array||"[object Uint16Array]"===f(t))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?H:function(){throw new Error("not implemented")};var O,E={uint16:s,uint8:N};(O=new E.uint16(1))[0]=4660;var g,j,T=52===new E.uint8(O.buffer)[0];!0===T?(g=1,j=0):(g=0,j=1);var G={HIGH:g,LOW:j},L=new b(1),W=new v(L.buffer),P=G.HIGH,V=G.LOW;function Y(n,r){return L[0]=r,n[0]=W[P],n[1]=W[V],n}var _,x,k=!0===T?1:0,q=new b(1),z=new v(q.buffer);function B(n){return q[0]=n,z[k]}!0===T?(_=1,x=0):(_=0,x=1);var C={HIGH:_,LOW:x},D=new b(1),J=new v(D.buffer),K=C.HIGH,M=C.LOW;var Q=[0,0];function R(n,r){var t,o,e,a;return function(n,r){1===arguments.length?Y([0,0],n):Y(n,r)}(Q,n),t=Q[0],t&=2147483647,o=B(r),e=t|=o&=2147483648,a=Q[1],J[K]=e,J[M]=a,D[0]}function X(n){return n!=n}var Z=1.5707963267948966;var $=3.141592653589793;function nn(o,e){var a;return X(e)||X(o)?NaN:t(e)?e===n?t(o)?R($/4,o):R(0,o):t(o)?R(3*$/4,o):R($,o):t(o)?R($/2,o):0===o?e>=0&&!function(n){return!!(B(n)>>>31)}(e)?R(0,o):R($,o):0===e?R($/2,o):(a=function(t){var o,e,a,i;return X(t)||0===t?t:t===n?Z:t===r?-Z:(t<0&&(e=!0,t=-t),o=0,t>2.414213562373095?(a=Z,o=1,t=-1/t):t<=.66?a=0:(a=.7853981633974483,o=2,t=(t-1)/(t+1)),i=(i=t*t)*function(n){return 0===n?-64.85021904942025:n*(n*(n*(-.8750608600031904*n-16.157537187333652)-75.00855792314705)-122.88666844901361)-64.85021904942025}(i)/function(n){return 0===n?194.5506571482614:194.5506571482614+n*(485.3903996359137+n*(432.88106049129027+n*(165.02700983169885+n*(24.858464901423062+1*n))))}(i),i=t*i+t,2===o?i+=3061616997868383e-32:1===o&&(i+=6123233995736766e-32),a+=i,e?-a:a)}(o/e),e<0?a<=0?a+$:a-$:a)}export{nn as default};
//# sourceMappingURL=mod.js.map
