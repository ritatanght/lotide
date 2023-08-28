const assert = require("chai").assert;
const countLetters = require("../countLetters");

describe("countLetters", () => {
  it('returns an object that has the count for each letter in the sentence for "lighthouse in the house"', () => {
    const result1 = countLetters("lighthouse in the house");
    assert.isObject(result1);
    assert.equal(result1["h"], 4);
    assert.equal(result1["e"], 3);
    assert.equal(result1["i"], 2);
  });
});
