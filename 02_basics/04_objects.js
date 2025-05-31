// const tinderUser = new Object(); // This is singleton object
const tinderUser = {}; // This is non-singleton object ( But both the output will be empty object )

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userName: {
            firstName: "John",
            lastName: "Doe",
        }
    } 
}
console.log(regularUser);
console.log(regularUser.fullName.userName.firstName);

const obj1 = { 1: "a", 2: "b", 3: "c"};
const obj2 = { 4: "d", 5: "e", 6: "f"};

// const obj3 = {obj1, obj2}; // This is not a good method to add the objects

// const obj3 = Object.assign(obj1, obj2); Both the method are same
const obj3 = Object.assign({}, obj1, obj2);
console.log(obj3);

const users = [
    {
        id: 1,
        email: "a1@gmail.com",
    },

    {
        id: 2,
        email: "a2@gmail.com,"
    },

    {
        id: 3,
        email: "a3@gmail.com",
    }
]

console.log(users);
console.log(users[1].email);

const tinderUser1 = {};
tinderUser1.id = 17225;
tinderUser1.name = "John Doe";
tinderUser1.email = "jd@gmail.com";
tinderUser1.isLoggedIn = false;

console.log(tinderUser1);
console.log(Object.keys(tinderUser1)); // This will print the key in Array formate
console.log(Object.values(tinderUser1)); // This will print the values in Array formate
console.log(Object.entries(tinderUser1)); // This will print the output in Array ke andar Array

// Find out the is property is there or not. output give in the boolean type 
console.log(tinderUser1.hasOwnProperty("isLoggedIn"));
console.log(tinderUser1.hasOwnProperty("isLogged"));
