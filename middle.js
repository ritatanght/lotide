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



module.exports = middle;