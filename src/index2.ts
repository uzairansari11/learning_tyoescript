/* <=============== union ===========================> */

let someId: number | string;
someId = 123;
someId = "abc";

let email: string | null = null;
email = "john.doe@example.com";
email = null;

type id = number | string;

let anotherId: id;

anotherId = "HGJJDSHDSSD122-23232-DKSD";
anotherId = 1234567890;

function swapId(id: id): id {
	if (typeof id === "string") {
		return parseInt(id);
	}

	return id.toString();
}

const id2 = swapId(2);
const id3 = swapId("yzhjs");

console.log(id2, id3); // 2, 'yzhjs'

interface User {
	type: "user"; // type guard
	name: string;
	email: string;
	id: id;
}

interface person {
	type: "person"; // type guard
	firstname: string;
	age: number;
	id: id;
}

function printUserInfo(user: User | person): void {
	if (user.type === "user") {
		console.log(`User: ${user.name}, Email: ${user.email}, ID: ${user.id}`);
	} else {
		console.log(`Person: ${user.firstname}, Age: ${user.age}, ID: ${user.id}`);
	}
}

interface hasQuantity {
	quantity: number;
}

const something: hasQuantity = {
	quantity: 10,
};

function printQuantity(item: hasQuantity): void {
	console.log(`Quantity: ${item.quantity}`);
}

const fruit = {
	name: "apple",
	quantity: 5,
};
const vehicle = {
	name: "car",
	model: "Toyota",
	quantity: 10,
	year: 2020,
};

const user2 = {
	type: "user",
	name: "John Doe",
	email: "john.doe@example.com",
	id: "1234567890",
};

printQuantity({ quantity: 3 });
printQuantity(fruit);
printQuantity(vehicle);
// printQuantity(user2);

// printQuantity({ quantity: 10, name: "John Doe" });  we can do this only if we create variable ahead of time and then pass it to the function
