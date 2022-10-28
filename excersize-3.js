/*
Name Cases: Store a person’s name in a variable, 
and then print that person’s name in lowercase, 
uppercase, and titlecase.
*/

let name = "Wahaj ahmed ansari";

// console.log(name.toUpperCase());
// console.log(name.toLowerCase());

function toTitleCase(name) {
  let words = name.toLowerCase().split(" ");
  words.forEach((word, i) => {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  });
  return words.join(" ");
}
// let uppercase = name.toUpperCase();
// let lowercase = name.toLowerCase();
// let titlecase = toTitleCase();
console.log(toTitleCase(name));
