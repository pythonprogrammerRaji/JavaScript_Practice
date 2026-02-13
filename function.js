//function is a block of code to perform the specific task

// function declaration
function print(){
    console.log("hello JS World..!");
}
print();  // function call 

let friends = ["Aishu","Kerthana","Chandu","Kavya", "Nandu", "Nisarga","Likhitha","siri","priya","bindu"];

for(let i=0;i<friends.length;i++){
    console.log("Happy Vinayaka Chavithi to "+ friends[i]+"!");
}
print(); 

// function with parameter and argument  

function greet(firstname, lastname){  // parameters
    console.log("Hello " + firstname  + lastname);

}
greet("vani","shree");   // arguments

// multiple ways of assigned the parameter and arguments

function sum(x, y){
    console.log("sum of ",x+y)
}
sum(10, 20);

function sub(a, b=0){
    console.log("sub of",a-b)
}
sub(10);

function mul(p=2, q=4){
    console.log("multiple of",p*q)
}
mul();

function div(r, s){
    console.log("division of",r/s)
}
div(10, 2);
// first function go to call back function then its go to main function for perform the some task


// function return
function add(num1, num2){  // parameters
    return num1+num2;
}
const result = add(3, 4)   // arguments
console.log(result);


// in function return the another function 

function fn1(x){    // fn1 is a main function
    function fn2(y){    // fn2 is a sub function, inside the fn1 only declare and call or return the fn2
        return x*y;
    }

    return fn2;
}
const res = fn1(3);
console.log(res(2));

// callback function => its a function, the fn1 to pass the another function as a argument

function display(results){
    console.log(results);
}

function add1(n1, n2, myCallback){
    let sum1 = n1 + n2;
    myCallback(sum1)
}
add1(3, 6, display)

// Anonymous function

// function(){
    // code to statement
// }

let geet = function(name) {
    console.log(name)
}
geet("Aishu");



// Arrow function => shorter syntax call back function 
// we can not write as function name

const greets = name=>console.log(name);
greets("Harsha");  // its wailed used in js


// higher order function => map, filter and reduce

// 1. map => its iterate the over an array and return the new form of array

// syntax 
//     var newarray = Array.map(function, callback(Element, indexedDB, array){

//     }[this array])

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]  // Array
let double = number.map(item=>item*2) // here double -> newarray, number-> oldarray, item -> element [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] its double use the arrow function
console.log(double)



// 2. filter => its used to iterate over array and filter the array
// syntax is same as map syntax

let number1 = [1, 2, 3, 4, 5, 6]
const even = number1.filter(item=>item%2===0);
console.log(even)

// array of object

const student = [
    {name:"Raji", marks:45},
    {name:"Rohini", marks:42},
    {name:"Pallavi", marks:34},
    {name:"Vaishnavi", marks:47},
    {name:"Swarna", marks:48},
    {name:"Sakshi", marks:36}
];

// to filter how many student get a 45 or more than 45
const marks = student.filter(stud=>stud.marks>=45);
console.log(marks);

// 3. Reduce

// syntax 
// var newarray = Array.reduce(callback[accomulated, currentvalue, index, array])

const num = [1, 2, 3, 4];
const sum2 = num.reduce(function(acc, item){
    return acc + item;
}, 1)
console.log(sum2)