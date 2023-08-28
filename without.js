const without = (source, itemsToRemove) => {
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

module.exports = without;
