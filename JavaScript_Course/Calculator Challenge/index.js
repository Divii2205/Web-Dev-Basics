let num1 = 8
let num2 = 2

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let sumEl = document.getElementById("sum-el")
let operatorEl = document.getElementById("operator")

function add(){
    sum = num1 + num2
    sumEl.textContent = "Sum: " + sum
    operatorEl.textContent = "+"
}

function subtract(){
    difference = num1 - num2
    sumEl.textContent = "Difference: " + difference
    operatorEl.textContent = "-"
}

function divide(){
    quotient = num1/num2
    sumEl.textContent = "Quotient: " + quotient
    operatorEl.textContent = "÷"
}

function multiply(){
    product = num1*num2
    sumEl.textContent = "Product: " + product
    operatorEl.textContent = "x"
}