/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var isNegativeZero = require( '@stdlib/math-base-assert-is-negative-zero' );
var isPositiveZero = require( '@stdlib/math-base-assert-is-positive-zero' );
var NINF = require( '@stdlib/constants-float64-ninf' );
var min = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof min, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `NaN` if provided a `NaN`', function test( t ) {
	var v;

	v = min( NaN, 3.14 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	v = min( 3.14, NaN );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-Infinity` if provided `-Infinity`', function test( t ) {
	var v;

	v = min( NINF, 3.14 );
	t.strictEqual( v, NINF, 'returns expected value' );

	v = min( 3.14, NINF );
	t.strictEqual( v, NINF, 'returns expected value' );

	t.end();
});

tape( 'the function returns a correctly signed zero', function test( t ) {
	var v;

	v = min( +0.0, -0.0 );
	t.strictEqual( isNegativeZero( v ), true, 'returns expected value' );

	v = min( -0.0, +0.0 );
	t.strictEqual( isNegativeZero( v ), true, 'returns expected value' );

	v = min( -0.0, -0.0 );
	t.strictEqual( isNegativeZero( v ), true, 'returns expected value' );

	v = min( +0.0, +0.0 );
	t.strictEqual( isPositiveZero( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns the minimum value', function test( t ) {
	var v;

	v = min( 4.2, 3.14 );
	t.strictEqual( v, 3.14, 'returns expected value' );

	v = min( -4.2, 3.14 );
	t.strictEqual( v, -4.2, 'returns expected value' );

	t.end();
});
