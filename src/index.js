// module that will be exported when ppl require our module

// require statements give us js objs
var uniqueRandomArray = require('unique-random-array');
var starWarsNames = require('./starwars-names.json');

module.exports = {
  // public API points:
  all: starWarsNames,
  random: uniqueRandomArray(starWarsNames)
};
