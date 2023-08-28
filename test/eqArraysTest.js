const assert = require("chai").assert;
const eqArrays = require("../eqArrays");

describe("eqArrays function", () => {
  it("returns true for two arrays with same number content", () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });
  it("returns false for two arrays with diff number content", () => {
    assert.isFalse(eqArrays([1, 2, 3], [3, 2, 1]));
  });
  it("returns true for two arrays with same string content", () => {
    assert.isTrue(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
  });
  it("returns false for two arrays with diff number content", () => {
    assert.isFalse(eqArrays(["1", "2", "3"], ["1", "3", "5"]));
  });
  it("returns true for two nested arrays with same content", () => {
    assert.isTrue(eqArrays([[2, 3], [4]], [[2, 3], [4]]));
  });
  it("returns false for two nested arrays with diff nested content", () => {
    assert.isFalse(eqArrays([[2, 3], [4]], [[2, 3],[4, 5]]));
  });
  it("returns false for two nested arrays with diff nested content", () => {
    assert.isFalse(eqArrays([[2, 3], [4]], [[2, 3], 4]));
  });
});