"use strict";
exports.__esModule = true;
var student_1 = require("./student");
var bar = new student_1.Student("Bar", "Bam", 34);
console.log(bar.sayHi());
console.log("Your lucky Number today : #", student_1.MAGIC_NUMBER);
console.log("Day Advice : ", student_1.getMyQuote());
