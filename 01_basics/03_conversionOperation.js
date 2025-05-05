//Example 01
let score = 5;
console.log(score);

// both are same
console.log(typeof score);
console.log(typeof (score)); // this parenthesis is a method means we pass the score in method

//Example 02
let marks = "35";
console.log(typeof marks);

// Let's convert the STRING into a NUMBER

let studentMarks = "45";
let valueInNumber = Number(studentMarks) // Number is a datatype
console.log(valueInNumber);
console.log(typeof valueInNumber);

// Let's convert the STRING into a NUMBER

let someMarks = "5abc";
let valueInMarks = Number(someMarks) // Number is a datatype
console.log(valueInMarks);
console.log(typeof valueInMarks); // NAN ( Not an Number ) NAN is a Special Character

// Let's convert the NUMBER into a STRING

let someNumber = 5;
let stringNumber = String(someNumber) // String is a datatype
console.log(stringNumber);
console.log(typeof stringNumber);

// Let's convert the NULL into a NUMBER

let someScores = null;
let valueInScores = Number(someScores) // Number is a datatype
console.log(valueInScores);
console.log(typeof valueInScores);

// Let's convert the UNDEFINED into a NUMBER

let some_Scores = undefined;
let value_In_Scores = Number(some_Scores) // Number is a datatype
console.log(value_In_Scores);
console.log(typeof value_In_Scores);

// Let's convert the BOOLEAN into a NUMBER

let isLoggedIn = true;
let valueInIsLoggedIn = Number(isLoggedIn) // Number is a datatype
console.log(valueInIsLoggedIn);
console.log(typeof valueInIsLoggedIn); // In Boolean: true = 1 ; false = 0

// Let's convert the NUMBER into a BOOLEAN

let studentIsLoggedIn = 1;
let booleanStudentIsLoggedIn = Boolean(studentIsLoggedIn) // Boolean is a datatype
console.log(booleanStudentIsLoggedIn);
console.log(typeof booleanStudentIsLoggedIn); // In Boolean: true = 1 ; false = 0

// Let's convert the EMPTY into a BOOLEAN

let studentScore = "";
let booleanstudentScore = Boolean(studentScore) // Boolean is a datatype
console.log(booleanstudentScore);
console.log(typeof booleanstudentScore); // In Boolean: true = 1 ; false = 0

// Let's convert the STRING into a BOOLEAN

let studentName = "John Doe";
let booleanstudentName = Boolean(studentName) // Boolean is a datatype
console.log(booleanstudentName);
console.log(typeof booleanstudentName);
