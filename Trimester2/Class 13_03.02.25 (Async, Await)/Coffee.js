function placeOrder(drink) {
    return new Promise(function (resolve, reject) {
        if (drink === "coffee") {
            resolve("Order for Coffee Placed");
        } else {
            reject("Order can not be Placed.");
        }
    });
}

function processOrder(orderPlaced) {
    return new Promise(function (resolve) {
        resolve(`${orderPlaced} and Served.`);
    });
}

// placeOrder("coffee")
// .then((result)=>{
//     return processOrder(result)
// })
// .then((result)=>{
//     console.log(result);    
// })
// .catch((result)=>{
//     console.log(result);    
// })

// Using async await

async function order(){
    try{
        let data = await placeOrder("coffee");
        let data2 = await processOrder(data);
        console.log(data2);
    }
    catch (err){
        console.log(err);        
    }
}

order()