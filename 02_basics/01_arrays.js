/* The Array object in programming (like in JavaScript), lets you store many items together using one variable name. Just like in other programming languages, it's a way to keep a list of things (like numbers or names) in one place.

It contains a mix of different data types.

JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on.

JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).

A shallow copy of an object is a copy whose properties share the same references.

A deep copy of an object is a copy whose properties do not share the same references. */

//+++++++++++++++++++ Basics of Arrays +++++++++++++++++++//
const myArr = [0, 1, 2, 3, 4];
console.log(myArr);

console.log(myArr[2]);

const myHeros = ["Rehan", "Gayas", "Hannan"];
console.log(myHeros[2]);

const myArr1 = new Array(1, 2, 3) // this is also a type of decalring an Array
console.log(myArr1[2]);

//+++++++++++++++++++ Methods of Arrays +++++++++++++++++++//

const myArr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(myArr2);

myArr2.push(11);
console.log(myArr2);

myArr2.pop();
console.log(myArr2);

myArr2.unshift(12);
console.log(myArr2);

myArr2.shift();
console.log(myArr2);

console.log(myArr2.includes(9));
console.log(myArr2.includes(12));

console.log(myArr2.indexOf(3));
console.log(myArr2.indexOf(12));

/* The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator. */
const myArr3 = [0, 1, 2, 3, 4, 5, 6, 7, 8]
console.log(myArr3);
console.log(typeof myArr3);

const newArr = myArr3.join()
console.log(newArr);
console.log(typeof newArr);

// Slice, Splice
const myNewArr = [1, 2, 3, 4, 5]
console.log("A ", myNewArr);
const myn1 = myNewArr.slice(1, 3);
console.log(myn1);

console.log("B ", myNewArr);
const myn2 = myNewArr.splice(1, 3);
console.log(myn2);

console.log("C ", myNewArr);
console.log(myn2);
