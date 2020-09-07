const form = document.querySelector(".js-form"),
    input = form.querySelector("#nameInput"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`
}

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleNameSubmit(){
    event.preventDefault();
    const currentValue = input.value;
    input.value="";
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleNameSubmit);
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser===null){
        //user does not exist
        askForName();
    }else{
        //user exists
        paintGreeting(currentUser);
    }
}

function clearName(){
    localStorage.removeItem('currentUser');
    greeting.classList.remove(SHOWING_CN);
    loadName();
}

function init(){
    loadName();
}

init();