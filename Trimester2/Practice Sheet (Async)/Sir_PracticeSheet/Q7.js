async function fetchUserData() {
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        if(!response.ok){
            throw new Error('Error')
        }
        let data = await response.json();
        console.log(data);
    } catch (error){
        console.error(error.message)
    }
}

fetchUserData();