// Fetch user profile
// Fetch user settings based on profile
// Fetch recommendations based on settings

function profile(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Fetch user profile");
        }, 1000)
    })
}

profile()
.then((result)=>{
    console.log(result);    
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Fetch user settings based on profile");
        }, 1000)
    })
})
.then((result)=>{
    console.log(result);    
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Fetch recommendations based on settings");
        }, 1000)
    })
})
.then((result)=>{
    console.log(result);
})
.catch(err => console.log(err))