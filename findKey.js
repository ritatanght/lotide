//scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
const findKey = (obj, callback) => {
  for (let item in obj) {
    if (callback(obj[item])) {
      return item;
    }
  }
};

module.exports = findKey;
