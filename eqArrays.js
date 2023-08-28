const eqArrays = function(array1, array2) {
  // check if two arrays of the same length
  if (array1.length !== array2.length) return false;
  // iterate through each array
  for (let i = 0; i < array1.length; i++) {
    // if both values are array, call the function itself
    if (Array.isArray(array1[i]) && Array.isArray(array2[i])) {
      if (!eqArrays(array1[i], array2[i])) {
        return false;
      }
    } else {
      // compare the values from both array
      // return result as false whenever a mismatch is found
      if (array1[i] !== array2[i]) return false;
    }
  }
  // return the result as true when every element matches
  return true;
};

module.exports = eqArrays;