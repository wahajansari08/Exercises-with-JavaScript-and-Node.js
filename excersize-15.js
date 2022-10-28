/**
 * Changing Guest List: You just heard that one of your
 * guests can’t make the dinner, so you need to send out
 * a new set of invitations. You’ll have to think of
 * someone else to invite.
 */

//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

let Guests = ["Uncle", "Aunty", "Grand Mother"];
let notComming = Guests[2];

//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

Guests[2] = "Mother in law";

//• Print a second set of invitation messages, one for each person who is still in your list.

for (i = 0; i < Guests.length; i++) {
  console.log(`Hi, ${Guests[i]}. I'd like to invite you for dinner.
    `);
}

// Adding a print statement at the end of program stating the name of the guest who can’t make it.

console.log(`${notComming} can't make the dinner with us.`);
