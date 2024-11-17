/* EXTENDING TYPE ALIASES */

type Person1 = {
	id: string | number;
	firstName: string;
};

const personOne: Person1 = {
	id: 1,
	firstName: "John",
};

type userNewType = Person1 & {
	email: string;
};

const personTwo = {
	id: 2,
	firstName: "Jane",
	email: "jane@example.com",
};

const personThree = {
	email: "jane@example.com",
};

function printUser(user: userNewType) {
	console.log(`User: ${user.firstName}, Email: ${user.email}, ID: ${user.id}`);
}

// printUser(personOne)  missing email
printUser(personTwo);
// printUser(personThree);  it has only email property
