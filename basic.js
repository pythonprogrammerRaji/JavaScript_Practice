// variable is used to stored a value
// 3 types variable

// 1. var => this is old and reuse and reduction variable

// var is Global scope and Local Scope
                          
console.log("------Var--------")
var num=10; // here i am created global scope variable its declare anywhere in program

function print(){

    var num1 = 20
    console.log(num1);
    
    var square = num*num
    console.log(square);
}

console.log(num);

print();


console.log("------hoisting--------")

// hoisting => var all the declaration going to top (its only for var keyword)

// computer checking first line now its undefined
console.log(a);  //undefined
var a = 10;       // var declaration going to
console.log(a); // 20

console.log("------let--------")

// let

let x = 10;

function example(){
    let y = 20;
    console.log("y value is",y)
}
example();
console.log(x)

console.log("------Const--------")


// Const => once we declare the const value, we cannot change the value throughout the program

const z = 10;
 // we can use const keyword in object, we can change only properity not variable name
// person => variable name, Name => properity
const person = {Name:"shree"}
person.Name = "Vani";
console.log(person.Name);


console.log("------Datatypes in Premetive--------")

// premitive datatypes => its single value and immutable =>we once assign the value  cannot change, Unchanged

// 1. number => int and float

let p = 10;
let r = 20.5;
console.log(p)
console.log(r)
console.log(typeof(p));
console.log(typeof(r));

// 2. boolean => its give the result either True or False

// 3. Undefined => We declare the variable, but not assign the value of variable that time its give the output as undefined

let c;
console.log(c);

// 4. Null => Its the special value its empty or undefined value

console.log("------Datatypes in Non-Premetive is object and array--------")

// Non-Premetive => mutable => we can change the value at any time,  change the value

// 1. object => Its collection of key and value pair

console.log("---------------1. Object ---------------")

let users={

    name:"Raji",
    age:22,
    class:"Mca"


}
console.log(users.name);
console.log(users.age);
console.log(users.class);

// now i can change the all value

console.log("After changing the all values");

users.name="vani",
users.age=23,
users.class="d.bed"

console.log(users.name);
console.log(users.age);
console.log(users.class);

console.log("---------------2. Array ---------------");

let number = [1,2,3,4,5]
console.log(number);


// We can not use the datatype in javascript, because Js is a dynamic type => means js directly taken a which datatype users can give the as a value

let car = "mummy"
let num1 = 42
console.log(car);
console.log(typeof(car))
console.log(num1)
console.log(typeof(num1))