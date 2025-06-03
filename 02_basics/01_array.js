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

/* PUSH in ARRAY: It adds the element to the end of the array */
myArr2.push(11);
console.log(myArr2);

/* POP in ARRAY: It removes the element from the end of the array */
myArr2.pop();
console.log(myArr2);

/* UNSHIFT in ARRAY: It adds the element from the start of the array */
myArr2.unshift(12);
console.log(myArr2);

/* SHIFT in ARRAY: It removes the element from the start of the array */
myArr2.shift();
console.log(myArr2);

/* INCLUDES in ARRAY: This method is used whenever we have to check the current element, i.e., includes(7) means 7 is present in the array element or not. */
console.log(myArr2.includes(9));
console.log(myArr2.includes(12));

/* indexOf in ARRAY: It is used to find the index of the array element. */
console.log(myArr2.indexOf(3));
console.log(myArr2.indexOf(12));

/* In join, it converts the array into a string, and also if we want to add some element in front of every array element, we can write it as join(5). */
const myArr3 = [0, 1, 2, 3, 4, 5, 6, 7, 8]
console.log(myArr3);
console.log(typeof myArr3);

const newArr = myArr3.join()
console.log(newArr);
console.log(typeof newArr);

/* Slice in ARRAY: Here, it takes the starting index number but does not consider the second index number i.e, slice(1,4) -> here it will start from index number 1 and then will end at index number 3 and if the starting index number is greater than the second one, then it will provide an empty array. */
const myNewArr = [1, 2, 3, 4, 5]
console.log("A ", myNewArr);
const myn1 = myNewArr.slice(1, 3);
console.log(myn1);

/* splice in ARRAY: Here, it considers the starting index number and also considers the second index number. i.e splice(2,4) here the array index will start from 2 and will take till 4 index numbers */
console.log("B ", myNewArr);
const myn2 = myNewArr.splice(1, 3);
console.log(myn2);

console.log("C ", myNewArr);
console.log(myn2);
