/**
 * Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
 */

//• Make a array of your three favorite fruits and call it favorite_fruits.

let favorite_fruits = ["Apple", "Mango", "Banana"];

//• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

if (favorite_fruits.includes("Apple")) {
  console.log("You rally like Apples");
} else if (favorite_fruits.includes("Mango")) {
  console.log("You rally like Mangos");
} else if (favorite_fruits.includes("Banana")) {
  console.log("You rally like Bananas");
} else if (favorite_fruits.includes("Orange")) {
  console.log("You rally like Oranges");
} else if (favorite_fruits.includes("Grape")) {
  console.log("You rally like Grapes");
} else {
  console.log("Try Again !");
}
