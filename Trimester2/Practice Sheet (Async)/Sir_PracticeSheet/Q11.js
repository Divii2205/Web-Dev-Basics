const promise1 = Promise.resolve("Data 1");
const promise2 = Promise.reject("Error in Data 2");
const promise3 = Promise.resolve("Data 3");
// Promise.all([promise1, promise2, promise3]).then(results => console.log(results));
Promise.allSettled([promise1, promise2, promise3])
.then(results => {
    console.log(results)
    results.forEach (result => {
        if(result.status === 'fulfilled') console.log(result.value);
        else console.log(result.reason);        
    })
});
