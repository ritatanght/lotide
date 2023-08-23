const without = function (source, itemsToRemove) {
  // returning a new array and not modify the original array that is passed in
  // a new array to store the result
  let itemsRetained = [];
  // iterate through the source array
  // 1st approach
  sourceLoop: for (let item of source) {
    // check to see if each item in the source array is in the itemsToRemove array,
    for (let remove of itemsToRemove) {
      // if it does, skip it
      if (item === remove) {
        continue sourceLoop;
      }
    }
    // if it does not, add it to the itemsRetained array
    itemsRetained.push(item);
  } // end of 1st approach
  /* alternative approach
  for (let item of source) {
    // if it does not, add it to the itemsRetained array
    if (!itemsToRemove.includes(item)) {
      itemsRetained.push(item);
    }
  }
  */
  // return the result
  return itemsRetained;
};

const assertArraysEqual = function (array1, array2) {
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

const eqArrays = function (array1, array2) {
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
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without(["a", "b", "c", "def"], ["c", "b"]), ["a", "def"]);
assertArraysEqual(without([4, "d", "abc", "5", 8], ["d", "abc", 8]), [4, "5"]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
