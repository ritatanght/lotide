const assert = require("chai").assert;
const eqObjects = require("../eqObjects");

describe("eqObjects function", () => {
  it("returns true when two objects have the same keys and values", () => {
    const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
    const anotherMultiColorShirtObject = {
      size: "medium",
      colors: ["red", "blue"],
    };
    assert.isTrue(
      eqObjects(multiColorShirtObject, anotherMultiColorShirtObject)
    );
  });
  it("returns false when two objects have diff keys / values", () => {
    const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };

    const longSleeveMultiColorShirtObject = {
      size: "medium",
      colors: ["red", "blue"],
      sleeveLength: "long",
    };
    assert.isFalse(
      eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject)
    );
  });
  it("returns true when two objects have same keys and values in different order", () => {
    assert.isTrue(eqObjects({ a: { z: 1 }, b: 2 }, { b: 2, a: { z: 1 } }));
  });
  it("returns false when two objects have different nested objects", () => {
    assert.isFalse(
      eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })
    );
  });
  it("returns false when two objects have values", () => {
    assert.isFalse(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }));
  });
  it("returns true when two objects have the same nested objects", () => {
    assert.isTrue(
      eqObjects(
        { a: { x: { y: 0, z: 1 } }, b: 2 },
        { a: { x: { y: 0, z: 1 } }, b: 2 }
      )
    );
  });
  it("returns false when two objects have the diff nested objects", () => {
    assert.isFalse(
      eqObjects(
        { a: { x: { y: 2, z: 1 } }, b: 2 },
        { a: { x: { y: 0, z: 1 } }, b: 2 }
      )
    );
  });
  it("returns true when two objects have the same nested objects", () => {
    assert.isTrue(
      eqObjects(
        { a: { x: { y: 2, z: 1 } }, b: 2, c: { d: 2, e: 1 } },
        { a: { x: { y: 2, z: 1 } }, b: 2, c: { d: 2, e: 1 } }
      )
    );
  });
});
