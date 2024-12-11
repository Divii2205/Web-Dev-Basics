let newDate = new Date("2025-01-01T00:00:00");
function updateTime(){
    let currentDate = new Date();

    const diffInMs = newDate - currentDate;
    const diffInSec = Math.floor(diffInMs / 1000);
    const diffInMins = Math.floor(diffInSec / 60);
    const diffInHrs = Math.floor(diffInMins / 60);
    const diffInDays = Math.floor(diffInHrs / 24);

    const text = document.querySelector("#countdown");

    text.textContent = `${diffInDays}d : ${diffInHrs%24}h : ${diffInMins%60}m : ${diffInSec%60}s`;  
}

setInterval(updateTime,1000);