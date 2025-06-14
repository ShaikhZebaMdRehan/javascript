//+++++++++++++++++++ This +++++++++++++++++++//
const user = {
    username: "John",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, wecome to website`);
        console.log(this); // this means current context
        
    }
}

user.welcomeMessage();
user.username = "Sam";
user.welcomeMessage();

console.log(this); // This will give empty object because in nodejs it is empty object and in browser it is global object output will be window


/* If we only console the "this" it will give many output */
function chai() {
    console.log(this);
}
chai();

/* This will give an output undefined because we don't have an access of using a "this" in function. "this" will use with method only */
function chaiOne() {
    let userName = "John Doe";
    console.log(this.userName);
}
chaiOne();

/* Output is undefiend */
const chaiTwo = function() {
    let userName1 = "Sam Doe";
    console.log(this.userName1);
}
chaiTwo();

//+++++++++++++++++++ Arrow Functions +++++++++++++++++++//
/* It will give an output undefined because we don't have an access of using a "this" in Arrow Functions. "this" will use with method only */
const chaiThree = () => {
    let userName2 = "Sunny";
    console.log(this.userName2);
    console.log(this); // output is empty object
}
chaiThree(); // output is undefined

const addTwo = (num1, num2) => {
    return num1 + num2;
}
console.log(addTwo(3,4));

// This is called implicit returned, In implicit return we don't write curly braces and return keyword
const add2 = (num3, num4) => num3 + num4;
console.log(add2(3,4));

// In implicit returned, we also give the value in parenthesis and when we use curly braces then we use return keyword and when we use parenthesis then we don't use return keyword
const add3 = (num3, num4) => (num3 + num4);
console.log(add3(3,4));

const addFour = (num4, num5) => {username: "Sunny Doe"} // output undefiend
console.log(addFour(3,4));

// When we use object in arrow function we have to use parenthesis
const add = (num6, num7) => ({username: "Jimmy"})
console.log(add(3,4));
