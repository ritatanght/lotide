//The function will return a "slice of the array with elements taken from the beginning, until the callback/predicate returns a truthy value"
const takeUntil = (array, callback) => {
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

module.exports = takeUntil;
