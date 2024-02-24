const Random = require('random-js').Random;
const random = new Random(); // create a new random engine

// Generate a random integer between min (inclusive) and max (inclusive)
function getRandomInt(min, max) {
    return random.integer(min, max);
}

// Generate a random float between min (inclusive) and max (exclusive)
function getRandomFloat(min, max) {
    return random.real(min, max);
}

// Generate a random boolean value
function getRandomBoolean() {
    return random.bool();
}


console.log(getRandomInt(1, 10)); ///random integer between 1 and 10
console.log(getRandomFloat(0, 1)); // random float between 0 and 1
console.log(getRandomBoolean()); // /random boolean value


