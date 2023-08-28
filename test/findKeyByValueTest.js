const assertEqual = require("../assertEqual");
const findKeyByValue = require("../findKeyByValue");
// Test code
const bestTVShowsByGenre = {
  "sci_fi": "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const fruitByColor = {
  red: "apple",
  orange: "orange",
  yellow: "banana",
  green: "lime",
  blue: "blueberry",
  purple: "grape",
};

assertEqual(findKeyByValue(fruitByColor, "apple"), "red");
assertEqual(findKeyByValue(fruitByColor, "banana"), "yellow");
assertEqual(findKeyByValue(fruitByColor, "grape"), "purple");
assertEqual(findKeyByValue(fruitByColor, "coconut"), undefined);
