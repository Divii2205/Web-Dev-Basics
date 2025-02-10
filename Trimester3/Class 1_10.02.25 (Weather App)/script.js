let input = document.querySelector("input");

async function receive(place) {
    try{
        let data = await fetch (`http://api.weatherapi.com/v1/current.json?key=35af7ff606db422880d141328231305&q=${place}&aqi=no`)
        if(!data.ok){
            throw new Error("City not found");
        }
        let response = await data.json();
        console.log(response);
        document.querySelector(".weather p").innerText = response.location.name;
        document.querySelector(".temp").innerText = `${response.current.temp_c}` + "°C";
        document.querySelector(".weather_condition span").innerText = response.current.condition.text;
        document.querySelector(".weather span").innerText = response.location.localtime;
        document.querySelector(".weather_condition img").src = response.current.condition.icon;
    }
    catch(error){
        alert(`Error: ${error.message}`);
        input.value = '';
    }
}

document.querySelector("button").addEventListener("click", function(e){
    e.preventDefault();
    let place = input.value;
    receive(place);
    input.value = '';
})
