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

module.exports = flatten;
