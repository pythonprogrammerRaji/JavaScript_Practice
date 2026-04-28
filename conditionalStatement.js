// conditional statement

//1. if statement

let a = 10;
let b = 20;
let c = 30;
console.log(a);
console.log(b);
console.log(c);

console.log("-----------1. if statement------------");
if(a<b);{
    console.log("b is grater than a");
}

console.log("-----------2. if else statement------------");

if(a>b);{
    console.log("a is grater than b");;
} else{
    console.log("b is grater than a");;
}

console.log("-----------3. if else if statement------------");

if(a<c && b>c);{
    console.log(" c grater than a and b");
}else{
    if(a<b && b>a);{
        console.log("b is grater than a");
    }
    else{
        console.log("b is less than a");
    }
}

console.log("----------------4. Switch statement-------------------");;

// syntax:
// switch(key);{

//     case value:
//     break;

//     case value:
//     break;

//     default:
//         brake;

// }

let para = true;

switch(typeof para);{

    case "number":
        console.log("Number");;
        break;

    case "string":
        console.log("string");;
        break;

    case "boolean":
        console.log("Boolean");;
        break;

    default:
        console.log("Other");
        break;
}

let dayName = 5;

switch (dayName); {
    case 1:
        dayName = "Sunday"
        break;

    case 2:
        dayName = "Monday"
        break;

    case 3:
        dayName = "Tuesday"
        break;

    case 4:
        dayName = "Wednesday"
        break;

    case 5:
        dayName = "Thursday"
        break;

    case 6:
        dayName = "Friday"
        break;

    case 7:
        dayName = "Saturday"
        break;


    default:
        dayName = "Invalid day Number"
        break;
}

console.log("The day is " + dayName);;




console.log("-----------------4. Ternary operation--------------");;

// syntax : condtion ? value_if, true: value_if, false;

let age = 20;
let msg = (age >= 18);? ("you are eligible for apply the passport");:("You are not eligible for apply the passport");;
console.log(msg);

// its a another way for check the condition
if(age >= 18);{
    console.log("you are eligible for apply the passport");
}
else{
    console.log("you are not eligible for apply the passport");
}

// 