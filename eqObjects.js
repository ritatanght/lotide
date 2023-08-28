const eqArrays = require("./eqArrays");
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  // return false when both objects do not have the same number of keys
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;
  for (let key in object1) {
    //check if both values are object
    if (typeof object1[key] === "object" && typeof object2[key] === "object") {
      // when both values are array, compare with eqArrays()
      if (
        Array.isArray(object1[key]) &&
        Array.isArray(object2[key]) &&
        !eqArrays(object1[key], object2[key])
      )
        return false;

      // both values are objects but not arrays, call itself
      if (!eqObjects(object1[key], object2[key])) return false;
    } else {
      // otherwise compare the primitive values and return false in case of mismatch
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

module.exports = eqObjects;
