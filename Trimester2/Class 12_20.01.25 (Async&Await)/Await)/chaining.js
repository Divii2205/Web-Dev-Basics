function promise1(){
    return new Promise(function (resolve, reject){
        setTimeout(() => {
            const isHeads = Math.random() >= 0.5;
            if(isHeads) resolve ('Promise 1: We got heads');
            else reject('Promise 1: Rejected, we got tails')
        }, 2000);
    })
}

function promise2(){
    return new Promise(function (resolve, reject){
        setTimeout(() => {
            const isHeads = Math.random() >= 0.5;
            if(isHeads) resolve ('Promise 2: We got heads');
            else reject('Promise 2: Rejected, we got tails')
        }, 1000);
    })
}

function promise3(){
    return new Promise(function (resolve, reject){
        setTimeout(() => {
            const isHeads = Math.random() >= 0.5;
            if(isHeads) resolve ('Promise 3: We got heads');
            else reject('Promise 3: Rejected, we got tails')
        }, 1000);
    })
}

function promise4(){
    return new Promise(function (resolve, reject){
        setTimeout(() => {
            const isHeads = Math.random() >= 0.5;
            if(isHeads) resolve ('Promise 4: We got heads');
            else reject('Promise 4: Rejected, we got tails')
        }, 1000);
    })
}

// Chaining promises
promise1().then(function(result){
    console.log(result);
    return promise2();  
}).then(function(result2){
    console.log(result2);
    return promise3();
}).then(function(result3){
    console.log(result3);
    return promise4();
}).then(function(result4){
    console.log(result4);    
}).catch(function(err){
    console.log(err);    
})