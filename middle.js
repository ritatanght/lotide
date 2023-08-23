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

// middle function will take in an array and return the middle-most element(s) of the given array.
const middle = (array) => {
  if (array.length < 3) {
    return [];
  }
  let middleIndex =
    array.length % 2 === 0
      ? array.length / 2 - 1
      : Math.floor(array.length / 2);
  //For arrays with an even number of elements, return an array containing the two elements in the middle
  if (array.length % 2 === 0) {
    return array.slice(middleIndex, middleIndex + 2);
  } else {
    //For arrays with odd number of elements, return an array containing a single middle element
    return array.slice(middleIndex, middleIndex + 1);
  }
};

//Test code
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
