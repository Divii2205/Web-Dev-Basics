
let cards = []

let sum = 0
let hasBlackJack = false
let isAlive = false

let message = " "
let messageEl = document.getElementById("message-el")

let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

// Objects - store data in-depth - composite / complex data type
// key-value pairs

//bracket notation??? while using the object and the key
let player = {
    name: "Divii",
    chips: 145
}

// methods: functions attached to objects

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
    let randomCard = Math.floor (Math.random()*13 + 1)
    if (randomCard === 1){
        randomCard = 11
    } else if (randomCard > 10 ){
        randomCard = 10
    }
    return randomCard
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard ()
    let secondCard = getRandomCard ()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }


    sumEl.textContent = "Sum: " +  sum
    if (sum <= 20){
        message = "Do you want to draw a new card?"
    } else if (sum === 21){
        message = "You've got Blackjack!"
        hasBlackjack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    
    messageEl.textContent = message
}

function newCard(){
    if (isAlive === true && hasBlackJack === false){
        let card = getRandomCard ()
        sum += card
        cards.push (card)
        renderGame()
    } else {
        messageEl.textContent = "Cannot draw a card!"
    }
}
