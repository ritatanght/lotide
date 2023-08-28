const assert = require("chai").assert;
const letterPositions = require("../letterPositions");

describe("letterPositions function", () => {
  it("returns an object with correct position for each letter in 'hello' ", () => {
    const result1 = letterPositions("hello");
    assert.deepEqual(result1, { h: [0], e: [1], l: [2, 3], o: [4] });
  });
  it("returns an object with correct position for each letter in 'lighthouse in the house'", () => {
    const result2 = letterPositions("lighthouse in the house");
    assert.deepEqual(result2["h"], [3, 5, 15, 18]);
    assert.deepEqual(result2["e"], [9, 16, 22]);
    assert.deepEqual(result2["n"], [12]);
  });
});
