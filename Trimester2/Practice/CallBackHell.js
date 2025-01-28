// Start with basics of logic and mathematics
// Pick a Programming language and play around with it
// Learn DSA
// Learn Development
// Apply for internship
// Gain experience
// Choose domain and expertise
// Apply for jobs
// Gain Experience

// ------------

// function start(callback){
//     setTimeout(() => {
//         console.log("Start with basics of logic and mathematics");
//         callback();     
//     }, 1000)
// }

// start(() => {
//     setTimeout(() => {
//         console.log("Start with basics of logic and mathematics");
//         setTimeout(() => {
//             console.log("Pick a programming langauge");
//             setTimeout(() => {
//                 console.log("Learn DSA");
//                 setTimeout(() => {
//                     console.log("Learn Development");
//                     setTimeout(() => {
//                         console.log("Apply for internship");
//                         setTimeout(() => {
//                             console.log("Gain experience");
//                             setTimeout(() => {
//                                 console.log("Choose domain and expertise");
//                                 setTimeout(() => {
//                                     console.log("Apply for jobs");
//                                     setTimeout(() => {
//                                         console.log("Gain experience");                                           
//                                     }, 1000)
//                                 }, 1000)
//                             }, 1000)
//                         }, 1000)
//                     }, 1000)
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// })

// ------------


function day(callback){
    console.log("Wake up");
    setTimeout(() => {
        callback();
    }, 1000)
}

day(()=>{
    console.log("Freshen up");
    setTimeout(() => {
        console.log("Have breakfast");
        setTimeout(() => {
            console.log("Sit for studies");
            setTimeout(() => {
                console.log("Have lunch");
                setTimeout(() => {
                    console.log("Round 2 of studying");
                    setTimeout(() => {
                        console.log("Dinner time");
                        setTimeout(() => {
                            console.log("Enough for the day");
                        }, 500)
                    }, 4000)
                }, 1000)
            }, 4000)
        }, 1000)
    }, 1000)
})