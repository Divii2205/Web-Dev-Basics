function getUserData() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve({ name: "John", age: 25 });
        }, 1000);
    })
}

getUserData()
.then((value) => {
    console.log(value);
})
.catch((err) => {
    console.log(err);    
})
