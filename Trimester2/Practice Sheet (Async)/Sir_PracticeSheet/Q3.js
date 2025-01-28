import fetch from 'node-fetch';

function getTemperature(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(res=>res.json())
            .then(data=> resolve(data))
            .catch(err=> reject(err))
        }, 2000)
    })
}

getTemperature()
.then((result)=>console.log(result))
.catch((err)=>console.log(err))