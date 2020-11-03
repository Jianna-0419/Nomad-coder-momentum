const body = document.querySelector("body");
const IMG_NUMBER = 5;



function paintImage(imgNumber) {
    const image = new Image();
    image.src = `/images/${imgNumber + 1}.jpg`;
    image.classList.add('bgImage');
    body.prepend(image);
}

function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();


/* 


    Math.random() * # 
        = # 번이 나올때까지 숫자를 랜덤으로 출력하는 것 (소수점 포함)
    Math.floor/ceil
        => floor : 소수점은 무조건 버리기
        => ceil :  무조건 올림 
    
*/