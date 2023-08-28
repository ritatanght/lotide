const assertEqual = require("../assertEqual");
const eqObjects = require("../eqObjects");


const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
};

assertEqual(
  eqObjects(multiColorShirtObject, anotherMultiColorShirtObject),
  true
);

const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};
assertEqual(
  eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject),
  false
);

assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);

assertEqual(
  eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }),
  false
); // => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
assertEqual(
  eqObjects(
    { a: { x: { y: 0, z: 1 } }, b: 2 },
    { a: { x: { y: 0, z: 1 } }, b: 2 }
  ),
  true
);
assertEqual(
  eqObjects(
    { a: { x: { y: 2, z: 1 } }, b: 2 },
    { a: { x: { y: 0, z: 1 } }, b: 2 }
  ),
  false
);
assertEqual(
  eqObjects(
    { a: { x: { y: 2, z: 1 } }, b: 2, c: { d: 2, e: 1 } },
    { a: { x: { y: 2, z: 1 } }, b: 2, c: { d: 2, e: 1 } }
  ),
  true
);
