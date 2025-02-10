// Async function always returns a promise
// Async keyword can be attached to only functions

// async function getData(){
//     return new Promise(function(resolve){
//         resolve("Promise resolved");
//     })
// }

// let dataPromise = getData();
// dataPromise.then(function(result){
//     console.log(result);    
// })

// -----------------

const p = new Promise (function(resolve){
    resolve("New promise resolved")
})

// function fetchPromiseDate(){
//     p.then(function(result){
//         console.log(result);  
//     })
// }

// -----------------

// Using await keyword: can be used only with the async function

async function fetchPromiseDate(){
    let result = await p;
    console.log(result);    
}
fetchPromiseDate()

// fetchPromiseDate();

// -----------------

// async function fetchData(){
//     console.log('Scaler')
//     let result = await pl // 10 sec
//     console.log ("Async Await Result")
//     console.log('Create Impact')
    
//     let result2 = await p2 // 5 sec
//     console.log(result2)
// }

// fetchData()