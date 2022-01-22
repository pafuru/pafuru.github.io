const API_KEYS = "4092584d74514d556c28425573b0c27b";

function onGeoOk(position){
    const lati = position.coords.latitude;
    const long = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${long}&appid=${API_KEYS}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoerror(){
    alert("Can't fond you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoerror);