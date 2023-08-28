// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = (allItems, itemsToCount) => {
  const results = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      // add 1 to the existing number if it exists, otherwise set it to 1
      results[item] = results[item] + 1 || 1;
    }
  }
  return results;
};

module.exports = countOnly;
