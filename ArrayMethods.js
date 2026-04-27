// Array => array is collection of element in same datatype with continuos memory allocation

// let collection = ["Aishu", 32, true, {name:Ammu}];

// Array method
//  1. Push() => Adds one or more elements end of the array and returns the new length

document.write("<h3>1. Push Method</h3>");

let sports = ["cricket", "football", "kabbadi"];
document.write("Sports is ",sports + "</br>");
document.write("sports length is ",sports.length + "</br>");

sports.push("Hakki",56);

document.write("After push the element Sports is ",sports + "</br>");
document.write("sports length is ",sports.length + "</br>");

document.write("<hr>");

// 2. pop() => remove the last element from the array and return that element

document.write("<h3>2. Push Method</h3>");

let books = ["Maths", "Computer", "Physics", "Social"];
document.write("books is ",books + "</br>");
document.write("books length is ",books.length + "</br>");

let someresult = books.pop()

document.write("after the pop the one element in books ",books + "</br>");
document.write("books length is ",books.length + "</br>");
document.write("deleted pop method is ", someresult + " </br>");

document.write("<hr>");

// 3. shift() => Remove the first element in the array and return that element

document.write("<h3> 3.Shift Method</h3>");

let city = ["bengalore", "ballary", "hydrabad", "Delhi"]
document.write("City is ",city + "</br>");;
document.write("city length is ",city.length + "</br>");

let newcity = city.shift();

document.write("After Shift city is ",city + "</br>");;
document.write("city length is ",city.length + "</br>");
document.write("shifted element is ", newcity + " </br>");
document.write("<hr>");

// 4. unshift() => Add one or more elements to the beginning  of an array and return the new length

document.write("<h3> 4. Unshift Method</h3>");

let colors = ["red", "blue", "white"]
document.write("Colors are ",colors + "</br>");;
document.write("Colors length is ",city.length + "</br>");
colors.unshift("orange", "purple");

document.write("After Unshift the Colors are ",colors + "</br>");;
document.write("Colors length is ",colors.length + "</br>");
document.write("<hr>");

// 5. contact() => combines two or more array and return the new array
document.write("<h3> 5. Concat Method</h3>");

let score = [11, 22, 33, 44, 55]
let players = ["Aishu", "Ammu", "Raji", "Chandu", "Kavya"]

let newPlayers = score.concat(players);
document.write("the Score and players array is ",newPlayers);;
document.write("<hr>");;

//6. join() => creates a new string by concatenating all the elements of an array and return a string by a specified separator

document.write("<h3> 6. Join Method</h3>");;

let array = [1, 2, 3, 4, 5, 6, 7]

let newarray = array.join("**");;

document.write("to form a one special character to every letter between ",newarray);
document.write("<hr>");;

//7. slice() => Returns a shallow copy of a portion of an array into a new array (using one array two create the new array);

document.write("<h3> 7.Slice Method</h3>");;

let student = ["Aishu", "Ammu", "Raji", 10, 30, 20, 56,100]
document.write("student data is ",student + "</br>");
let newStud = student.slice(0, 4);

document.write("to form new array is ",newStud);
document.write("<hr>");;

// 8. splice() => Changes the contents of an array by removing, replacing or adding elements

document.write("<h3> 8.Splice Method</h3>");;

let numbers = [1, 2, 3, 4, 5, 6, 7, 8]
                //       splice(number, index, values);
let newNumbers = numbers.splice(5, 1, "Aishu");

document.write(numbers + "<br/>");
document.write(newNumbers);;
document.write("<hr>");;

//9. indexof() => Return the first index at which a given element can be found in an array or -1 if its not present  (to give the index value to searched element, if element not present in array return the index value as -1);

document.write("<h3> 9.Index Method</h3>");

let students = ["Aishu", "Ammu", "Kavya", "Chandu"]

let newStudent = students.indexOf("Raji");

if(newStudent === -1);{
    students.push("Raji");
}
else{
    document.write(newStudent + "<br>");
}

document.write(students + "<br>");


// document.write("Students name index is ",students.indexOf("Aishu"););

document.write("<hr>");;


// 10. forEach() => Executes a provides function once for each array element (using the parent value to travel the each child value);

document.write("<h3> 10.ForEach Method</h3>");

let marks = [10, 20, 30, 40, 50]

marks.forEach(function(mango);{
    document.write(mango * 2 + "<br>");
});

let stud = ["Raji", "Aishu", "Ammu", "Kavya", "Chandu"]

stud.forEach(function(item, index);{
    document.write(index + 1 + ". " + item + "<br>");
});
document.write("<hr>");;
document.write("<hr>");;


// Multi Dimensional Array

document.write("<h3> Multi Dimensional Array </h3>");
let a =[10,20,30,40];

document.write("One dimensional array ",a[2] + "<br>");

let mark = [
    [
        ["RadhaKrishna","Rukmini", "SathyaBhama", "Jambavathi"],
        ["LaxmiNarayana", "SitaRama", "RadhaKrishna", "LaxmiNarasimha"],
        ["GowriShnakara", "ShivaParvathi","Nilakanteshwara","Mahakali","Sathidevi"]
    ],
    [10, 20, 30],
    [40, 50, 60, 70, 80],
    [100, 200, 300, 400],
    [1, 2, 3, 4, 5, 6, 7, 8, 9,]
]

document.write("Two Dimensional Array ", mark[4][7] + "</br>");;

document.write("Three Dimensional Array ",mark[0][2][4]);;







