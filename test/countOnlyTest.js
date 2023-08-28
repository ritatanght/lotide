const assert = require("chai").assert;
const countOnly = require("../countOnly");

describe("countOnly function", () => {
  it("returns an object with counts for firstname with true only", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe",
    ];

    const result1 = countOnly(firstNames, {
      Jason: true,
      Karima: true,
      Fang: true,
      Agouhanna: false,
    });
    assert.isObject(result1);
    assert.deepEqual(result1, { Jason: 1, Fang: 2 });
    assert.equal(result1["Karima"], undefined);
    assert.equal(result1["Agouhanna"], undefined);
  });
});
