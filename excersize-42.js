/**
 * Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
 */

let magicians = ["Jay Marshall", "Max Maven", "Masked Magician"];

function show_magicians() {
  function make_great() {
    greatMagicians = Array.from(magicians);
    for (let i = 0; i < greatMagicians.length; i++) {
      console.log(greatMagicians[i] + " the great");
    }
  }
  make_great();
}
show_magicians();
