
// let button = document.querySelector("click1");  // querySelector => its select the only one element
// let allButtons = document.querySelectorAll(".click1");  // querySelectorAll => its select the All element (we have same element in multiple times Ex: button)
// let title = document.getElementById("title");

// allButtons.forEach((button, index) => {   // foreach => its iterate the for each value (Ex: parent button iterated the for each child button)
//         button.innerText = "Js Content";
//         button.addEventListener("click", function(){
//         button.innerText ="Html Content";
//         title.innerText = "I changed"
//     });
// });

// classList => its a property fo DOM element that represents a collection of classes and applied to the element

// 1. InnetetHTML => used to write the text using tagname in html page 
// 2.  getElementById => to target the id in html page 

let aa = document.getElementById("Comapny")
aa.innerHTML = "<h1>Hello World</h1>"

// document.write("Here we replace the word company as a Hello World using InnerHTML")
console.log(aa);

// 3. textContect => its used to change the text html to js 

let bb = document.getElementById("sales")
bb.textContent = "New force company";




// 4. getElementsByClassName => to target the class in html page 

let nav = document.getElementsByClassName("nav")[0]; // [0] its Index value
nav.innerText = "<h2>This is my page pls exit</h2>";

//5. getElementsByTagName => to target the Tag in html page 

let span = document.getElementsByTagName("span")[0];
span.textContent= "This css class not HTML class"

// if have multiple same tag, we can change the particular one tag text using index value
let page = document.getElementsByTagName("p");
// page.textContent = "This new value"

// if have multiple same tag, we can change the all tag text using for loop but remove the index value
for(let i=0; i<page.length; i++){
    page[i].textContent = "Something is special"
}
console.log(page);

document.write("<hr>")

// 6. querySelector => to taget the one any id or class using for id(#) or class(.) or tags(tagsname only) in html page

let letter1 = document.querySelector("#letter1") //id

let letter2 = document.querySelector(".letter2") // class

let div = document.querySelector("div") //tags

let letter = document.querySelector("#letter")
letter.textContent = "This is Alphabets"

//7. querySelectorAll => to target the multiple same id or calss using for id(#) or class(.) or tags(tagsname only)  in html page

let tags = document.querySelectorAll(".tag");
tags.textContent = "This not tags, this is paragrams"

for(let i=0; i<tags.length; i++){
    tags[i].textContent = "Tommorrow is Holi festival"
}

// different between innterText and textContent

let hh = document.querySelector("h4");
//innerText => here its not display the css text elements (here we can apply display:none to success, so success is not given)
console.log(hh.innerText)
// textContent => here display the all text element even apply the css 
// (here we can apply display:none to success, so success is given)
console.log(hh.textContent)









