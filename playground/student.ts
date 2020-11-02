// Importing and exporting Modules

export class Student{
    // private firstName : string;
    // public lastName : string;
    // protected age : number;
    readonly email : string = "abc@test.com"

    constructor(private firstName: string, 
                public lastName : string, 
                protected age : number){
        // this.firstName = firstName;
        // this.lastName = lastName;
        // this.age = age;
    }

    sayHi() : string{
        return `Hello ${this.firstName} ${this.lastName}, 
        You are ${this.age} years old!`;
    }
}

const MAGIC_NUMBER = Math.round(Math.random() * 10);

export function getMyQuote(){
    return "Run 1000 mtr today!"
}

// let foo = new Student("Foo", "Bar", 32);
// console.log(foo.sayHi());


// let & const 
