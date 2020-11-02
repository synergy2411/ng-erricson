// console.log("Hello NodeJS");
// node node-basics.js

// ES6/ES2015 New feature

// Arrow function () => good for online functions which return something
// don't have their own 'this' keyword
// can't be called with 'new' operator
// don't have 'arguments' keyword

// let numbers = [1, 2, 3, 4, 5];
// ES5
// function doubleValue(value, index, array){
//     return value * 2;
// }
// let doubleArray = numbers.map(doubleValue)

// ES6 - Arrow Function
// let doubleArray = numbers.map(value => value * 2);

// console.log(doubleArray);

// Block scoping - (let & const)
//  - restricts the scope of variables within nearest curly braces

// var - functions

// function display(arr){
//     if(arr.length > 2){
//         let LOAD = "LOADING"
//         console.log(FLASH);             //ERROR
//     }else{
//         let FLASH = "FLASHING"
//     }
// }

// display([1,2,3]);

// const USER = "Foo Bar";
// USER = "BAS BAZ";

// const USER = {
//     firstName : "Foo",
//     lastName : "Bar"
// }
// USER = {
//     firstName : "Baz";
// }

// USER.firstName = "BAZ";

// console.log(USER);          // ?

// Objects, functions, Arrays - reference types

// Destructuring - Array, Object

// let numbers = [2,4,6,8,10];

// let [num1, num2, , num4, num5, num6] = numbers;

// console.log(num4);

// console.log(num1);
// console.log(num6);

// let drawing = {
//   drawText: (text) => console.log("Drawing sample " + text),
//   drawCircle: (r) => console.log(Math.PI * r * r),
//   drawRect: (w, l) => console.log(2 * w * l),
// };
// // drawing.drawText("Hello world.");
// const { drawRect: dr, drawText: dt, drawCircle: dc } = drawing;
// // drawCircle(4);
// dt("Hello ES6");

// let user = {
//   name: "Foo Bar",
//   address: {
//     city: "Bengaluru",
//     street: "201, Main Road",
//   },
//   friends: ["F1", "f2", "f3"],
// };

// let {
//   name: fullName,
//   address: { city: ct, street: st },
//   friends: [f1, f2, f3],
// } = user;


// console.log(ct, f2, fullName);

// Template String - "", '', `` (back tick)
//  - write multiline string without (+)
//  - embed the variables within strings without (+)

// let username = "Foo Bar";
// let age = 32;

// let str = `Hello ${username}, 
// You are ${age} years old!

// `;

// console.log(str);






// Rest & Spread Operator (...)
// - Rest/Gather : takes the individual element and returns the collection
// - Spread : takes the collection and returns the individual element

// Rest Operator : has to be last argument in function parameter list
// function fn(name, ...args){
//     console.log(args[1]);           // ?
// }

// fn("Foo")
// fn("Foo", 32)               
// fn("Foo", 32, true)


// Spread
// let arr = [3,4,5];
// let arr2 = [1,2, ...arr ,6,7,8];
// console.log(arr2);              // [1,2,[3,4,5],6,7,8] / [1,2,3,4,5,6,7,8]
// console.log(arr2[2]);          // 3















// Classes

// class Student{
//     constructor(email, age){
//         this.email = email;
//         this.age = age;
//     }

//     sayHello(){
//         return `Hello, ${this.email}, You are ${this.age} years old!`;
//     }
// }

// let foo = new Student("test@test.com", true);
// console.log(foo.sayHello());



// let x = "Some string";
// console.log(typeof x);
// x = 32;
// console.log(typeof x);
// x = true;
// console.log(typeof x);









// Module
// Type System
// Decorator / Annotation
