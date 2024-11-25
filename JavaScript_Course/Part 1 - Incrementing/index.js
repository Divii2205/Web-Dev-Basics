// document.getElementById("count-el").innerText = 5

// let myAge = 18
// let humanDogRatio = 5

// let myDogAge = myAge * humanDogRatio

// console.log(myDogAge)

// let bonusPoints = 50
// console.log (bonusPoints)
// bonusPoints = bonusPoints + 50
// console.log (bonusPoints)
// bonusPoints = bonusPoints - 75
// console.log (bonusPoints)
// bonusPoints = bonusPoints + 45
// console.log (bonusPoints)

// function increment(){
//     console.log("The button was clicked")
// }

// function countdown(){
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }

// countdown()

// function number(){
//     console.log(42)
// }

// number()

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function lap(){
//     console.log(lap1 + lap2 + lap3)
// }

// lap()

// let lapsCompleted = 0

// function lapTime(){
//     lapsCompleted = lapsCompleted + 1
//     console.log(lapsCompleted)
// }

// lapTime()
// lapTime()
// lapTime()

let count = 0
let countEl = document.getElementById("count-el")

function increment(){
    count += 1
    countEl.innerText = count
}

let saveEl = document.getElementById("save-el")

function save(){
    let countStr = " " + count + " - "
    saveEl.innerText += countStr
    console.log(count)

    countEl.innerText = 0
    count = 0
}



