const assertObjectsEqual = require("../assertObjectsEqual");

const obj1 = { a: "1", b: 2 };
const obj2 = { b: 2, a: "1" };
assertObjectsEqual(obj1, obj2);
