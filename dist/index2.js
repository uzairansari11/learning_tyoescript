"use strict";
/* <=============== union ===========================> */
let someId;
someId = 123;
someId = "abc";
let email = null;
email = "john.doe@example.com";
email = null;
let anotherId;
anotherId = "HGJJDSHDSSD122-23232-DKSD";
anotherId = 1234567890;
function swapId(id) {
    if (typeof id === "string") {
        return parseInt(id);
    }
    return id.toString();
}
const id2 = swapId(2);
const id3 = swapId("yzhjs");
console.log(id2, id3); // 2, 'yzhjs'
function printUserInfo(user) {
    if (user.type === "user") {
        console.log(`User: ${user.name}, Email: ${user.email}, ID: ${user.id}`);
    }
    else {
        console.log(`Person: ${user.firstname}, Age: ${user.age}, ID: ${user.id}`);
    }
}
const something = {
    quantity: 10,
};
function printQuantity(item) {
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
