const assert = require("chai").assert;
const findKeyByValue = require("../findKeyByValue");

describe("findKeyByValue function", () => {
  it("returns correct key when an existing value is passed", () => {
    const bestTVShowsByGenre = {
      'sci_fi': "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire",
    };
    assert.equal(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it("returns undefined when a non-existing value is passed", () => {
    const bestTVShowsByGenre = {
      'sci_fi': "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire",
    };
    assert.equal(
      findKeyByValue(bestTVShowsByGenre, "That '70s Show"),
      undefined
    );
  });
  it("returns undefined  when a non-existing value is passed", () => {
    const fruitByColor = {
      red: "apple",
      orange: "orange",
      yellow: "banana",
      green: "lime",
      blue: "blueberry",
      purple: "grape",
    };
    assert.equal(findKeyByValue(fruitByColor, "apple"), "red");
  });
  it("returns undefined when a non-existing value is passed", () => {
    const fruitByColor = {
      red: "apple",
      orange: "orange",
      yellow: "banana",
      green: "lime",
      blue: "blueberry",
      purple: "grape",
    };
    assert.equal(findKeyByValue(fruitByColor, "coconut"), undefined);
  });
});

