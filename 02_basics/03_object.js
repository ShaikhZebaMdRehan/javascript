/* Objects declare in two ways first is literal syntax and second is constructor syntax.
Singleton: When we declare the objects through constructor it will create the Singleton Objects.
When we declare the objects through literal it will not create the Singleton Objects.
But when we declare the object through other then it will not create the singleton it will create the multiple instances. */

Object.create = {}; // This is the syntax of Singleton

// Object literals
const mySym = Symbol("key1");

const jsUser = {
    name: "John",
    "full name": "John Doe", // Isko Dot ke zariye access nahi kar sakte hai
    [mySym]: "myKey1", // Symbol refers the square brackets and always access through the square brackets
    age: 17,
    location: "Jaipur",
    email: "john@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};

// Two ways to access the objects
console.log(jsUser.email); // Always access the value by dot (.) method
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);
console.log(typeof jsUser[mySym]);

// Change the value
jsUser.email = "johnchatgpt.com";
console.log(jsUser.email);

// Locked the values
Object.freeze(jsUser);

jsUser.email = "johnmicrosoft.com";
console.log(jsUser);

// Functions
const jsUser1 = {
    name: "Josef",
    "full name": "Josef Doe",
    age: 17,
    location: "Jaipur",
    email: "josef@gmail.com",
};

jsUser1.greetings = function() {
    console.log("Hello JS User");
}

jsUser1.greetings();
console.log(jsUser1.greetings); // Funtion nahi print huwa just function ka reference aya
console.log(jsUser1.greetings());

// Access the string from objects
jsUser1.greetingsTwo = function() {
    console.log(`Hello JS User ${this.name}`);
}

console.log(jsUser1.greetingsTwo());
