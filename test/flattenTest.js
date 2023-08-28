const assert = require("chai").assert;
const flatten = require("../flatten");

describe("flatten function", () => {
  it("returns [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
  it("returns [1, 2, 3, 4, 5, 6] for [ 1, 2, [[3, 4],[5, [6]],] ])", () => {
    assert.deepEqual(flatten([ 1, 2, [[3, 4],[5, [6]],] ]), [1, 2, 3, 4, 5, 6]);
  });
  it('returns ["a", "b", "c", "de", "f", "gh"] for ["a","b",[["c", "de"],["f", ["gh"]]]]', () => {
    assert.deepEqual(flatten(["a","b",[["c", "de"],["f", ["gh"]]]]), ["a", "b", "c", "de", "f", "gh"]);
  });
});

