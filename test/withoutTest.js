const assert = require("chai").assert;
const without = require("../without");

describe("without function", () => {
  it("returns [2, 3] when passed [1, 2, 3], [1]", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });

  it('returns ["1", "2"] when passed ["1", "2", "3"], [1, 2, "3"]', () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });

  it('returns ["a", "def"] when passed ["a", "b", "c", "def"], ["c", "b"]', () => {
    assert.deepEqual(without(["a", "b", "c", "def"], ["c", "b"]), ["a", "def"]);
  });

  it('returns [4, "5"] when passed [4, "d", "abc", "5", 8], ["d", "abc", 8]', () => {
    assert.deepEqual(without([4, "d", "abc", "5", 8], ["d", "abc", 8]), [4, "5"]);
  });

  it('returns["lighthouse"] when passed ["hello", "world", "lighthouse"]', () => {
    const words = ["hello", "world", "lighthouse"];
    assert.deepEqual(without(words, ["lighthouse"]),["hello", "world"]);
    // Make sure the original array was not altered by the without function
    assert.deepEqual(words, ["hello", "world", "lighthouse"]);

  });
});


