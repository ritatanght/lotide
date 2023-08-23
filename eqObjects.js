const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  // check if two arrays of the same length
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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  // return false when both objects do not have the same number of keys
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;
  for (let key in object1) {
    console.log("comparing ", object1[key], object2[key]);
    // when both values are array, compare with eqArrays()
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else {
      // otherwise compare the primitive values and return false in case of mismatch
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
};

assertEqual(
  eqObjects(multiColorShirtObject, anotherMultiColorShirtObject),
  true
);

const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};
assertEqual(
  eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject),
  false
);
