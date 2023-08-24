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

//The function will return a "slice of the array with elements taken from the beginning, until the callback/predicate returns a truthy value"
const takeUntil = function(array, callback) {
  let newArray = [];
  for (let i in array) {
    // keep slicing the array for each item in the array
    newArray = array.slice(0, i);
    // return the array whenever the callback returns true
    if (callback(array[i])) {
      return newArray;
    }
  }

  // when the callback does not return true, the original array is returned back
  return array;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);
console.log(results1);

console.log("---");

const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
const results2 = takeUntil(data2, (x) => x === ",");
console.log(results2);
const results3 = takeUntil(data1, (x) => x > 10);
console.log(results3);

assertArraysEqual(results1, [1, 2, 5, 7, 2]);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);
assertArraysEqual(results3, [1, 2, 5, 7, 2, -1, 2, 4, 5]);
