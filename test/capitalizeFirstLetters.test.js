// test/capitalizeFirstLetters.test.js
const assert = require("assert");
const capitalizeFirstLetters = require("../capitalizeFirstLetters");

// give the test suite a label using describe
describe("capitalizeFirstLetters", () => {
  // give the test a label using it
  it("is a function accepting one argument", () => {
    assert.strictEqual(typeof capitalizeFirstLetters, "function");
    assert.strictEqual(capitalizeFirstLetters.length, 1);
  });

  it("transforms first letter of each word correctly", () => {
    assert.strictEqual(
      capitalizeFirstLetters("i love pizzas with bacon"),
      "I Love Pizzas With Bacon"
    );
  });

  it("works with 1 word", () => {
    assert.strictEqual(capitalizeFirstLetters("sangoku"), "Sangoku");
  });

  it("works with an empty string", () => {
    assert.strictEqual(capitalizeFirstLetters(""), "");
  });
});
