const refs = {
    btnStart: document.querySelector(`button[data-start]`),
    btnStop: document.querySelector(`button[data-stop]`),  
    body: document.querySelector(`body`),  
};

//console.log(refs.btnStart);
//console.log(refs.btnStop);

refs.btnStart.addEventListener(`click`, onStart);
refs.btnStop.addEventListener(`click`, onStop);




let timeoutId = null;
refs.btnStop.setAttribute("disabled", true);

function onStart() {
    timeoutId = setInterval(changeBodyColor, 1000);
    refs.btnStart.setAttribute("disabled", true);
    refs.btnStop.removeAttribute("disabled");
    
    
};

function onStop() {
    refs.btnStart.removeAttribute("disabled");
    refs.btnStop.setAttribute("disabled", true);
 clearInterval(timeoutId);
 
 };

function changeBodyColor() {
    refs.body.style.backgroundColor = getRandomHexColor();
};

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };