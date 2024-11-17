/* <=== function signature ======> */

type Calculator = (numOne: number, numTwo: number) => number;

function addTwoNumbers1(numOne: number, numTwo: number) {
	return numOne + numTwo;
}

function multiplyTwoNumbers1(numOne: number, numTwo: number) {
	return numOne * numTwo;
}

function squareTwoNumbers1(numOne: number) {
	return numOne * numOne;
}

function jointTwoNumbers(numOne: number, numTwo: number) {
	return `${numOne} + ${numTwo}`;
}

let calcs: Calculator[] = [];

calcs.push(addTwoNumbers1);
calcs.push(multiplyTwoNumbers1);
calcs.push(squareTwoNumbers1); // as long as this returns number match function signature also it can have more args
// calcs.push(jointTwoNumbers);

/* <================= FUNCTION SIGNATURE ON INTERFACE ===============> */

interface HasArea {
	name: string;
	calcArea: (a: number, b: number) => number;
}

const shapeOne: HasArea = {
	name: "Square",
	calcArea: (length: number) => length * length,
};

const shapeTwo: HasArea = {
	name: "Circle",
	calcArea: (radius: number) => Math.PI * radius * radius,
};

const shapeThree: HasArea = {
	name: "Rectangle",
	calcArea: (length: number, width: number) => length * width,
};
