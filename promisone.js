// promises => its like a garantly something will happen for future like Resloved or Rejected
// promises have 3 state 
// pending => task is initial state
// fulfilled => task is successful
// reject => task is rejected

function fetchData(){
    fetch('https://fakestoreapi.com/products')  // load call api  // pending state

    .then(response=>{          // producing code
        if(!response.ok)   // not the call api throw the error
        {
            throw new Error("networking error 404");    // incase any error happen while api loading throw the one error
        }
        return response.json();  // if task is successful then give the data in json format
    })
    .then(data=>{        // consuming code     // fulfill state => task is successful
        console.log(data)  // here display the data in storing the data in json format
    })
    .catch(error=>{           // rejected state => task is rejected
        console.error("show the error here",error);   // error given the error
    });

}


fetchData();   // call the function name here


function cardData(){

    fetch('https://fakestoreapi.com/carts')   // load  call api  => pending state

    .then(response=>{            // check the api is success or rejected
        if(!response.ok)
        {
            throw new Error("networking error 404");   //when api is loaded any error coming this executed 
        }
        return response.json();   //  api loaded successful then give the data in json() format
    })
    .then(data=>{           // fulfilled state
        console.log(data)    // here json() formate data display
    })
    .catch(error=>{    // rejected state 
        console.error("Something Error is occuping",error);   // error showing
    })
}
cardData();