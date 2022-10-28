/**
 * More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
 */

//• Tests for equality and inequality with strings

// Equality with string

let script = "Javascript";
console.log("If script is 'Javascript', prediction is true");
console.log(script == "Javascript");

console.log("If script is 'PyScript', prediction is false");
console.log(script == "PyScript");

// Inquality with string

let color = "Green";
console.log("If color is not 'Green', prediction is true");
console.log(color != "Green");

console.log("If color is 'Green', prediction is false");
console.log(color != "Green");

//• Tests using the lower case function

let letter = "lowercase";

console.log("If character is 'lowercase', prediction is true");
console.log(letter.toLowerCase() === letter);

letter = "UPPERCASE";

console.log("If character is 'UPPERCASE', prediction is false");
console.log(letter.toLowerCase() === letter);

//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

let num = 5;
console.log("If num === 5, prediction is true");
console.log(num === 5);

console.log("If num === 4, prediction is false");
console.log(num === 4);

console.log("If num !== 4, prediction is true");
console.log(num !== 4);

console.log("If num !== 5, prediction is false");
console.log(num !== 5);

console.log("If num < 6, prediction is true");
console.log(num < 6);

console.log("If num < 4, prediction is false");
console.log(num < 4);

console.log("If num > 4, prediction is true");
console.log(num > 4);

console.log("If num > 6, prediction is false");
console.log(num > 6);

console.log("If num <= 6, prediction is true");
console.log(num <= 6);

console.log("If num <= 5, prediction is true");
console.log(num <= 5);

console.log("If num <= 4, prediction is false");
console.log(num <= 4);

console.log("If num >= 4, prediction is true");
console.log(num >= 4);

console.log("If num >= 5, prediction is true");
console.log(num >= 5);

console.log("If num >= 6, prediction is false");
console.log(num >= 6);

//• Tests using "and" and "or" operators

let city = "Sidney";
let country = "Australia";

console.log(
  "If city is 'Sidney' AND Country is 'Australia', Prediction is true"
);
console.log(city == "Sidney" && country == "Australia");

console.log(
  "If city is 'Sidney' AND Country is 'New Zealand', Prediction is false"
);
console.log(city == "Sidney" && country == "New Zealand");

let bike = "Honda";
let car = "Honda";

console.log("If bike is 'Honda' OR car is 'Honda', Prediction is true");
console.log(bike == "Honda" || car == "Honda");

console.log("If bike is 'Honda' OR car is 'Toyota', Prediction is false");
console.log(bike == "Honda" || car == "Toyota");

//• Test whether an item is in a array

let arr = ["abc"];

console.log("If arr is array, prediction is true");
console.log(Array.isArray(arr));

//• Test whether an item is not in a array

let characters = "abc";

console.log("If abc is character, prediction is false");
console.log(Array.isArray(characters));
