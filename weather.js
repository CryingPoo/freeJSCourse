const COORDS = 'coords';
const API_KEY = '4f3af01aea1fd9d34c1392a2a2ca5f7c';
const weather = document.querySelector(".js-weather");

function getWeather(lat, lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`).then(
        response=>
            {return response.json()}
    ).then(json => {
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} celcius @ ${place}`;
    });
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askforCoords();
    } else {
        const parsedCoords = JSON.parse(loadedCoords);
        console.log(parsedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function askforCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function handleGeoSuccess(position){
    const latitude=position.coords.latitude;
    const longitude=position.coords.longitude;
    const coordsObj={
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}


function init(){
    loadCoords();
}

init();

function handleGeoError(){
    console.log("Error getting the Geo Coords")
}

function resetLocation(){
    localStorage.removeItem(COORDS);
    weather.innerText = "";
    loadCoords();
}