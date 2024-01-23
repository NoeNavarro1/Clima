const APIKEY = 'f3c28754c0416c6410dc8c7bc29a239c';

const URLBASE = 'https://api.openweathermap.org/data/2.5/weather?';

async function request(url) {
    return fetch(url).then(data => data.json());
}

async function getWheater(lat, lon) {
    const url = `${URLBASE}lat=${lat}&lon=${lon}&appid=${APIKEY}`;
    const weather = await request(url);
    updateDOM(weather.name, weather.main.temp);
}

async function getWheaterByCity(city) {
    const url = URLBASE + `q=${city}&appid=${APIKEY}`;
    const weather = await request(url);
    updateDOM(weather.name, weather.main.temp);
    //buscar por nombre de cuidad
}

function updateDOM(city, temp) {
    //actualizar h2 de la cuidad
    //actualizar h2 de temp
    //actualizar fondo dependiendo de la temperatura
    document.querySelector('.cuidad').textContent = city;
    document.querySelector('.temp').textContent = Math.round(temp - 273.15);
    document.querySelector('color');
    let color = '';
    if (temp > 20) {
        color = '#ec8d6e';//rojo   
    } else (temp < 20)
    color = '#8abf4b';//verde
    document.body.style.backgroundColor = color;
    document.getElementById("form").addEventListener("submit", function (event) {
        event.preventDefault();
        const inputValue = document.getElementById("ciudad").value;
        getWheaterByCity(inputValue);
    });
}


navigator.geolocation.getCurrentPosition(position => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    getWheater(lat, lon);

});