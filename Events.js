let darkTheme1 = document.getElementById("dark-theme");

// onclick event
function darkTheme(){
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelector(".dark-theme").textContent = "Light Theme";
    document.querySelector(".navbar").style.backgroundColor = "#2E282A";
    document.querySelector(".dash-left").style.backgroundColor = "gray";

  
}

// Ondbclick (Double Click)
function lightTheme(){
    document.querySelector("body").style.background = "white";
    document.querySelector(".dark-theme").textContent = "Dark Theme";
    document.querySelector(".navbar").style.backgroundColor = " #F86624";
    document.querySelector(".dash-left").style.backgroundColor = "blue";
}

// onmouseover

function eleOver(element){
    // document.querySelectorAll(".title1").style.backgroundColor = "yellow";
    element.style.backgroundColor = "Yellow";
}

//onmouseout
function eleOut(item){
    item.style.backgroundColor = " rgba(220, 220, 220, 0.945)";
}

//login page
let loginModel = document.getElementById("loginSection");
let loginBtn = document.getElementById("loginBtn")
let closeBtn = document.getElementById("closeBtn");
let loginSubmit = document.getElementById("loginSubmit");
let dashLeft = document.querySelector(".dash-left");
let titleRight = document.querySelectorAll(".title-right .title1");
let AddBorder = document.getElementById("add-border");

loginBtn.addEventListener("click", showLogin)

function showLogin(){
        dashLeft.style.display = "none";
        titleRight.forEach(element => {
            element.style.display = "none";
        });
        loginModel.style.display = "block";
}

closeBtn.addEventListener("click", hideLogin)

function hideLogin(){
    dashLeft.style.display = "block";
    titleRight.forEach(element => {
        element.style.display = "block";
    });
    loginModel.style.display = "none"
}
// to changing the submit Button background color using mouseover event
// document.getElementById("loginSubmit").addEventListener("mouseover", function() {
//     this.style.background = "red";
// })

// to changing the submit Button background color using mouseover event

loginSubmit.addEventListener('mouseover', loginOver)
function loginOver(){
    loginSubmit.style.backgroundColor = "green"
}


loginSubmit.addEventListener('mouseout', loginOut)
function loginOut(){
    loginSubmit.style.backgroundColor = "#1768AC"
}

AddBorder.addEventListener("click", addBorder)

function addBorder(){
    document.querySelector("header").style.border = "5px solid green"
}

AddBorder.removeEventListener("dblclick", removeBorder)

function removeBorder(){
    document.querySelector("header").style.border = "none";
}

// form events
// 1. submit => submit event is submit the form of some data

document.addEventListener("DOMContentLoaded", function() {
    
let mainForm = document.getElementById("myForm");
let InputText = document.getElementById("nameText");
let Username = document.getElementById("username");

if(!mainForm){
    close.error("Form not found!");
}

mainForm.addEventListener("submit", FormSubmit)

function FormSubmit(e){
    e.preventDefault();   // its help to page avoid the refresh  page when I am click the submit button

    const myInputText = InputText.value;

    Username.textContent = myInputText;
    
    // 2. reset() => after submit the data clink submit button its clear the data, we can use the reset after submit
    mainForm.reset();
}
})
// 3. Focus => when we move the curser its focus the element
let InputText = document.getElementById("nameText");

InputText.addEventListener("focus", function(event){
    event.target.style.background = "pink";

    console.log(event.target)
  })

// 4.blur => when we move the curser outside the focus event remove on element. blur event used to after the focus event

InputText.addEventListener("blur", function(event){
    event.target.style.background = "";

    console.log(event.target)
  })

// 5. change => the change use to change the existing element(Bengnlore) to new element(Rayadhurg)

 let myNewColor = document.getElementById("myColors");
 let myNewBox1 = document.getElementById("box1");
 let myNewBox2 = document.getElementById("box2");

 myNewColor.addEventListener("change", function(){
    myNewBox1.style.background = myNewColor.value;
 })

 myNewColor.addEventListener("change", function(){
    myNewBox2.textContent = myNewColor.value;
 })

//  4. input => its apply only for text Input field

let myNewForm = document.getElementById("myForm1");
let UserText = document.getElementById("userText");
let NewUsername = document.getElementById("newusername");

myNewForm.addEventListener("input", function(){

    // let newUserText = UserText.value;

    NewUsername.textContent =  UserText.value;

})

//  => events

// 1. click()
// 2. dblclick()
// 3. mouseover
// 4. mouseout
// 5. submit
// 6. reset
// 7. focus
// 8. blur
// 9. change()
// 10.input()

// =>   -Pair Events

// 1. mouseover = mouseout
// 2. submit = reset
// 3. focus = blur

// KeyboardEvent

// 1. keyup => its used when we press and release the key in keyboard (the function is occur when press and release the key)

function inputKeyup(){  
    alert("you are release the key in keyboard");
}

// 1. keydown => its used when we press the key in keyboard its work (the function first occur after its showing the result)
function inputKeydown(){  
    alert("you are pressing the key in keyboard");
}

// 1. keydown => its used when we press the key in keyboard its work (the function first occur without seeing the output)
function inputKeypress(){  
    alert("you are pressing the key and hold it in keyboard");
}

// if(10<20){
//     AddBorder.removeEventListener("click", addBorder)
// }





// const darkTheme = function(){
//     document.querySelector("body").style.backgroundColor = "block";
//     document.querySelector(".dark-theme").textContent = "Light Theme";
//     document.querySelector(".navbar").style.backgroundColor = "gray";
//     document.querySelector(".dash-left").style.backgroundColor = "red";

// }