const promise = new Promise(function(resolve, reject){
    let a = 5;
    let b = 8;

    if(a === b) resolve('Values Matched');
    else reject('Values Mismatched');
})

console.log(promise);