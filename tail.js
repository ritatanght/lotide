const tail = function(arr) {
  if (arr.length === 0 || arr.length === 1) return [];
  return arr.slice(1);
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
const words = ["Yo Yo", "Lighthouse", "Labs"];
const wordsTail = tail(words);
assertEqual(words.length, 3);
assertEqual(wordsTail[0], "Lighthouse");
const words2 = [];
assertEqual(tail(words2).length, 0);
const words3 = ["Hello"];
assertEqual(tail(words3).length, 0);
