// Query Selectors
let addBtn = document.querySelector(".add-btn");
let modalCont = document.querySelector(".modal-cont");
let textAreaCont = document.querySelector(".textArea-cont");

let ticketsArr = [];
// Modal popup open and close
let addBtnFlag = false;
addBtn.addEventListener('click', () => {
    addBtnFlag = !addBtnFlag;
    if(addBtnFlag) modalCont.style.display = "flex";
    else  modalCont.style.display = "none";
})

// Function to create a new ticket
let mainCont = document.querySelector(".main-cont");
function createTicket(taskColor, task, id){
    const ticketCont = document.createElement('div');
    ticketCont.setAttribute('class', 'ticket-cont');
    ticketCont.innerHTML = `<div class="ticket-color ${taskColor}"></div>
                <div class="ticket-id">${id}</div>
                <div class="task-area" contenteditable="false">${task}</div>
                <div class="ticket-lock">
                    <i class="fa-solid fa-lock"></i>
                </div>`;
    mainCont.appendChild(ticketCont);  
    handleRemoval(ticketCont);  
    changeTaskColor(ticketCont, taskColor);
    toggleLock(ticketCont);

    ticketsArr.push({ticketId: id, colorOfTicket: taskColor, ticketTask: task});
}

// Get data of the task and add to task ticket
let taskColor = "lightblue";
const keysPressed = {};

modalCont.addEventListener("keydown", (e) => {
  keysPressed[e.key] = true;

  // Check for the Shift + Enter combination
  if (keysPressed["Shift"] && keysPressed["Enter"]) {
    const task = textAreaCont.value;
    const id = shortid();
    
    // Create the task ticket
    createTicket(taskColor, task, id);
    modalCont.style.display = "none";
    addBtnFlag = false;
    textAreaCont.value = "";

    // Clear pressed keys to prevent duplicate execution
    keysPressed["Shift"] = false;
    keysPressed["Enter"] = false;
  }
});

// Remove the key from tracking when released
modalCont.addEventListener("keyup", (e) => {
  delete keysPressed[e.key];
});

// Creating an array of the different colors in order
let colorArr = [];

// Activating the selected color
let allPriorityColors = document.querySelectorAll('.priority-color');
allPriorityColors.forEach(function (colorEl) {
    colorEl.addEventListener('click', () => {
        allPriorityColors.forEach(function (removeEl) {
            removeEl.classList.remove('active');
        })
        colorEl.classList.add('active');
        taskColor = colorEl.classList[0];
    })
    colorArr.push(colorEl.classList[0]);    
})

// Activating the remove icon
let removeBtn = document.querySelector('.remove-btn');
let removeFlag = false;

removeBtn.addEventListener('click', () => {
    removeFlag = !removeFlag;
    if(removeFlag){
        alert('Erase button activated!');
        removeBtn.style.color = 'red';
    } else {
        alert('Erase button de-activated!');
        removeBtn.style.color = 'rgb(222, 222, 222)' ;
    }

})

// Function to remove ticket
function handleRemoval(ticketCont){
    let allTicketCont = document.querySelectorAll('.ticket-cont');
    allTicketCont.forEach(eachTicket => {
        eachTicket.addEventListener('click', ()=>{
            if(removeFlag) eachTicket.remove();
        })
    })
}

// Function to change color of ticket
function changeTaskColor(ticketCont, taskColor){
    let index = colorArr.indexOf(taskColor);
    let colorDiv = ticketCont.querySelector('.ticket-color');

    colorDiv.addEventListener('click', () => {        
        index++;
        index = index % colorArr.length;
        colorDiv.classList.replace(colorDiv.classList[1], colorArr[index]);        
    })
}

// Toggling the lock icon on ticket
let lockOpen = false;

function toggleLock(ticketCont){
    let ticketLock = ticketCont.querySelector('.ticket-lock');
    let ticketTaskArea = ticketCont.querySelector('.task-area');

    ticketLock.addEventListener('click', function(){
        lockOpen = !lockOpen;   
        if(lockOpen){
            ticketLock.innerHTML = `<i class="fa-solid fa-lock-open"></i>`;
            ticketTaskArea.setAttribute('contenteditable', 'true');
        } else {
            ticketLock.innerHTML = `<i class="fa-solid fa-lock"></i>`;
            ticketTaskArea.setAttribute('contenteditable', 'false');
        }
    })
}

// Deleting all tickets
let removeAllBtn = document.querySelector('.remove-all-btn');

removeAllBtn.addEventListener('click', () => {
    let confirmation = prompt("Are you sure you want to delete all tickets? (Y/N)");
    if(confirmation.trim().toLowerCase() === 'y' ){
        mainCont.innerHTML = "";
    }
})

// Activating the toolBox Colors
let toolboxColors = document.querySelectorAll('.color');
let clickCount = Array.from({length: colorArr.length}, () => 0);


toolboxColors.forEach(toolboxColor => {     
    toolboxColor.addEventListener('click', () => {
        let toolBoxColorSelected = toolboxColor.classList[0];
        let clickIndex = colorArr.indexOf(toolBoxColorSelected);
        let clickIndexValue = clickCount[clickIndex];
        
        let allTickets = document.querySelectorAll('.ticket-cont');
        allTickets.forEach(ticket => {
            let ticketColor = ticket.querySelector('.ticket-color');
            if(clickIndexValue%2 === 1) ticket.style.display = "block";
            else {
                if(ticketColor.classList[1] === toolBoxColorSelected) ticket.style.display = "block";
                else ticket.style.display = "none";
            }          
        })
        clickCount[clickIndex]++;
    })
})