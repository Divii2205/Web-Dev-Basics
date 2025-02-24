// FETCHING ALL THE TICKET CONTAINERS IN AN ARRAY
let ticketContArr = document.querySelectorAll(".ticket-cont");
let removeBtn = document.querySelector(".remove-btn");

let removeFlag = false;

// REMOVE BUTTON HANDLES removeFlag and creates ALERT
removeBtn.addEventListener("click", function () {
  removeFlag = !removeFlag;

  if (removeFlag === true) {
    alert("delete button has been activated");
    removeBtn.style.backgroundColor = "red";
  } else {
    removeBtn.style.backgroundColor = "inherit";
  }
});

// TRAVERSING THROUGH THAT ARRAY
for (let i = 0; i < ticketContArr.length; i++) {
  // ADDING CLICK EVENTLISTENER TO THE ICON
  ticketContArr[i].addEventListener("click", (e) => {
    if (!removeFlag) return;
    let id = ticketContArr[i].querySelector('.ticket-id').innerText;
    ticketContArr[i].remove(); // ui Removal

    // WRITE SOLUTION HERE ============================================
    let index = getIndex(id);

    ticketsArr.splice(index, 1);
    localStorage.setItem("ticketsDB", JSON.stringify(ticketsArr));
  });
}

function getIndex(id){
    let index = ticketArr.findIndex(ticket => {
      return ticket.ticketID === id;
    });
    return index;
}