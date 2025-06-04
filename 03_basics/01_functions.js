function sayMyName() {
    console.log("J");
    console.log("O");
    console.log("H");
    console.log("N");
}

sayMyName();

/* When we pass the inputs in functions it's called parameters and when we call the functions it's called arguments. */
function addTwoNumbers(number1, number2) {
    console.log(number1 + number2);
}

addTwoNumbers(4, 6);
addTwoNumbers(4, "6"); // It consicder both are the string
addTwoNumbers(4, "a"); // It consicder both are the string
addTwoNumbers(4, null);

function addTwoNumbers(number1, number2) {
    let result = number1 + number2;
    return result
}
console.log(addTwoNumbers(4,6));

function addTwoNumbers(number1, number2) {
    return number1 + number2; // This method reduce the number of codes
}
console.log(addTwoNumbers(4,6));

function addTwoNumbers(number1, number2) {
    return number1 + number2; // This method reduce the number of codes
    console.log("John"); // After return in function koi bhi input nahi leta hai
}

const result = addTwoNumbers(4, 6);
console.log("Result:", result);

function loginUserMessage(username) {
    /* Both the if statement output will be same undefined */
    if(username === undefined) {
        console.log("Please enter your username");
        return
    }
    return `${username} just logged in`;
}

function loginUserMessage(username) {
    /* Both the if statement output will be same undefined */
    if(!username) {
        console.log("Please enter your username");
        return
    }
    return `${username} just logged in`;
}

console.log(loginUserMessage("John"));
console.log(loginUserMessage(""));
console.log(loginUserMessage()); // Output will be undefined

function loggedInUserMessage(username = "Sam") {
    return `${username} logged in`;
}

console.log(loggedInUserMessage());
console.log(loggedInUserMessage("John Doe")); // This will over write the name

/* Add number of items price in cart */
// Rest Operator is define by ... and it is also called Spread operator but when we called rest and when we called spread opeartor on the basis of use 
function calculateCartPrice(...num1) {
    return num1;
}
console.log(calculateCartPrice(200, 400, 500, 2000));

function calculateCartPrice1(val1, val2, ...number1) {
    return number1;
}
console.log(calculateCartPrice1(200, 400, 500, 2000));

// How to pass the object through function and how to use object in function
const user = {
    userName: "John",
    prices: 299, // when we give wrong key vale in function doller then it will give undefined
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.userName} and Price is ${anyobject.price}`);
}

handleObject(user);

// Second and short method to pass the object in function
handleObject({
    userName: "Sam",
    price: 399,
})

// Pass the Array through function
const myNewArray = [200, 400, 100, 600];
function returnSecondValue(getArray) {
    return getArray[1];
}
console.log(returnSecondValue(myNewArray));

// Second and short method to pass the Array in function
console.log(returnSecondValue([200, 400, 100, 600]));
