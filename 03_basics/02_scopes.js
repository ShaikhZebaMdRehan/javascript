let a = 10;
const b = 20;
var c = 30;

console.log(a);
console.log(b);
console.log(c);

// When we use the {} curly braces in functions and if else conditions then it is called scope of that program

/* If we use the if else and functions it is called block scope And if we code outside the scope it is called global scope and what ever we write the code in global it will be available in the block scope but when we write the code in the scope it will not available in the global scope */

var f = 300; // If decalre the var outside the block scope then too it will give an output of block scope only

if (true) {
    let d = 40;
    const e = 50;
    var f = 60; // If we decalre var or ( f = 60 ) like this still give an output that's why we avoid var
}

// When we take block scope and define the value in block scope then let and const will give not defined
// console.log(d); ( It will give error not defined )
// console.log(e); ( It will give error not defined )
console.log(f); // It will give an output because var has not a scope

/* If we use the global scope and also assign in that value in block scope then too it give an output of global scope */
let g = 400;

if (true) {
    let g = 70;
    const h = 80;
    console.log("Inner:", g);
}
console.log(g);

//+++++++++++++++++++ Nested Scope +++++++++++++++++++//
function one() {
    const userName = "John";

    function two() {
        const website = "youtube";
        console.log(userName);
    }
    // console.log(website); /* Always Parent will not access the Child value but Child will access the Parent value ( If we parent will access the child value then it will give error ) */
    
    two()
}

one()

if (true) {
    const username = "John";

    if (username === "John") {
        const website = "youtube";
        console.log(username + " " + website);
    }

    // console.log(webiste); This will give error because of we are accessing the child value in Parent
}

// console.log(username); This will also give error because of we are accessing the Parent value after the block scope


//+++++++++++++++++++ Interesting +++++++++++++++++++//
// This is a function
function addOne(num) {
    return num + 1;
}
addOne(5);

// This is also called function but in expression
const addTwo = function(num) {
    return num + 2;
}
addTwo(5);

// This is also a type of decalring a function
addOne(5);
console.log(addOne(5)); // check

function addOne(num) {
    return num + 1;
}

// This is also type of decalring a function but in expression
// When we decalre the function ny holding in variable it is called hosting
addTwo1(5); // It will give error because we had decalre a function in variable
const addTwo1 = function(num) {
    return num + 2;
}