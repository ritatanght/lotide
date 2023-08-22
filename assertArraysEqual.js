const assertArraysEqual = function (array1, array2) {
  // check if two arrays of the same length
  if (array1.length !== array2.length) {
    console.log("❌❌Assertion Failed: the arrays are of different length");
    return;
  }
  console.log("array1:", array1, "array2:", array2);
  // iterate through each array
  for (let i = 0; i < array1.length; i++) {
    // compare the values from both array
    // log 'assertion failed' the values being compared when a mismtach is found
    if (array1[i] !== array2[i]) {
      console.log(`❌❌Assertion Failed: ${array1[i]} !== ${array2[i]}`);
      return;
    }
  }
  // log 'assertion passed' as two arrays are the same when it gets to this point
  console.log("✅✅Assertion Passed");
  return;
};

// Test code
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
