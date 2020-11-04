const API_KEY = "ad421559b251c39822b33da0269b1c8e";

const COORDS = 'coords';


function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}   // 위도 경도 LS 에 저장하기 
    // 저장이 되어있기 때문에 더이상 물어보지 않음

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
        // key 와 value 가 이름이 같다면 한 번만 쓰면 된다
    };
    saveCoords(coordsObj);
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