"use strict" // This command is treat all the JS code in newer version of JS

/* This is an Arithmetic Operation */
// alert (3 + 3); (We are using Nodejs not browser)

// console.log(3 + 3) console.log("Hello"); (It will give error and it is also reduced the readability)

console.log(3 + 3); console.log("Hello"); // The error will go away after adding a semicolon

// This is also not a good practice of writing a code
/* console.log( 3
     +
 3 ); */

// console.log("Hello World");

//+++++++++++++++++++ DataTypes +++++++++++++++++++//

let name = "John Doe"; //string datatype
let age = 18; //number datatype
let isLoggedIn = true; //boolean datatype
let city = null;
let state;

console.table([name, age, isLoggedIn, city, state]);

//+++++++++++++++++++ Premitive Datatypes +++++++++++++++++++//
/* string = " "
number => 2 to power 53
boolean => true / false
bigint => big numbers
null => standalone value / empty ( type of object will be 'null' )
undefined => value is not assign ( type of undefined will be 'undefined' )
symbol => unique */

/* Find the typeof of DataTypes and Variables */
console.log(typeof name);

console.table([ typeof "John Doe", typeof 18, typeof true, typeof null ]);

console.table([ typeof name, typeof age, typeof isLoggedIn, typeof city, typeof state]);
