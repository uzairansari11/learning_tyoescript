"use strict";
/* EXTENDING TYPE ALIASES */
const personOne = {
    id: 1,
    firstName: "John",
};
const personTwo = {
    id: 2,
    firstName: "Jane",
    email: "jane@example.com",
};
const personThree = {
    email: "jane@example.com",
};
function printUser(user) {
    console.log(`User: ${user.firstName}, Email: ${user.email}, ID: ${user.id}`);
}
// printUser(personOne)  missing email
printUser(personTwo);
// printUser(personThree);  it has only email property
