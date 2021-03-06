<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# atan2

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the angle in the plane (in radians) between the positive x-axis and the ray from `(0,0)` to the point `(x,y)`.

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-atan2
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var atan2 = require( '@stdlib/math-base-special-atan2' );
```

#### atan2( y, x )

Computes the angle in the plane (in radians) between the positive x-axis and the ray from `(0,0)` to the point `(x,y)`.

```javascript
var v = atan2( 2.0, 2.0 ); // => atan(1.0)
// returns ~0.785

v = atan2( 6.0, 2.0 ); // => atan(3.0)
// returns ~1.249

v = atan2( -1.0, -1.0 ); // => atan(1.0) - π
// returns ~-2.356

v = atan2( 3.0, 0.0 ); // => π/2
// returns ~1.571

v = atan2( -2.0, 0.0 ); // => -π/2
// returns ~-1.571

v = atan2( 0.0, 0.0 );
// returns 0.0

v = atan2( 3.0, NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var atan2 = require( '@stdlib/math-base-special-atan2' );

var y;
var x;
var i;

for ( i = 0; i < 100; i++ ) {
    y = randu() * 100.0;
    x = randu() * 100.0;
    console.log( 'y: %d, \t x: %d, \t atan2(y,x): %d', y.toFixed( 4 ), x.toFixed( 4 ), atan2( y, x ).toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/special/atan`][@stdlib/math/base/special/atan]</span><span class="delimiter">: </span><span class="description">compute the arctangent of a number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-atan2.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-atan2

[test-image]: https://github.com/stdlib-js/math-base-special-atan2/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-atan2/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-atan2/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-atan2?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-atan2.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-atan2/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-atan2/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-special-atan2/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-special-atan2/tree/esm
[branches-url]: https://github.com/stdlib-js/math-base-special-atan2/blob/main/branches.md

<!-- <related-links> -->

[@stdlib/math/base/special/atan]: https://github.com/stdlib-js/math-base-special-atan

<!-- </related-links> -->

</section>

<!-- /.links -->
