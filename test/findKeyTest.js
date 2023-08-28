const assert = require("chai").assert;
const findKey = require("../findKey");
describe("findKey function", () => {
  it("returns 'noma' when a callback of star === 2 passed", () => {
    assert.equal(
      findKey(
        {
          "Blue Hill": { stars: 1 },
          Akaleri: { stars: 3 },
          noma: { stars: 2 },
          elBulli: { stars: 3 },
          Ora: { stars: 2 },
          Akelarre: { stars: 3 },
        },
        (x) => x.stars === 2
      ),
      "noma"
    );
  });

  it("returns 'Akaleri' when a callback of star === 3 passed", () => {
    assert.equal(
      findKey(
        {
          "Blue Hill": { stars: 1 },
          Akaleri: { stars: 3 },
          noma: { stars: 2 },
          elBulli: { stars: 3 },
          Ora: { stars: 2 },
          Akelarre: { stars: 3 },
        },
        (x) => x.stars === 3
      ),
      "Akaleri"
    );
  });
  it("returns undefined when a callback of star === 4 passed", () => {
    assert.isUndefined(
      findKey(
        {
          "Blue Hill": { stars: 1 },
          Akaleri: { stars: 3 },
          noma: { stars: 2 },
          elBulli: { stars: 3 },
          Ora: { stars: 2 },
          Akelarre: { stars: 3 },
        },
        (x) => x.stars === 4
      )
    );
  });
});
