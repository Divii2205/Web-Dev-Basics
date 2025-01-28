// Find the square of double with intervals 1s

function double (num){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(2*num)
        }, 1000)
    })
}

function square (num){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(num*num)
        }, 1000)
    })
}

function doIt (num){
    double(num)
    .then((res) => {
        return square(res);
    }).then((res) => {
        console.log(res);        
    })
}

doIt(5);