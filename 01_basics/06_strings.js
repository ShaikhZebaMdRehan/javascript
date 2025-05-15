const name = "John Doe";
const repoCount = 50;

// console.log(name + " " + repoCount + " value"); ( It is not good way to code because it is outdated method )

// Today's day we use BACTICS. Using backticks is helpful because it allows string interpolation. This means you can create placeholders inside the string, and directly insert any variable into it.
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// One more way to declare string
const gameName = new String('Tommy');
console.log(gameName);

// Access the key of gameName
console.log(gameName[0]);

// Access the Prototype
console.log(gameName.__proto__);

// Use the methods or functions
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3)); // You want to know which character is at which index or position.
console.log(gameName.indexOf('o')); // Reverse it

// Now you can split the strings ( It will not include last letter, when we will give ( 0, 3 ) it means it will give 0 to 2 letters)
const fName = "Tom-Jerry";
const newString = fName.substring(0, 3);
console.log(newString);
// If starting value is negative it will consider it as 0
const newString1 = fName.substring(-2, 5);
console.log(newString1);

// Slice Method
const anotehrString = fName.slice(-10, 4); // {total number of length(fName = "Tom-Jerry")- slice methods first value = will be replaced by slice methods furst value}
console.log(anotehrString);

// Trim Method, The trim() method removes whitespace from both sides of a string. The trim() method does not change the original string.
const newStringOne = "     John Doe     ";
console.log(newStringOne);
console.log(newStringOne.trim()); // trim work both strt and end.
console.log(newStringOne.trimStart()); // The trimStart() method works like trim(), but removes whitespace only from the start of a string.
console.log(newStringOne.trimEnd());// The trimEnd() method works like trim(), but removes whitespace only from the end of a string.

// Replace Method, The replace method can be used to change space into %.
const url = "https://john.com/%20johndoe";
console.log(url.replace('%20', '-'));

// We will check if a word is present or not using 'includes'. If the word matches, it should return true; otherwise, false.
console.log(url.includes("johndoe"));
console.log(url.includes("hello-world"));

// Split Method
const studentName = "hitler-killer"; // This will split in Array formate
console.log(studentName.split('-'));