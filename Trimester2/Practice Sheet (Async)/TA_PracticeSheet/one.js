// Write a program that reads a file using asynchronous callbacks and logs its content.

const fs = require('fs');

fs.readFile('f1.txt', 'utf8', (err, data) => {
    if(err) console.log(err);
    else console.log(`File data: ${data}`);
})