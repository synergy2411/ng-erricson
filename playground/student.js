"use strict";
exports.__esModule = true;
exports.getMyQuote = exports.MAGIC_NUMBER = exports.Student = void 0;
// Importing and exporting Modules
var Student = /** @class */ (function () {
    function Student(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        // private firstName : string;
        // public lastName : string;
        // protected age : number;
        this.email = "abc@test.com";
        // this.firstName = firstName;
        // this.lastName = lastName;
        // this.age = age;
    }
    Student.prototype.sayHi = function () {
        return "Hello " + this.firstName + " " + this.lastName + ", \n        You are " + this.age + " years old!";
    };
    return Student;
}());
exports.Student = Student;
exports.MAGIC_NUMBER = Math.round(Math.random() * 10);
function getMyQuote() {
    return "Run 1000 mtr today!";
}
exports.getMyQuote = getMyQuote;
// let foo = new Student("Foo", "Bar", 32);
// console.log(foo.sayHi());
// let & const 
