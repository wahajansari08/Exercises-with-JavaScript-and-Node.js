/**
 * Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
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

  for (let i = 0; i < magicians.length; i++) {
    console.log(magicians[i]);
  }
}
show_magicians();
