const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(
      `✅✅Assertion Passed: ${JSON.stringify(actual)} === ${JSON.stringify(
        expected
      )}`
    );
  } else {
    console.log(
      `❌❌Assertion Failed: ${JSON.stringify(actual)} !== ${JSON.stringify(
        expected
      )}`
    );
  }
};

const eqArrays = function(array1, array2) {
  // check if two arrays are of the same length
  if (array1.length !== array2.length) return false;
  // iterate through each array
  for (let i = 0; i < array1.length; i++) {
    // compare the values from both array
    // return result as false whenever a mismatch is found
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  // return the result as true when every element matches
  return true;
};

const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, (word) => word[0]);

assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);

const results2 = map(words, (word) => word.length);
assertArraysEqual(results2, [6, 7, 2, 5, 3]);

const numbers = [1, 2, 3, 4, 5];
const results3 = map(numbers, (num) => num * 2);
assertArraysEqual(results3, [2, 4, 6, 8, 10]);
