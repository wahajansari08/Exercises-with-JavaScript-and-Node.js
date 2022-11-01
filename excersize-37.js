/**
 * Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love JavaScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
 */

function make_shirt(size = "Large", text = "I Love JavaScript") {
  console.log(`The shirt size is ${size} and the text is "${text}"`);
}

make_shirt();
make_shirt("Small", "I Love Blockchain Technology");
