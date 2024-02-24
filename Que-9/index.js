const { v4: uuidv4, v1: uuidv1 } = require('uuid');

// Generate a random UUID (v4)
const randomUUID = uuidv4();
console.log('Random UUID (v4):', randomUUID);

// Generate a time-based UUID (v1)
const timeUUID = uuidv1();
console.log('Time-based UUID (v1):', timeUUID);
