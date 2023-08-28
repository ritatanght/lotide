//const assertArraysEqual = require("../assertArraysEqual");
const assert = require("chai").assert;
const map = require("../map");

describe("map function", () => {
  const words = ["ground", "control", "to", "major", "tom"];
  it("returns the first letter of each word in the array", () => {
    const results1 = map(words, (word) => word[0]);

    assert.deepEqual(results1, ["g", "c", "t", "m", "t"]);
  });
  it("returns the length of each word in the array", () => {
    const results2 = map(words, (word) => word.length);
    assert.deepEqual(results2, [6, 7, 2, 5, 3]);
  });
  it("returns the num times 2 for each number in the array", () => {
    const numbers = [1, 2, 3, 4, 5];
    const results3 = map(numbers, (num) => num * 2);
    assert.deepEqual(results3, [2, 4, 6, 8, 10]);
  });
});
