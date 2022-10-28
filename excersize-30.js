/**Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
 */

let users = ["Admin", "Ali", "Wahaj", "Ahmed", "Sami"];

//• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

if (users.includes("Admin")) {
  console.log("Hi admin, would you like to see a status report?");
} else if (users.includes("Ali")) {
  console.log("Hi Ali, Thank you for logging in again");
} else if (users.includes("Wahaj")) {
  console.log("Hi Wahaj, Thank you for logging in again");
} else if (users.includes("Ahmed")) {
  console.log("Hi Ahmed, Thank you for logging in again");
} else if (users.includes("Sami")) {
  console.log("Hi Sami, Thank you for logging in again");
}

//• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
