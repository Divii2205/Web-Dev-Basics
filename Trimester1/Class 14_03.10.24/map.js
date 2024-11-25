// Map method
// const transactions =[1000, 2000, 8000, 4000]
// const inrToUsd = 83
// 
// function convert(num){
    // return num/inrToUsd
// }
// 
// console.log(transactions.map(convert))

// let myArr = [ 1, 4, 3, 13, 12, 17, 20]

// function evenNo(arr){
//     let evenArr = []
//     for (let i = 0; i<myArr.length; i++){
//         if (arr[i]%2 == 0) evenArr.push(arr[i])
//     }
//     return evenArr
// }

// console.log(myArr.map(evenNo))

// --------------------
//filter method

// function getEven(arr){
//     return arr%2==0
// }

// console.log(myArr.filter(getEven))

// const transactions =[-1000, 2000, 8000, -4000]

// function withDraw(arr){
//     return arr<0
// }

// console.log(transactions.filter(withDraw))

// const transactions =[-1000, 2000, 8000, -4000, 5000]

// let sum = 0;

// function getDeposits (arr){
//     if (arr>0) {
//         sum += arr
//     }
//     return arr>0
// }

// console.log(transactions.filter(getDeposits))
// console.log(sum)

// --------------------
// reduce method

// let mySum = [1, 2, -1, 2, 7, 20]

// function total(acc, el){
//     acc = acc + el
//     return acc
// }

// console.log(mySum.reduce(total, 0))

// --------------------
// get the deposits convert to USD and find the sum

// const transactions = [-1000, 2000, 8000, -4000]
// const inrToUsd = 83
// function getDeposits(arr){
//     return arr>0
// }

// function convert (arr){
//     return arr/inrToUsd
// }

// function sum(acc, arr){
//     acc += arr
//     return acc
// }

// let neww = transactions.filter(getDeposits)
// console.log(neww)
// let newSum = neww.map(convert)
// console.log(newSum)
// console.log(newSum.reduce(sum))

// --------------------
// Chaining method

const transactions = [-1000, 2000, 8000, -4000]
const inrToUsd = 83
function getDeposits(arr){
    return arr>0
}

function convert (arr){
    return arr/inrToUsd
}

function sum(acc, arr){
    acc += arr
    return acc
}

console.log(transactions.filter(getDeposits).map(convert).reduce(sum).toFixed(2))

// forEach
// every
// some 
// find 
// findIndex





