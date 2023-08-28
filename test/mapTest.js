const assertArraysEqual = require("../assertArraysEqual");
const map = require("../map");

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, (word) => word[0]);

assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);

const results2 = map(words, (word) => word.length);
assertArraysEqual(results2, [6, 7, 2, 5, 3]);

const numbers = [1, 2, 3, 4, 5];
const results3 = map(numbers, (num) => num * 2);
assertArraysEqual(results3, [2, 4, 6, 8, 10]);
