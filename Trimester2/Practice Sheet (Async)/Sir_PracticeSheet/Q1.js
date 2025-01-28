import fetch from 'node-fetch';

function fetchData(callback){
    setTimeout(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response=>response.json())
        .then(data=>callback(null, data))
        .catch(err=>callback(err, null))
    }, 2000)
}

fetchData((err, data) => {
    if(err)console.error(err)
    else console.log(data)   
})