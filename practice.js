//+++++++++++++++++++++ String +++++++++++++++++++++//
const name = "Zeba";
const age = 5;
// console.log(name);
// console.log(name + " " + age + " " + "Kurla");
// console.log(`Hello my name is ${name} and my age is ${age} and live in kurla`);

const name1 = new String("zeba");
// console.log(name1);

// console.log(name1.__proto__);

// console.log(name1[3]);

//methods

// console.log(name1.length);

const userName = "simmer";
const userName1 = "simmer-sammo";
const studentName = "   sammo  ";
const updateName = "SIMMER";
// const anotherName = userName.substring(-2,5);
// const anotherName = userName.slice(-8,5)
// const anotherName = studentName.trim();
// const anotherName = userName1.split("-");
// const anotherName = userName.replace("simmer","sunny");
// const anotherName = userName1.includes("sony");
// const anotherName = userName.toUpperCase();
// const anotherName = updateName.toLowerCase();
// const anotherName = userName.charAt(4);
const anotherName = userName.indexOf("e");
// console.log(studentName);
// console.log(anotherName);


//+++++++++++++++++++++ Numbers +++++++++++++++++++++//
const score = 5;
// console.log(score);

const balance = new Number(6);
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const num1 = 275.6599;
// console.log(num1.toPrecision(5));

const num2 = 1587263;
// console.log(num2.toLocaleString());
// console.log(num2.toLocaleString("en-Us"));
// console.log(num2.toLocaleString("en-IN"));


//+++++++++++++++++++++ Maths +++++++++++++++++++++//
// console.log(Math);
// console.log(Math.abs(5));
// console.log(Math.abs(-10));
// console.log(Math.round(5.3));
// console.log(Math.ceil(5.8));
// console.log(Math.floor(5.8));
// console.log(Math.min(8, 6, 2, 7, 3));
// console.log(Math.max(8, 6, 2, 7, 3));

// console.log(Math.random());
// console.log(Math.random()*10 +1);
// console.log(Math.ceil(Math.random()*10 +1));
// console.log(Math.floor(Math.random()*10 +1));

const min = 5;
const max = 10;
// console.log(Math.floor(Math.random() * (mix - min) + 1) + min);

//+++++++++++++++++++++ Dates and TIme +++++++++++++++++++++//
// const newDate = new Date();
// console.log(newDate);
// console.log(newDate.toString());
// console.log(newDate.toDateString());
// console.log(newDate.toISOString());
// console.log(newDate.toJSON());
// console.log(newDate.toLocaleDateString());
// console.log(newDate.toLocaleString());
// console.log(newDate.toLocaleTimeString());
// console.log(newDate.toTimeString());

// console.log(typeof newDate);

let updateDate = new Date(2023, 0, 14, 5, 9);
// console.log(updateDate);
// console.log(updateDate.toDateString());
// console.log(updateDate.toLocaleString());

// let updateDate1 = new Date("2023-01-14");
let updateDate1 = new Date("01-14-2023");
// console.log(updateDate1);
// console.log(updateDate1.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(updateDate1.getTime());
// console.log(Date.now()/1000);
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getHours());
console.log(newDate.getMilliseconds());
console.log(newDate.getMinutes());
console.log(newDate.getMonth());
console.log(newDate.getSeconds());
console.log(newDate.getTime());
console.log(newDate.getTimezoneOffset());
console.log(newDate.getUTCDate());
console.log(newDate.getUTCDay());

console.log(true);
console.log(+true);
// console.log(true+); If we put a '+' sign before 'true' or something, it will give an error 
console.log(+""); // If it is empty, it will give the output 0