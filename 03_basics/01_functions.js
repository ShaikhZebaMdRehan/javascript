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
    // return result
    return number1 + number2; // This method reduce the number of codes
    // console.log("John"); After return in function koi bhi input nahi leta hai
}

const result = addTwoNumbers(4, 6);
console.log("Result:", result);

function loginUserMessage(username) {
    /* Both the if statement output will be same undefined */
    if(username === undefined) {
        console.log("Please enter your username");
        // return
    }
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
