//Arrays
// an ordered collection of data - index

// an array cannot contain multiple datatypes - in java
// it must be of the same datatype - in java

// ---------------------------------------

// let evenNums = [2, 'sst', false, 8, 10]
// console.log(evenNums)

// let multiple = []

// for (let i = 0; i<evenNums.length; i++){
//     multiple.push(evenNums[i]*2)
// }

// // multiple.unshift(0)

// console.log(multiple)

// ---------------------------------------

let cars = ['BMW', 'Porshe', 'Ferrari', 'Mercedes']

//Push
cars.push('Bentley')
console.log(cars)

//Pop
const popEl = cars.pop()
console.log(popEl, cars)

//Unshift
cars.unshift('Urus')
console.log(cars)

//Shift
const shiftEl = cars.shift()
console.log(shiftEl, cars)

