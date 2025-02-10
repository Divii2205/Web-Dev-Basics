function doIt (delay, retries, callback, operation){
    return new Promise((resolve, reject) => {
        if(operation()){
            resolve(callback(operation()))
        }
        else{
            while(retries--){
                setTimeout(()=>{
                    if(operation()){
                        resolve(callback(operation()))
                        retires = 0
                    }
                }, delay)
            }
            reject(callback(false))
        }
    })
}