//location finder example

function isTimeConsumption(t){
    time =1000;
    return time <=t;
}

function isValidation(loc){
    location ="Ooty";
    return loc ==location;
}

function locationFinder(){
    loc = "Ooty"; 
    time = 1000;
    return new Promise((locfound,locnotfound)=>{
    setTimeout(()=>{
            if(train<=7)
            {
                locfound("Location found");
            }
            else
            {
                locnotfound("Location not found");
            }})
        })
    }

// console.log(locationFinder())

locationFinder().then((resolvedMsg)=>{
    console.log(resolvedMsg);
}).catch(function (rejectedMsg){
    console.log(rejectedMsg);
})