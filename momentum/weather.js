const COORDS = 'coords';




function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = positon.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
        // key 와 value 가 이름이 같다면 한 번만 쓰면 된다
    }
}
function handleGeoError() {
    console.log(`Can't access geo locaton`);
}
function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}
function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null) {
            askForCoords();
    } else {
        // getWeather
    }
}

function init() {
    loadCoords();
}

init();