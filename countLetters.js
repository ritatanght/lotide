const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const result1 = countLetters("lighthouse in the house");
assertEqual(result1["h"], 4);
assertEqual(result1["e"], 3);
assertEqual(result1["i"], 2);
