const flatten = (array) => {
  let flatArray = [];
  for (let item of array) {
    // check if the current item is an array
    if (Array.isArray(item)) {
      // if it is, pass that array to flatten() to flatten it
      flatArray = flatArray.concat(flatten(item));
    } else {
      // if it is not, push the item into the returning array
      flatArray.push(item);
    }
  }
  // return the flattened array
  return flatArray;
};

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

// test code
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(
  flatten([
    1,
    2,
    [
      [3, 4],
      [5, [6]],
    ],
  ]),
  [1, 2, 3, 4, 5, 6]
);
assertArraysEqual(
  flatten([
    "a",
    "b",
    [
      ["c", "de"],
      ["f", ["gh"]],
    ],
  ]),
  ["a", "b", "c", "de", "f", "gh"]
);
