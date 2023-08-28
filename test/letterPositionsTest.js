const assertArraysEqual = require("../assertArraysEqual");
const letterPositions = require("../letterPositions");

const result1 = letterPositions("hello");
assertArraysEqual(result1["h"], [0]);
assertArraysEqual(result1["e"], [1]);
assertArraysEqual(result1["l"], [2, 3]);
assertArraysEqual(result1["o"], [4]);

const result2 = letterPositions("lighthouse in the house");
assertArraysEqual(result2["h"], [3, 5, 15, 18]);
assertArraysEqual(result2["e"], [9, 16, 22]);
assertArraysEqual(result2["n"], [12]);
