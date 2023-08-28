const countLetters = (sentence) => {
  // remove in-between spaces in the sentence
  let noSpaces = sentence.split(" ").join("");
  const result = {};
  for (let char of noSpaces) {
    if (char) {
      result[char] = result[char] + 1 || 1;
    }
  }
  return result;
};

module.exports = countLetters;
