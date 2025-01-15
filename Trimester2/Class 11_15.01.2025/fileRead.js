const fileSystem = require('fs');
// console.log(fileSystem);

// Synchronous Method
let data1 = fileSystem.readFileSync('f1.txt');
let data2 = fileSystem.readFileSync('f2.txt');
let data3 = fileSystem.readFileSync('f3.txt');

// Asynchronous Method
fileSystem.readFile('f1.txt', (err, data1) => {
    if (err) console.log("ERRORRR!");
    else console.log("file1");
});

fileSystem.readFile('f2.txt', (err, data2) => {
    if (err) console.log("ERRORRR!");
    else console.log("file2");
});

fileSystem.readFile('f3.txt', (err, data3) => {
    if (err) console.log("ERRORRR!");
    else console.log("file3");
});

// console.log("" + data);