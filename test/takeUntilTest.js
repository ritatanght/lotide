const assert = require("chai").assert;
const takeUntil = require("../takeUntil");

describe("takeUntil function", () => {
  const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];

  const data2 = [
    "I've",
    "been",
    "to",
    "Hollywood",
    ",",
    "I've",
    "been",
    "to",
    "Redwood",
  ];
  it("returns the array up to -1 (excluding)", () => {
    const results1 = takeUntil(data1, (x) => x < 0);
    assert.deepEqual(results1, [1, 2, 5, 7, 2]);
  });
  it("returns the array up to ',' ", () => {
    const results2 = takeUntil(data2, (x) => x === ",");

    assert.deepEqual(results2, ["I've", "been", "to", "Hollywood"]);
  });
  it("returns to original array when none of the elements meet the condition", () => {
    const results3 = takeUntil(data1, (x) => x > 10);
    assert.deepEqual(results3, [1, 2, 5, 7, 2, -1, 2, 4, 5]);
  });
});
