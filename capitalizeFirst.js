function capitalizeFirst(input) {
  return input.length > 0 ? input[0].toUpperCase() + input.slice(1) : "";
}

module.exports = capitalizeFirst;

// const assert = require("assert");

// function capitalizeFirstLetters(input) {
//   let split = input.split(" ");
//   let mapping = split.map(
//     (word) => word.charAt(0).toUpperCase() + word.slice(1)
//   );
//   let join = mapping.join(" ");
//   return join;
// }

// assert.strictEqual(typeof capitalizeFirstLetters, "function");

// assert.strictEqual(capitalizeFirstLetters.length, 1);

// assert.strictEqual(
//   capitalizeFirstLetters("i love pizzas with bacon"),
//   "I Love Pizzas With Bacon"
// );

// assert.strictEqual(capitalizeFirstLetters("zdsds"), "Zdsds");

// assert.strictEqual(capitalizeFirstLetters(""), "");
