function fetchUser() {
    return new Promise(resolve => {
        setTimeout(() => resolve({ name: "Alice" }), 2000);
    });
}

// fetchUser().then(user => console.log(user));

async function getUser(){
    const data = await fetchUser();
    console.log(data);    
}

getUser()
console.log("Hii");

// Since the getuser function is made synchronous by using await, shoulnd't "hii" be printed after the function executes??