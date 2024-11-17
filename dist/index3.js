"use strict";
/* <=== function signature ======> */
function addTwoNumbers1(numOne, numTwo) {
    return numOne + numTwo;
}
function multiplyTwoNumbers1(numOne, numTwo) {
    return numOne * numTwo;
}
function squareTwoNumbers1(numOne) {
    return numOne * numOne;
}
function jointTwoNumbers(numOne, numTwo) {
    return `${numOne} + ${numTwo}`;
}
let calcs = [];
calcs.push(addTwoNumbers1);
calcs.push(multiplyTwoNumbers1);
calcs.push(squareTwoNumbers1); // as long as this returns number match function signature also it can have more args
const shapeOne = {
    name: "Square",
    calcArea: (length) => length * length,
};
const shapeTwo = {
    name: "Circle",
    calcArea: (radius) => Math.PI * radius * radius,
};
const shapeThree = {
    name: "Rectangle",
    calcArea: (length, width) => length * width,
};
