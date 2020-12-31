// greetings 에서 배우는것: local storage
// localstorage.setItem("name", "kim"); key값이 name, value가 kim
// localstorage.get("name")  .. value값을 return = "kim"
// localstorage.remove("name") ..key값이 name인 행 삭제
// localstorage.clear() .. 전체 localstorage삭제

const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greetings = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);

}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greetings.classList.add(SHOWING_CN);
    greetings.innerText = `hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser===null) {
        askForName()

    } else {
        paintGreeting(currentUser);
    }
}


function init(){
    loadName();
}

init();