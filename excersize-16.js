/**
 * More Guests: You just found a bigger dinner table,
 * so now more space is available. Think of three more
 * guests to invite to dinner.
 */

//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

let Guests = ["Uncle", "Aunty", "Mother in law"];

//• Add one new guest to the beginning of your array.

Guests.unshift("Sister");

//• Add one new guest to the middle of your array.

Guests.splice(2, 0, "Grand father");

//• Use append() to add one new guest to the end of your list.

Guests.push("Brother in law");

// • Print a new set of invitation messages, one for each person in your list.

for (i = 0; i < Guests.length; i++) {
  console.log(`Hi, ${Guests[i]}. I'd like to invite you for dinner.`);
}

console.log(Guests);
