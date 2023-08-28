# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @rtht/lotide`

**Require it:**

`const _ = require('@rtht/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `head`: retrieves the first element from the array
- `tail`: retrieves every element except the head (first element) of the array
- `middle`: returns the middle-most element(s) of the given array
- `assertEqual`: compares the two values it takes in and console.log an appropriate message to the console depending on a match or not.
- `eqArrays`: takes in two arrays and returns true or false, based on a perfect match.
- `assertArraysEqual`: takes in two arrays and console.log an appropriate message to the console.
- `eqObjects`: takes in two objects and returns true or false, based on a perfect match.
- `assertObjectsEqual`: takes in two objects and console.log an appropriate message to the console.
- `countLetters`: takes in a sentence (as a string) and then return a count of each of the letters in that sentence.
- `countOnly`: returns an object containing counts of everything that the input object listed.
- `flatten`: takes in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.
- `findKey`: scans the object and returns the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
- `findKeyByValue`: scans the object and returns the first key which contains the given value. If no key with that given value is found, then it should return undefined.
- `letterPositions`: returns all the indices in the string where each character is found.
- `map`: returns a new array based on the results of the callback function.
- `takeUntil`: returns a "slice of the array with elements taken from the beginning, until the callback/ predicate returns a truthy value"
- `without`: returns a subset of a given array, removing unwanted elements.
