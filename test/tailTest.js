const assert = require("chai").assert;
const tail = require("../tail");

describe("tail function", () => {
  it('returns "Lighthouse" for["Yo Yo", "Lighthouse", "Labs"]', () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    const wordsTail = tail(words);
    assert.equal(words.length, 3);
    assert.equal(wordsTail.length, 2);
    assert.equal(wordsTail[0], "Lighthouse");
  });
  it('returns "Lighthouse" for["Yo Yo", "Lighthouse", "Labs"]', () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    const wordsTail = tail(words);
    assert.equal(words.length, 3);
    assert.equal(wordsTail.length, 2);
    assert.equal(wordsTail[0], "Lighthouse");
  });
  it("returns [] for an empty array passed", () => {
    const words = [];
    const result = tail(words);
    assert.equal(result.length, 0);
    assert.deepEqual(result, []);
  });
  it('returns [] for single item array ["Hello"]', () => {
    const words = ["Hello"];
    const result = tail(words);
    assert.equal(result.length, 0);
    assert.deepEqual(result, []);
  });
});
