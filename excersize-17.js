/**
 * Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
 */

//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

let Guests = [
  "Sister",
  "Uncle",
  "Grand father",
  "Aunty",
  "Mother in law",
  "Brother in law",
];

for (i = 0; i < Guests.length; i++) {
  console.log(
    `Hi, ${Guests[i]}. I can invite only two people for dinner due to limited space, I'm sorry.`
  );
}

//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

//Removing 1 out of 6
console.log(
  `Hi, ${Guests[5]} I can't invite you in dinner due limited space, sorry.`
);
Guests.pop();

//Removing 1 out of 5

console.log(
  `Hi, ${Guests[4]} I can't invite you in dinner due limited space, sorry.`
);
Guests.pop();

//Removing 1 out of 4

console.log(
  `Hi, ${Guests[3]} I can't invite you in dinner due limited space, sorry.`
);
Guests.pop();

//Removing 1 out of 3

console.log(
  `Hi, ${Guests[2]} I can't invite you in dinner due limited space, sorry.`
);
Guests.pop();

//• Print a message to each of the two people still on your list, letting them know they’re still invited.

for (i = 0; i < Guests.length; i++) {
  console.log(`Hi, ${Guests[i]}. You're still invited.`);
}

//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

Guests.pop();
Guests.pop();

console.log(Guests);
