// function firstName (firstName, cb1, cb2){
//     console.log(firstName)
//     cb1("Arjun")
//     cb2(18)
// }

// function lastName (lastName){
//     console.log(lastName)
// }

// function printAge (age){
//     console.log(age)
// }

// firstName ("Divii", lastName, printAge)

// -------------

// firstName ("Divii", lastName ("Arjun"), printAge (18)) 
// ??? why wont this statement work?

// -------------

function calc (radius){
    Area.push(radius*radius*3.14)
    Circumference.push(6.28*radius)
    Diameter.push(2*radius)
}

let Area = []
let Circumference = []
let Diameter = []

let arrRadius = [1, 2, 4, 6, 8]

for (let i = 0; i<arrRadius.length; i++){
    calc(arrRadius[i])
}

console.log("Radius " , arrRadius)
console.log("Area " , Area)
console.log("Circumference " , Circumference)
console.log("Diameter " , Diameter)

