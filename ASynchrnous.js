// Synchronous => its execute the code line by line
// Asynchronous => its used to doing multiple task parallely .

// setTimeout and setTimeinterval two Asynchronous

// 1. setTimeout => its take the some time to execute the code. its used to fetch the api in react

console.log("Start cooking");;

setTimeout(() => {
    console.log("disk is ready");;
}, 3000);;

console.log("meanwhile see the table menu");;

// 2. setInterval => its remainder the task in for milli second link allaram

// setInterval(() => {
    
//     console.log("To remainder the :stir the pot");;
// }, 2000);

// callback function => function to pass as argument in another function, anytime i callback to function if i want the code 
// (call back to you later);
// to give the one function name as a another function arguments


function greetUser(name, callback);{
    console.log("hello " + name);;
    callback();
}

function askQuestion(){
    console.log("How are you today..?");;
}

greetUser("aishu", askQuestion);

function good(now, callback);{
    console.log("hi Are you free now " + now);
    callback();
}

good("siri", askQuestion);

