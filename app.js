// Coleta de elementos HTML
const elementSec = document.querySelector('#s-digit-1');


const elementMin = document.querySelector('#m-digit-1');


const elementHour = document.querySelector('#h-digit-1');


const elementStop = document.querySelector('#btn-stop');


const elementRes = document.querySelector('#btn-reset');


let seconds = 0;
let minutes = 0;
let hours = 0;


// Função Relogio
const clockFunction = () => {
    seconds = (seconds + 1) % 60;
    elementSec.textContent = String(seconds).padStart(2, '0');
    if (seconds === 0) {
        minutes = (minutes + 1) % 60;
        elementMin.textContent = String(minutes).padStart(2, '0');
        if (minutes === 0) {
            hours = (hours + 1) % 24;
            elementHour.textContent = String(hours).padStart(2, '0');
        }
    }
}

let clock = 0;

// Botao Start-Stop
elementStop.addEventListener('click', () => {
    if (elementStop.textContent === 'Stop') {
        clearInterval(clock);
        elementStop.textContent = 'Start';
    } else if (elementStop.textContent === 'Start') {
        clock = setInterval(clockFunction, 1000);
        elementStop.textContent = 'Stop';
    }
});

// Botao Reset
elementRes.addEventListener('click', () => {
        clearInterval(clock);
        seconds = 0;
        minutes = 0;
        hours = 0;
        elementHour.textContent = String(hours).padStart(2, '0');
        elementMin.textContent = String(minutes).padStart(2, '0');
        elementSec.textContent = String(seconds).padStart(2, '0');
        elementStop.textContent = 'Start';
});







