const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = (sentence) => {
  let noSpaces = sentence.split(" ").join("");
  const result = {};
  for (let char of noSpaces) {
    if (char) {
      console.log(char);
      result[char] = result[char] + 1 || 1;
    }
  }
  return result;
};

const result1 = countLetters("lighthouse in the house");
assertEqual(result1["h"], 4);
assertEqual(result1["e"], 3);
assertEqual(result1["i"], 2);
