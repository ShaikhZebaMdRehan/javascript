const marvel_heros = ["Thor", "Ironman", "Spiderman"];
const dc_heros = ["Superman", "Flash", "Batman"];

marvel_heros.push(dc_heros); // This will merge both the Arrays, But this is not a good method 

console.log(marvel_heros);
console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros);

// Most developers use the spread operator instead of concat() because it's easier and shorter. The spread operator is written as ...
const allNewHeros = [...marvel_heros, ...dc_heros];
console.log(allNewHeros);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const realAnotherArray = anotherArray.flat(Infinity);
console.log(realAnotherArray);

console.log(Array.isArray("John"));
console.log(Array.from("John")); // Convert into Array
console.log(Array.from({name: "John"})); // Interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));
