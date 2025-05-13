// Primitive DataTypes ( Primitive data types give a copy, not the original value. )
/* 7 types:-  String, Number, Boolean, Null, Undefined, Bigint, Symbol */

// Reference DataTypes ( Non-Primitive DataTypes ) ( Non-Primitive data types give a original value. )
/* 3 types:-  Arrays, Objects, Functions */

/* Q] JS is Dynamic Typed Language or Statically Typed Language?
=> JS is Dynamic Typed Language not Static. */

// Integers DataTypes
const score = 100;
const scoreValue = 100.3;
const name = "John Doe";
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

console.table([score, scoreValue, name, isLoggedIn, outsideTemp,userEmail]);
console.table([typeof score, typeof scoreValue, typeof name, typeof isLoggedIn, typeof outsideTemp, typeof userEmail]);

// Symbol Example
const id = Symbol('12345');
const anotherId = Symbol('12345');
console.log(id === anotherId);

// Bigint
const bigNumber = 9874563215n;

// Arrays
const foods = ["biryani", "dahi-vada", "pani-pori"];
console.log(foods);

// Functions
{
    studentName = "John Doe";
    age = 5;
}

// We can also declare the funstions with variables
let myObj = {
    name1 : "John Nim",
    age : 6,
}

// Rxample
const myFunction = function() {
    console.log("Hello World");
}
console.log(typeof myFunction); // It is called Object Functions

/******************** STACK and HEAP ********************/
// STACK (Primitive) and HEAP (Non-Primitive)

let myYoutubename = "johndotcom";
let anothername = myYoutubename;
anothername = "ChaiaurCode";

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email : "john@google.com",
    upi : "john@ybl",
}

console.log(userOne);


let userTwo = userOne;
console.log(userTwo);

userTwo.email = "hello@google.com";

console.log(userOne.email);
console.log(userTwo.email);
