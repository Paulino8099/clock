
let btnChronometer = document.querySelector('.btn-chronometer');

btnChronometer.addEventListener('click', () => {
    if (localStorage.getItem('active') === null) {
        localStorage.setItem('active', 'chronometer');
    }
    else {
        localStorage.setItem('active', 'chronometer');
    }
    activeChronometer();
});

activeChronometer();
// activando y seleccionando el cronómetro al darle click en el botón
function activeChronometer() {
    if (localStorage.getItem('active') == 'chronometer') {
        document.querySelector('.container-chronometer').classList.add('active');

        document.querySelector('.container-clock').classList.remove('active');

        // selection btn
        document.querySelector('.btn-chronometer').classList.add('active');
        document.querySelector('.btn-clock').classList.remove('active');
    }
}


const restartBtn = document.querySelector('.btn-restart'),
    startBtn = document.querySelector('.btn-start'),
    stopBtn = document.querySelector('.btn-stop');

restartBtn.addEventListener('click', restart);
startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);

// variables para los contadores
let h = 0,
    m = 0,
    s = 0,
    ms = 0,
    startTimer;

// valores de los contadores físicos del cronómetro
let miliSeconds = document.querySelector('.miliSeconds-chronometer')
let seconds = document.querySelector('.seconds-chronometer');
let minutes = document.querySelector('.minutes-chronometer');
let hours = document.querySelector('.hours-chronometer');

function restart() {
    clearInterval(startTimer);
    h = 0;
    m = 0;
    s = 0;
    ms = 0;
    hours.innerHTML = '00';
    minutes.innerHTML = '00';
    seconds.innerHTML = '00';
    miliSeconds.innerHTML = '0';

    restartBtn.classList.add('active');
    startBtn.classList.remove('active');
    stopBtn.classList.remove('active');
}
function start() {
    startTimer = setInterval(() => {
        valueChronometer();
        ms++;

        if (ms == 10) {
            ms = 0;
            s++;
        }
        if (s == 60) {
            s = 0;
            m++;
        }
        if (m == 60) {
            m = 0;
            h++;
        }

    }, 100);

    // activando el inidicador de btn start indicarle al usuario que ya ha dado click en dicho btn y que además no podrá dar un segundo click en el
    restartBtn.classList.remove('active');
    startBtn.classList.add('active');
    stopBtn.classList.remove('active');
}

function stop() {
    clearInterval(startTimer);

    // seleccionando el btn stop y deselecionando los demás btns y activando la indicación de que el usuario ha dado click al btn stop
    restartBtn.classList.remove('active');
    startBtn.classList.remove('active');
    stopBtn.classList.add('active');
}

// Depositando valores en los contadores del cronómetro; milisegundos, segundos, minutos y las horas
function valueChronometer() {
    miliSeconds.innerHTML = `${ms}`;
    if (s < 10) {
        seconds.innerHTML = `0${s}`;
    } else {
        seconds.innerHTML = `${s}`;
    }

    if (m < 10) {
        minutes.innerHTML = `0${m}`;
    } else {
        minutes.innerHTML = `${m}`;
    }

    if (h < 10) {
        hours.innerHTML = `0${h}`;
    } else {
        hours.innerHTML = `${h}`;
    }
}