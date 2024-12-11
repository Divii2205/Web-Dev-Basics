// // Current date and time
// const now = new Date(); 
// console.log(now);

// // Create specific date and time
// const specificDate = new Date("2024-12-25T13:53:50");
// console.log(specificDate);

// // Custom date
// const custDate = new Date(2024 , 4 , 20 , 14 , 23 , 45);
// // (year , monthIndex, day , hour , minute , second)
// // monthIndex - 0 = Jan , 11 = Dec
// console.log(custDate);

// -------

// const d = new Date()
// console.log(d);

// // data extraction from date object
// console.log(d.getFullYear());
// console.log(d.getMonth());
// console.log(d.getDay());
// // dayIndex - 0 = Sunday , 6 = Saturday
// console.log(d.getDate());

// console.log(d.getHours());
// console.log(d.getMinutes());
// console.log(d.getSeconds());
// console.log(d.getMilliseconds());

// -------

// let date1 = new Date("2024-11-01");
// let date2 = new Date("2025-11-10");

// // Method1
// // console.log(date2.getDate() - date1.getDate());

// // Method2
// // let one = date1.toISOString().slice(8,10);
// // let two = date2.toISOString().slice(8,10);
// // console.log(two-one);

// // Method3
// const diffInMs = date2 - date1;
// const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
// console.log(diffInDays);

// -------

// Calculate the time left for Christmas from this moment
let chrisDate = new Date("2024-12-25");
let currentDate = new Date();

const diffInMs = chrisDate - currentDate;
const diffInSec = Math.floor(diffInMs / 1000);
const diffInMins = Math.floor(diffInSec / 60);
const diffInHrs = Math.floor(diffInMins / 60);
const diffInDays = Math.floor(diffInHrs / 24);

console.log(
    `${diffInDays} Days ${diffInHrs} Hours ${diffInMins} Minutes ${diffInSec} Seconds`
);
