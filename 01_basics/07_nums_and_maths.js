const score = 400;
console.log(score);

const balance = new Number(400);
console.log(balance);

// Convert the number into string
console.log(balance.toString());
console.log(typeof balance);

// Find out the lenght of the string
console.log(balance.toString().length);

console.log(balance.toFixed(2));

const otherNumber = 257.5866;
console.log(otherNumber.toPrecision(5));

const hundreds = 1000000;
console.log(hundreds.toLocaleString()); // Default take US numbers
console.log(hundreds.toLocaleString("en-IN")); // This means it take Indian Numbers

//+++++++++++++++++++++ Number Methods Name +++++++++++++++++++++//
/* constructor: ƒ Number()
toExponential: ƒ toExponential()
toFixed: ƒ toFixed()
toLocaleString: ƒ toLocaleString()
toPrecision: ƒ toPrecision()
toString: ƒ toString()
valueOf: ƒ valueOf() */

//+++++++++++++++++++++ Maths +++++++++++++++++++++//
console.log(Math);

// abs means Absolute
console.log(Math.abs(4)); // If we give the positive value then it will give the output posivite only never convert the (positive value into negative value)
console.log(Math.abs(-4)) // In this we will give the value negative then it convert the (negative value to positive value).

// round means round off
console.log(Math.round(4.6));

// Ceil and Floor
console.log(Math.ceil(4.6)); // In ceiling always the first number will get incremented.
console.log(Math.ceil(17.22));

console.log(Math.floor(4.8)); // In floor only the first number will be getting printed.
console.log(Math.floor(17225.10));

// Min and Max
console.log(Math.min(5, 6, 8, 2, 7, 9)); // It will give minimum value
console.log(Math.max(4, 9, 5, 7, 3, 8)); // It will give maximum value

// Random
console.log(Math.random()); // A random value always comes between 0 to 1
console.log((Math.random()*10) + 1); // +1 means it removes the 0
console.log(Math.floor(Math.random()*10) +1);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);

//+++++++++++++++++++++ Math Methods Name +++++++++++++++++++++//
/* E: 2.718281828459045
LN2: 0.6931471805599453
LN10: 2.302585092994046
LOG2E: 1.4426950408889634
LOG10E: 0.4342944819032518
PI: 3.141592653589793
SQRT1_2: 0.7071067811865476
SQRT2: 1.4142135623730951
abs: ƒ abs()
acos: ƒ acos()
acosh: ƒ acosh()
asin: ƒ asin()
asinh: ƒ asinh()
atan: ƒ atan()
atan2: ƒ atan2()
atanh: ƒ atanh()
cbrt: ƒ cbrt()
ceil: ƒ ceil()
clz32: ƒ clz32()
cos: ƒ cos()
cosh: ƒ cosh()
exp: ƒ exp()
expm1: ƒ expm1()
f16round: ƒ f16round()
floor: ƒ floor()
fround: ƒ fround()
hypot: ƒ hypot()
imul: ƒ imul()
log: ƒ log()
log1p: ƒ log1p()
log2: ƒ log2()
log10: ƒ log10()
max: ƒ max()
min: ƒ min()
pow: ƒ pow()
random: ƒ random()
round: ƒ round()
sign: ƒ sign()
sin: ƒ sin()
sinh: ƒ sinh()
sqrt: ƒ sqrt()
tan: ƒ tan()
tanh: ƒ tanh()
trunc: ƒ trunc() */
