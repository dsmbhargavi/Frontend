
let counter= 0 ;
const getData = () => {
    //calls and API and get data 
    console.log("fetch called....." , counter++);
}

const debounce = function(fn , delay){
    let timer;
    return function (){
        let context = this , arg = arguments; 
        clearTimeout(timer)
        timer = setTimeout(() => {
            getData(context,arg);
        }, delay);
    }
}


const betterFunction = debounce(getData , 300);