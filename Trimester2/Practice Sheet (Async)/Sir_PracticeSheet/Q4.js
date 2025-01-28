function fetchUser() {
    return new Promise(resolve => {
        setTimeout(() => resolve({ name: "Alice" }), 1000);
    });
}

// fetchUser().then(user => console.log(user));

async function getUser(){
    const data = await fetchUser();
    console.log(data);    
}

getUser()