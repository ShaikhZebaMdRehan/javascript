/* greater than ( > )
less than ( < )
greater than equal to ( >= )
less than equal to ( <= )
equal to ( == )
not equal to ( != )
equal value and equal type ( === ) */

console.log( 2 > 1 );
console.log( 2 < 1 );
console.log( 2 >= 1 );
console.log( 2 <= 1 );
console.log( 2 == 1 );
console.log( 2 != 1 );

// Example 01
console.log( "2" > 1 );
console.log( "02" > 1 );

// Example 02
console.log( null > 0 );
console.log( null >= 0 );
console.log( null == 0 );

/* The reason is that an equality check == and comparisons >, <, >=, <= work differently.
Comparisons convert null to a number, treating it as 0. That's why ( null >= 0 ) is true and ( null > 0 ) is false */

// Example 03
console.log( undefined > 0 );
console.log( undefined >= 0 );
console.log( undefined == 0 );

// Example 04
/* === ( It checked strictly and also check the datatypes ) */
console.log("2" === 2);
console.log(2 === 2);
