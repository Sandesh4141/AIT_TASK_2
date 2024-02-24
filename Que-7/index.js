const geo = require('./geometry');

const circle = geo.circleArea(10);
const circircle = geo.circleCircumference(330);
const areaRect = geo.rectangleArea(10,30);
const rectPeri =geo.rectanglePerimeter(100, 399);
const sqAread = geo.squareArea(10)
const sqPeri = geo.squarePerimeter(30);

console.log("Area of circle: ",circle);
console.log("Circumference of circle",circircle);
console.log("Area of Rectagnle: ",areaRect);
console.log("Perimtere of Rectnagel",rectPeri);
console.log("Area of Square: ",sqAread);
console.log("Perimeter of square: ",sqPeri);

