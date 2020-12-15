const assert = require("assert");

assert.strictEqual(typeof capitalizeFirstLetters, "function");

assert.strictEqual(capitalizeFirstLetters.length, 1);

assert.strictEqual(
  capitalizeFirstLetters("i love pizza with bacon"),
  "I Love Pizza With Bacon"
);

assert.strictEqual(capitalizeFirstLetters("zdsds"), "Zdsds");

assert.strictEqual(capitalizeFirstLetters(""), "");
