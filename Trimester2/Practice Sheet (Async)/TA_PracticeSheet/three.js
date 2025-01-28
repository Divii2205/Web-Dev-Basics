import fetch from 'node-fetch';

const urls = [
    "https://jsonplaceholder.typicode.com/todos/1",
    "https://jsonplaceholder.typicode.com/todos/2",
    "https://jsonplaceholder.typicode.com/todos/3"
]

const fetchAll = urls.map(url => fetch(url).then(res => res.json()));
console.log(fetchAll);

// Promise.all([
//     fetch(urls[0]).then(res => res.json()),
//     fetch(urls[1]).then(res => res.json()),
//     fetch(urls[2]).then(res => res.json())
// ])
// .then(json=>console.log(json))
// .catch(err=>console.log(err))