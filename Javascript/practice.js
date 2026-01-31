const user = [
    {firstName: "asdf" , lastName:"qwert", age: 20},
    {firstName: "jhgfd" , lastName:"nmbvc", age: 32},
    {firstName: "wedrfgv" , lastName:"tres", age: 50},
    {firstName: "5rfv" , lastName:"nbv", age: 16}
]

//find firstNAme of all users whose nage is less than 50 

const output1 = user.filter (
    function x(user){
    if(user.age < 50){
        return user.firstName;
    }
});
console.log(output1)


// method 2
function x(user){
    if(user.age < 50){
        return user.firstName;
    }
}

const output = user.filter(x)
console.log(output);

// method 3 

const output3 = user.filter(x => x.age < 50).map((x) => x.firstName);
console.log(output3)


// method4 
const op4 = user.reduce(function(acc , curr){
    if(curr.age < 50){
        acc.push(curr.firstName);
    }
    return acc;
}, [])
console.log(op4)

const name ={
    firstName: "mallika",
    lastName: "bhargavi"
}

// writing own bind method using polyfills 
console.log("checking Bind from here");
let printName = function(hometown , state){
    console.log(this.firstName + " " + this.lastName + " " + hometown + " "+ state);
}

let pMN = printName.bind(name);
pMN("AP");


// mybind function 
Function.prototype.mybind = function(...args){
    let obj = this;
    return function(){
        obj.call(args[0]);
    }
}

let PMN2 = printName.mybind(name);
PMN2();


// complicated bind function 
console.log("---------------- complicated bind -----------------")
Function.prototype.myownbind = function(...args){
    let obj = this;
        params = args.slice(1);
    return function(...args2){
        obj.apply(args[0] , [...params , ...args2]);
    }
}

let PM3 = printName.myownbind(name , "nandyal");
PM3("AP");



// currying 
// using closures 
let multiply = function (x){
    return function(y){
        console.log(x*y)
    }
}
let MB2 = multiply(2);
MB2(3);


// using bind 
let multiply2 = function(x,y){
    console.log(x *y);
}

let multiply1 = multiply2.bind(this, 3)
multiply1(5);


let multiply3 = multiply2.bind(this, 34567890);
multiply1(3456711);


let arr = [1,2,3,4,5]

let fun = function (){

}

let object1 ={
    name: "asd"
}
let object2 = {
    age: 15,
    country: "qwerty"

}

object1.__proto__ = object2



document.querySelector("#grandparent").addEventListener('click', () => {
    console.log("GrandParent clicked!")
}, true);
document.querySelector("#parent").addEventListener('click', () => {
    console.log("Parent clicked!")
}, false);
document.querySelector("#child").addEventListener('click', () => {
    console.log("child clicked!")
}, false)





document.querySelector("#laptop").addEventListener('click', () => {
    console.log("laptop Clicked!")
}, false);
document.querySelector("#camera").addEventListener('click', () => {
    console.log("camera clicked!")
}, false);
document.querySelector("#shoes").addEventListener('click', () => {
    console.log("shoes clicked!")
}, false)


document.querySelector("#parentcommers").addEventListener('click', (e) => {

    console.log(e);
    console.log(e.target.id);
    if(e.target.tagName === 'LI'){
        window.location.href = "/" + e.target.id;
    }
    console.log("parent clicked!")
}, false)


document.querySelector("#form").addEventListener('keyup', (e) => {
    console.log(e);
    if(e.target.dataset.uppercase != undefined){
        e.target.value = e.target.value.toUpperCase();
    }
})
 


// promises 

// const cart2 =["shoes" , "pants" , "kurta"];
// createOrder(cart2);
// payment(orderId);

// // without promises (callback hell)
// createOrder(cart2 , function (orderId){
//     payment(orderId);
// });
// createOrder(cart2 , function (orderId){
//     payment(orderId , function(paymentInfo){
//         shipping(paymentInfo , function(trackingInfo){
//             updateWallet();
//         });
//     });
// });

// with promises
// const promise = createOrder(cart2);
// promise.then(function(orderId){
//      payment(orderId);
// });

// createOrder(cart2)
// .then(function(orderId){
//     return payment(orderId);
// })
// .then(function(paymentInfo){
//     return shipping(paymentInfo);
// })
// .then(function(trackingInfo){
//     return updateWallet();
// });




// const GITHUB_API = 'https://api.github.com/users/akshaymarch7';
// const user2 = fetch(GITHUB_API);
// console.log(user2);

// user2.then(function(response){
//     console.log(response);
//     const userData = response.json();
//     console.log("user:", userData);
// });




// promise chaining with fetch

const cart = [ "shoes" , "pants" , "kurta"];
const promise2 = createOrder(cart);  // returned a promise of orderId

promise2.
then(function(orderId){
    console.log("order created successfully!" , orderId);
    return orderId;
})
.then(function(orderId){
    return proceedToPayment(orderId);
})
.then(function(paymentInfo){
    console.log("payment info:" , paymentInfo);
})
.catch(function(err){
    console.log("error in order creation:" , err);
    console.log(err.message)
});


function createOrder(cart){
    const pr = new Promise(function(resolve , reject){
        // create order logic
        //validation cart
        //orderID
        if(!validateCart(cart)){
            const err = new Error("cart is not valid");
            reject(err);
        }
        // create orderID
        const orderId = "12345";
        if(orderId){
            setTimeout(() => {
                resolve(orderId);
            }, 3000);
            
        } 
    });

    return pr;
}

function proceedToPayment(orderId){
    // proceed to payment logic
    return new Promise(function(resolve , reject){
        resolve("proceeding to payment for orderId:" , orderId);
    });
}

function validateCart(cart){
    return true;
}