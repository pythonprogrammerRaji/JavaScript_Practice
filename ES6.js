// Template String or template library => to write the simple way of code

let color = "Blue"
let color1 = "Red"
let color2= "Green"

document.write("<h4>Template Library</h4>")

// Normal way to write the code
document.write("I like Color " + color +" and "+  color1 + "<br>")

// Template Library way to write the code
document.write(`I like color ${color} and ${color2} <br><hr>`)




// Arrow Function
document.write("<h4>Arrow Functon</h4>")

// Normal fucntion
function apple (){
    document.write("I like apple juice <br>")
}
apple();

// Expression Function => to add the whole function in one variable
let graps = function(){
    document.write(`I did not like graps juice <br>`)
}
graps();

// using Arrow function
let mango = () => {document.write(`i like the mango juice<br>`)}
mango();

let add = (a, b) => {
    document.write(`Addition of two numbers ${a+b} <hr>`)
}
add(10, 20);




document.write(`<h4>for of (Using in Array) and for in (Using in Object)</h4>`);
// for in => Array
let student = ["kirana","Harsha","Ambika","Bhoomi","Sangeetha"]

for (const element of student) {
    document.write(`hi, ${element} how are you <br>`)
    
}

//for of => Object
let cities = {
    Andrapradesh : "Hydrabadh",
    karnataka: "Bengalore",
    Thamilnadu: "Chenaai",
    Madhyapradesh: "Mumbai"
}

for (const key in cities) {
    document.write(key + "<br>" ) // its display only keys
}

for (const values in cities) {
    document.write(cities[values] +"<br>" ) // its display only values
}



document.write(`<hr><h4>Rest Operator</h4>`)
//Rest Operator => it used to add the multiple value in single time and its used in function declaration time in parameter, its denoted by (...)
function stdData(name, ...marksnumber){
    let example = 0;

    for (const i in marksnumber) {
        example += marksnumber[i];
    }
    document.write(name, example)

}
stdData("Aishu ", 10, 20, 30, 40, " Marks")



document.write(`<hr><h4>Spread Operator</h4>`)
//Spread Operator => the Spread operator used to array and object and also function calling time. its add the two or more array and give in one array as result. its denoted by (...)

let subjects = ["Maths", "Cs", "Scinece", "Social"];
let progLang = ["Python", "Js", "C", "Java"];

let group = [...subjects, ...progLang]
document.write(group + "<br>")

const FirstName = {
    fname:"Vani"

}

const LastName = {
    lname: "Shree"
}

let fullname = {...FirstName, ...LastName}
document.write(fullname.fname, fullname.lname);





document.write(`<hr><h4> Desturicturing </h4>`);
// its used to get the value in array to using new array

let number = [1 ,2 ,3 ,4 ,5 ,6];
//Normal way to get the value in array using index number
document.write(number[1] + "<br>");

// using desturicturing to get the value usong new array

const [one, two, three, papaya, orange, six] = number;
document.write(orange, six + "<br>")

const fullname1 = {
    fname1: "Radha", 
    lname1: "rani"
}

const {fname1, lname1} = fullname1
document.write(fname1, lname1);




document.write(`<hr><h4> Asychronous </h4>`);
// Asychronous => the Asychronous operation is a combination of callback, promiser or ascyno/awaike

document.write(`First Code <br>`);
document.write(`Second Code <br>`);

// setTimeout(()=>{
//     document.write(`Third Code <br>`);
// },3000)

document.write(`Fourth Code <br>`);
document.write(`Fifth Code <br>`);


// console.log(`First Code`);
// console.log(`Second Code`);

// setTimeout(()=>{
//     console.log(`Third Code`);
// },3000)

// console.log(`Fourth Code`);
// console.log(`Fifth Code <br>`);

// Higher order Function => its used parameter calling inside main function (work is activates one after another)

// console.log(`Welcome`);

// function Register(apple){
//     setTimeout(()=>{
//         console.log(`Please Register`);    
//         apple();     // callback
//     },5000)
// }

// function Login(mango){
//     setTimeout(() => {
//         console.log(`Please Login`);
//         mango(); // callback
//     },3000);
// }

// function Thankyou(){
//     setTimeout(()=>{  
//         console.log(`thank You`)
//     },2000)
// }
// callback hell => its used to write the one function inside another function when main function calling time

// Register(function(){
//     Login(function(){         // callback Hell
//         Thankyou();
//     });
// });


// promisers => its type of asychronous opercation used write callback function is eaiser way
// Promise have 3 state 1. pending 2. Fullfill(return the Success message) 3.reject (return the Error message) 
// promises 2 parameter 1.resolve (fullfill or success message passed) 2.reject(reject or error message passed)
// if pending work is successfull then its going to resolve parameter write the ,message in .then() code to handle the resoved data
// if work is rejected then its going to rejecr parameter write the .catch() code to Handle the rejected data or error

// craete the new promise using variable name
// const promiserEx = new Promise ((resolve, reject)=>{  // ()=>{} -> this is Executive Functiion or Argument
//   let flag = false;
//   if(flag){
//     resolve("data is resolved")
//   }
//   else{
//     reject(`data is Rejected`)
//   }

// })  

// promiserEx.then((data)=>{console.log(data)}).catch((err)=>{console.log(err)})

// return the promise in one function

const Register1 = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log(`Hello wellcome to register page`)
            resolve("Register is Succcessful")
        }, 3000)
    })
}
const login1 = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log(`Please Login the page`)
            resolve(`user login the page`)
        }, 1000);
    })
}
const Thankyou = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log(`Thank you and Welcome`)
        }, 5000);
    })
}


// Register1().then(login1).then(Thankyou).catch((error)=>{console.log(`error caught: ${error}`)})
//.then((data)=>{console.log(data)}).catch((error)=>{console.log(error)})
// login1()//.then((data)=>{console.log(data)}).catch((error)=>{console.log(error)})

function fetchData(){
    fetch(`https://fakestoreapi.com/carts`)  // api can taken and tis pendning state

    .then(responed=>{
        if(!responed.ok)
        {
            throw new Error(`networking is 404`)
        }
        return responed.json();
    })

    .then((data)=>{
        console.log(data);
    })
    .catch((error)=>{
        console.log(`Error is found ${error}`)
    })
}

fetchData();

const main= async () => {
    try{
        await Register1();
        await login1();
        await Thankyou();

    }
    catch(error){
        console.log("error is occur", error)
    }
}

function delaymessage(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(`i am delayed`)
        }, 2000)
    })
}

async function showmessage(){
    console.log(`Start`);
    const msg = await delaymessage();
    console.log(msg)
    console.log(`End`)
}


showmessage();
