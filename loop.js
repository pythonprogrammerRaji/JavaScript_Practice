// loop

console.log("----------1. for loop-------------")

// to wish the all 10 friends at a time
let friends = ["Aishu","Keerthana","Chandu","Kavya", "Nandu", "Nisarga","Likhitha","siri","priya","bindu"];

for(let i=0;i<friends.length;i++){
    console.log("Happy Vinayaka Chavithi to "+ friends[i]+"!");
} 

console.log("-----------Nested for Loop-----------------");

for(let i=0;i <= 5; i++){
    console.log(i)
    
    for(let j=1;j <= 3; j++){
        console.log("Inner loop is " + j)

    }
}

// to deposite amount every 4 days to add interest as 2 rupes

let amount = 1000;
let days = 50;
let interest = 2;

for(let i=1; i<=days; i++){
    if(i%4==0){
        amount += interest
    }
    console.log("Your amount for" + i + "th day" + amount )
}

let myNumbers = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9]
let uniqueNumber = [];

for(let i=0; i<myNumbers.length; i++){
    if(!uniqueNumber.includes(myNumbers[i]))
    {
        uniqueNumber.push(myNumbers[i])
    }
}
console.log(uniqueNumber)


console.log("--------------2. while loop--------------------------")
// to count the sheeps before a sleep

let sheeps = 1;
while(sheeps <= 5){ 
    console.log("counting shpees "+ sheeps);
    sheeps++;
}

let i = 0;
while(i<=10){
    console.log(i);
    i++;
}

console.log("--------------3. do-while loop--------------------------")
// candies bowls we can checking the bowls is candies is there or not
let candies = 10;
do{
    console.log("eating candy");
    candies--;
}
while(candies>0);

let j=10;

do{
    console.log(j);
    j++;
}
while(j<=10)


console.log("--------------4. for of --------------------------")

// its used to iterate the overall array values
// you have basket of fruits and want to list each one

let array = ["Mango", "apple", "bannana", "cherry", "kivi"];
for(let fruits of array)   // here fruits is element, to iterate the array 
{  
    console.log("I like "+fruits);
}

console.log("--------------5. for in --------------------------");

// its used to iterate the over the properties of objects
// key and value paris objects

// here we are create the one object 
let users = {
    title:"xyz",
    author:"yyy",
    year:"1997"
}

// here iterate the object in key or value
for(let key in users){ // here users is object name, key is element of users key
    console.log(key + ":" +users[key]);
}


console.log("--------------6.Break --------------------------");
// its break the value when we give the till condition
// here the 1 to 5 number, and break the condition when the number equal 3, =>1, 2
for(let i=1;i<=5;i++)
{
    if(i===3){
        break;
    }
    console.log(i);
}


console.log("--------------7.Continue --------------------------");
// here the 1 to 5 number, and continue the condition when the number equal 3, but here skip the number and give the all number =>1,2,4,5
for(let i=1;i<=5;i++)
    {
        if(i===3){
            continue;
        }
        console.log(i);
    }