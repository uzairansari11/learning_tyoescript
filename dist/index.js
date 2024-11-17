"use strict";
console.log("hello world bro!!! ");
console.log("hello mia!!!");
/* Array */
let users;
users = ["John", "Mia", "David"];
let ages;
ages = [14, 45, 32];
// users.push(13)  error: because trying to push number inside array of strings
/* Objects */
let user = {
    firstName: "John",
    age: 21,
    id: 1,
    // isFictional:true
};
// user.firstName=24 error : Type 'number' is not assignable to type 'string'.
let person = {
    name: "John",
    age: 21,
    id: 1,
};
// person.address = 'mumbai'
// error:(Property 'address') does not exist on type '{ name: string; age: number; id: number; }'
/* function */
function addTwoNumbers(a, b) {
    // return true : error because trying to return boolean
    return a + b;
}
addTwoNumbers(2, 3);
/* Two ways to define the type */
const subtractTwoNumbers = (a, b) => {
    return a + b;
};
const newSubtractTwoNumbers = (a, b) => {
    return a - b;
};
function addAllNumbers(...arg) {
    return arg.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}
console.log(addAllNumbers(1, 2, 34, 4));
function formatGreeting(message) {
    return `Hello, ${message}!`;
}
console.log(formatGreeting("World"));
/* Any type */
let age;
age = 25;
age = "twenty five";
age = true;
let title;
title = {
    name: "Welcome",
};
title = 4;
/* Tuples */
let personInfo;
personInfo = ["John", 25, true];
let x = personInfo[0];
let hsla;
hsla = [10, "20", "20", 0.2];
/* Named tuples */
let userInfo;
userInfo = ["John", 23];
const authorOne = {
    name: "John Doe",
    age: 40,
    avatar: "https://example.com/john-doe.jpg",
    // bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", Object literal may only specify known properties, and 'bio' does not exist in type 'Author'.
};
const postOne = {
    title: "My First Post",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    author: authorOne,
    likes: 100,
    created_at: new Date(),
    comments: [
        {
            id: 1,
            author: authorOne,
            content: "Nice post!",
            created_at: new Date(),
        },
        {
            id: 2,
            author: {
                name: "Jane Doe",
                age: 35,
                avatar: "https://example.com/jane-doe.jpg",
            },
            content: "I agree with John!",
            created_at: new Date(),
        },
        //... more comments here...
        // {
        //   id: n,
        //   author: {...},
        //   content: "...",
        //   created_at: new Date(),
        // },
        //... more comments here...
        // {
        //   id: n+1,
    ],
};
console.log("This is post one", postOne);
const arrayOfPosts = (post) => {
    let posts = [];
    posts.push(post);
};
arrayOfPosts(postOne);
function getRandomColor() {
    return [
        Math.floor(Math.random() * 256),
        Math.floor(Math.random() * 256),
        Math.floor(Math.random() * 256),
    ];
}
console.log("Get random color", getRandomColor());
function formatUser(user) {
    console.log(`User: ${user.name}, Score: ${user.score}`);
}
