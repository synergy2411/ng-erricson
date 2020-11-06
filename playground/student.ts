// Importing and exporting Modules
import { Person } from './person';

export class Student{
    // private firstName : string;
    // public lastName : string;
    // protected age : number;
    readonly email : string = "abc@test.com"

    // constructor(private firstName: string, 
    //             public lastName : string, 
    //             protected age : number){
    //     // this.firstName = firstName;
    //     // this.lastName = lastName;
    //     // this.age = age;
    // }

    constructor(private myObj : Person){}

    sayHi() : string{
        return `Hello ${this.myObj.firstName} ${this.myObj.lastName}, 
        You are ${this.myObj.age} years old!`;
    }
}
let obj : Person = {
    firstName : "Foo",
    lastName : "Bam",
    age : new Date("Dec 21, 1984")
}
// let foo = new Student("Foo", "Bar", 32);
let fooBam = new Student(obj);
console.log(fooBam.sayHi());




// const MAGIC_NUMBER = Math.round(Math.random() * 10);

// export function getMyQuote(){
//     return "Run 1000 mtr today!"
// }



// let & const 

// let str : string;
// let num : number;
// let age : Date;