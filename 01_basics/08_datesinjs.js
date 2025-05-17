//+++++++++++++++++++++ Dates +++++++++++++++++++++//
let myDate = new Date();
console.log(myDate);

//+++++++++++++++++++++ Methods +++++++++++++++++++++//
// Convert the Date into String
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toTimeString());


// Check the datatype of Date
console.log(typeof myDate); // Date is object

// Let's check the Dates by passing the value inside the method
let myCreatedDate = new Date(2023, 0, 23) // In Dates 0 means January beacuse in JS always start from 0
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());

let myUpdateDate = new Date(2023, 0, 23, 5, 3)
console.log(myUpdateDate.toLocaleString());

// Also pass the value in specific formate like (yy-mm-dd)
let myNewDate = new Date("2023-01-14"); // In specific formate we always start from 1
console.log(myNewDate.toLocaleString());

let myNewDate1 = new Date("01-14-2023"); // We use this method in India (mm-dd-yy)
console.log(myNewDate1.toLocaleString());


//+++++++++++++++++++++ Time +++++++++++++++++++++//
let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime()); // Find out the millisecond from Date
console.log(Date.now()/1000); // Convert into Seconds (But in this we will get the numbers into decimal, So we use Math Formula)
console.log(Math.floor(Date.now()/1000)); // Always use (Math.floor or Math.round)


//+++++++++++++++++++++ Some More Methods +++++++++++++++++++++//
let newDate = new Date();
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getHours());
console.log(newDate.getMilliseconds());
console.log(newDate.getMinutes());
console.log(newDate.getMonth());
console.log(newDate.getMonth() +1);
console.log(newDate.getSeconds());
console.log(newDate.getTime());

newDate.toLocaleString('default', {
    weekday: "long",
});