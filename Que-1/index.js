//first import the calcultor module 
const calculator = require('./calculator')

const add = calculator.add(20, 10);
const subtract = calculator.sub(20, 10);
const multi = calculator.multi(20, 10);
const div = calculator.div(20, 10);

//using the methods from the calculator module
console.log("Addition: ",add);
console.log("Subtraction : ",subtract);
console.log("Multiplication :",multi);
console.log("Division : ",div);