function getUser() {
    return new Promise(resolve => setTimeout(() => resolve("User data"), 1000));
}
function getWeather() {
    return new Promise(resolve => setTimeout(() => resolve("Weather data"), 1000));
}

async function print(){
    const user = await getUser();
    console.log(user);
    const weather = await getWeather();
    console.log(weather);    
}

print();