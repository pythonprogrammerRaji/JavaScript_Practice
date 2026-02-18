//Event Handler
let event1 = document.getElementById("event1"); //original
event1.addEventListener("click", (event)=>{
    console.log("Event1 clicked")
    event.stopImmediatePropagation();
})
//stopImmediatePropagation => its used to stop the propagation when have same name two function code, its did cot execute the duplicate function when we will give the stopImmediatepropagation in origin function code

// origin => main one
// duplicate => sibling

// Ex: then sitha geetha are twing sibling are have looking same but diffrent name, i am claling tsitha but geetha coming when geetha coming to stoped immediately,

// sithe is origin, geetha is duplicate


event1.addEventListener("click", ()=>{ // duplicate
    console.log("Event1 duplicate clicked")
})


// => Events capture => its travel the top to bottom to capture the target node (EX: window->document->html->body->div->button) i,e button is the target element

// the bubble and capture events code is same but if capture is working when we will give the end of the function argument as true

// =>Events bubble => its travel the target node through bottom to top the window (EX: window>-document<-html<-body<-div<-button) i,e button is the target element

let parent = document.getElementById("parent");
parent.addEventListener("click", (event)=>{
    console.log("parent node clicked")
    // event.stopPropagation(); // here stop the propagation
},true)


let child = document.getElementById("child");
child.addEventListener("click", (event)=>{
    console.log("child node clicked")
    // event.stopPropagation(); // here stop the propagation
},true)


let event2 = document.getElementById("event2");
event2.addEventListener("click", (event)=>{
    console.log("event2 clicked")
    // event.stopPropagation(); // here stop the propagation
})
 



// =>Event Delegation => using the parent node we will assign the work in child node

//here using the tasks(parent node) we can give the classname in Task1(child node) "completed" is the classname

let tasks = document.getElementById("tasks");  
tasks.addEventListener("click", (event)=>{
    event.target.classList.toggle("completed");
})


// stopPropagation => To stop the event capture and event bubble using event.propagation
// when will give the propagation we can stop the particular stage, link if want to stop the child node then write the code

// syntax : event.stopPropagation  (event is parameter of the function)

