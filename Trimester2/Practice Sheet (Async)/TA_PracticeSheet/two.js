// Fetch data from two APIs sequentially using callbacks.

import fetch from 'node-fetch'

function fetchData(){
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
}

fetchData()
.then((resolve) => {
    return resolve.json()
})
.then(json => {
    console.log(json)
    return fetch(`https://jsonplaceholder.typicode.com/todos/${json.id+1}`)
})
.then((resolve) => {
   return resolve.json()
})
.then(json => console.log(json))
.catch(err => console.log(err))
