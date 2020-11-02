// import { Student,MAGIC_NUMBER, getMyQuote } from './student';

import * as obj from './student';

let bar = new obj.Student("Bar", "Bam", 34);
console.log(bar.sayHi());
// console.log("Your lucky Number today : #", obj.MAGIC_NUMBER);
console.log("Day Advice : ", obj.getMyQuote());