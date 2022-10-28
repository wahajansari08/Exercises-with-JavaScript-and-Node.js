/**
 * Seeing the World: Think of at least five places in the world you’d like to visit.
 */

//• Store the locations in a array. Make sure the array is not in alphabetical order.

let Places = ["New York", "Paris", "London", "Sidney", "Maple"];

//• Print your array in its original order.

console.log("Original Order");
for (let i = 0; i < Places.length; i++) {
  console.log(Places[i]);
}

//• Print your array in alphabetical order without modifying the actual list.

console.log("\nAlphabetical Order");
let alphabeticalOrder = Array.from(Places);
alphabeticalOrder.sort();
for (let i = 0; i < alphabeticalOrder.length; i++) {
  console.log(alphabeticalOrder[i]);
}

//• Show that your array is still in its original order by printing it.

console.log("\nOriginal Order");
for (let i = 0; i < Places.length; i++) {
  console.log(Places[i]);
}

//• Print your array in reverse alphabetical order without changing the order of the original list.

console.log("\nReverse Alphabetical Order");
let reverseOrder = Array.from(alphabeticalOrder);
reverseOrder.reverse();
for (let i = 0; i < reverseOrder.length; i++) {
  console.log(reverseOrder[i]);
}

//• Show that your array is still in its original order by printing it again.

console.log("\nOriginal Order");
for (let i = 0; i < Places.length; i++) {
  console.log(Places[i]);
}

//• Reverse the order of your list. Print the array to show that its order has changed.

console.log("\nReverse Original Order");
Places.reverse();
for (let i = 0; i < Places.length; i++) {
  console.log(Places[i]);
}

//• Reverse the order of your list again. Print the list to show it’s back to its original order.

console.log("\nReverse Original Order Again");
Places.reverse();
for (let i = 0; i < Places.length; i++) {
  console.log(Places[i]);
}

//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

console.log("\nAlphabetical Original Order");
Places.sort();
for (let i = 0; i < Places.length; i++) {
  console.log(Places[i]);
}

//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

console.log("\nReverse Alphabetical Original Order");
Places.reverse();
for (let i = 0; i < Places.length; i++) {
  console.log(Places[i]);
}
