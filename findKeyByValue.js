const findKeyByValue = (obj, value) => {
  for (let genre in obj) {
    if (obj[genre] === value) {
      return genre;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;
