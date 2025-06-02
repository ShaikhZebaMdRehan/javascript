const marvel_heros = ["Thor", "Ironman", "Spiderman"];
const dc_heros = ["Superman", "Flash", "Batman"];

marvel_heros.push(dc_heros); // This will merge both the Arrays, But this is not a good method
console.log(dc_heros)
console.log(marvel_heros[3][1]);

/* Concat in ARRAY: It is used to combine two different arrays, which are stored in different variables, into one array. */
const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros);

// Most developers use the spread operator instead of concat() because it's easier and shorter. The spread operator is written as ...
const allNewHeros = [...marvel_heros, ...dc_heros];
console.log(allNewHeros);

/* Flat in ARRAY: This method concatenates sub-array elements. If we write flat(Infinity), then it will concatenate all the sub-array elements. */
const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const realAnotherArray = anotherArray.flat(Infinity);
console.log(realAnotherArray);

/* isArray in ARRAY: It is used to determine whether the variable that we have defined is an array or not, so it gives output in true or false.
it's written as Array.isArray(); */
const newUser = "John Doe";
console.log(Array.isArray(newUser));

const newUser1 = ["apple", "mango"]
console.log(Array.isArray(newUser1));

/* From in ARRAY: This method returns an array from any object with a length property.
i.e, output as ['J','o','h','n']  */
const userName = "John"
console.log(Array.from("John"));

console.log(Array.from({name: "John"})); // Interesting

/* Of in ARRAY: It combines all the variables and converts any data type into the form of an array. */
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));
