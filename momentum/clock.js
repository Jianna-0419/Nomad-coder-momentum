const clockContainer = document.querySelector(".js-clock"),
      clockTitle = clockContainer.querySelector("h1");

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();

    clockTitle.innerText = 
        `${
            hours < 10 ? `0${hours}` : hours}:${
            minutes < 10 ? `0${minutes}` : minutes }:${
            seconds < 10 ? `0${seconds}` : seconds
    }`;
}

// 가만히 있어도 시간이 없데이트가 되야한다 

function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();

/* 
    setInterval(1-function, 2-ms )
        - 1 = 실행할 함수 / 2 = 실행 간격
        : 1을 2의 간격을 가지고 반복 실행하게 하기 
*/