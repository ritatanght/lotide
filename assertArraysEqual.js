const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(
      `✅✅Assertion Passed: ${JSON.stringify(array1)} === ${JSON.stringify(
        array2
      )}`
    );
  } else {
    console.log(
      `❌❌Assertion Failed: ${JSON.stringify(array1)} !== ${JSON.stringify(
        array2
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

// Test code
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
