function day(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Wake up");
        }, 1000)
    })
}

day()
.then((value)=>{
    console.log(value);    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Freshen Up");
        }, 1000)
    })
})
.then((value)=>{
    console.log(value);    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Have breakfast");
        }, 1000)
    })
})
.then((value)=>{
    console.log(value);    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Study");
        }, 1000)
    })
})
.then((value)=>{
    console.log(value);    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Enough for the day");
        }, 1000)
    })
})
.then((value)=>{
    console.log(value);    
})
.catch((err) => {
    console.log(err);    
})