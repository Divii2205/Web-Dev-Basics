const FileSystem = require("fs");

FileSystem.readFile("f2.txt", function(err, data){
    if(err) console.log("Cannot read file");
    else console.log("Data from file 2 => " + data);    
})

setTimeout(function(){
    console.log('Hiiiiiiii');    
}, 4000)

// The promises here is the default promise funtion from the fs module
let f1Data = FileSystem.promises.readFile('f1.txt');

f1Data.then(function(data){
    console.log('F1 file data: ' + data);
}).catch(function(err){
    console.log(err);    
})

// Everytime the value of callback, timeout, promise is changed, the order of the output changes. WHY HOW???

// NOTEEEEEEEEE: Promises will always be handled before callbacks !!!!!
// NOTEEEEEEEEE: Callbacks from Promise Handlers enter MicroTask Queue rather than Task Queue !!!!!
// MicroTask Queue is always given priority over Task Queue !!!