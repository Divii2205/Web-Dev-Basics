const promise1 = new Promise(function (resolve, reject){
    setTimeout(() => {
        const isHeads = Math.random() >= 0.5;
        if(isHeads) resolve ('We got heads');
        else reject('We got tails')
    }, 2000);
})

const promise2 = new Promise(function (resolve, reject){
    setTimeout(() => {
        const isHeads = Math.random() >= 0.5;
        if(isHeads) resolve ('We got heads');
        else reject('We got tails')
    }, 1000);
})

console.log(promise1);

// Promise handlers:
// then and catch
// finally

promise1.then(function(result){
    console.log(result);
})

promise1.catch(function(err){
    console.log(err);
})

promise2.then(function(result2){
    console.log(result2);
})

promise2.catch(function(err){
    console.log(err);
})