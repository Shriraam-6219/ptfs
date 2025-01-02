async function funName(){
    setTimeout(()=>{
        console.log("Hello");
    },1000)
    console.log(await "Hello");
}

arrowFunName = async() =>{
    setTimeout(()=>{
        console.log("KEC");
    },1000)
    console.log(await "Hello");
}

// var fun = 
funName();
// var arrFun = 
arrowFunName();
// console.log(fun);
// console.log(arrFun);