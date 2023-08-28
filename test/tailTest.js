const assertEqual = require("../assertEqual");
const tail = require("../tail");
// TEST CODE
const words = ["Yo Yo", "Lighthouse", "Labs"];
const wordsTail = tail(words);
assertEqual(words.length, 3);
assertEqual(wordsTail[0], "Lighthouse");
const words2 = [];
assertEqual(tail(words2).length, 0);
const words3 = ["Hello"];
assertEqual(tail(words3).length, 0);
