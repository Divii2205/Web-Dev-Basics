function greet1(){
    console.log('Hiiii')
}
greet1()
// anything that concludes is an expression

//Function as expressions:
var greet2 = function(){
    console.log('Hello')
} 

// in the execution context, the entire function isn't defined seperately but is defined in terms of a variable
greet2()

// Function as a first class Citizen