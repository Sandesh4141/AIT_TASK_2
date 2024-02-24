
function squareArea(side) {
    return side * side;
}

function squarePerimeter(side) {
    return 4 * side;
}


function rectangleArea(length, width) {
    return length * width;
}

function rectanglePerimeter(length, width) {
    return 2 * (length + width);
}


function circleArea(radius) {
    return Math.PI * radius * radius;
}

// Function to calculate the circumference of a circle
function circleCircumference(radius) {
    return 2 * Math.PI * radius;
}


module.exports = {
    squareArea,
    squarePerimeter,
    rectangleArea,
    rectanglePerimeter,
    circleArea,
    circleCircumference
};
