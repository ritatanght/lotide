const assertArraysEqual = require("../assertArraysEqual");
const without = require("../without");

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without(["a", "b", "c", "def"], ["c", "b"]), ["a", "def"]);
assertArraysEqual(without([4, "d", "abc", "5", 8], ["d", "abc", 8]), [4, "5"]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
