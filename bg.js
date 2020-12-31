// bg에서 배우는 것 
// Math 활용
// image 함수
// 
const body= document.querySelector("body");

const IMG_NUMBER = 5


function paintImage(imgNumber){
    const image = new Image();
    image.src = `pictures/${imgNumber}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
}

function genRandom(){
    const number = Math.ceil(Math.random()*IMG_NUMBER);
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();