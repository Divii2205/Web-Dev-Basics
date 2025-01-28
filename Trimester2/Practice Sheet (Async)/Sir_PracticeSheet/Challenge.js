// Fetch user profile
// Fetch user settings based on profile
// Fetch recommendations based on settings

function profile(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            reject("Fetch user profile");
        }, 1000)
    })
}


let count = 0;
function call(){
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
    .catch((err) => {
        if(count++<3){
            call()
            // console.log(count);
        }
        else console.log(err)  
    })
}

call()