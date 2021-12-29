
let btnClock = document.querySelector('.btn-clock');

btnClock.addEventListener('click', () => {
    if (localStorage.getItem('active') === null) {
        localStorage.setItem('active', 'clock');
    }
    else {
        localStorage.setItem('active', 'clock');
    }
    activeClock();
});

activeClock();
// activando y seleccionando el reloj 
function activeClock() {
    if (localStorage.getItem('active') == 'clock') {
        document.querySelector('.container-clock').classList.add('active');

        document.querySelector('.container-chronometer').classList.remove('active');

        // selection btn
        document.querySelector('.btn-clock').classList.add('active');
        document.querySelector('.btn-chronometer').classList.remove('active');
    }
}


// hora
getTime();
function getTime() {
    let am_pm = document.querySelector('body .container .container-clock .am-pm');

    let hours = document.querySelector('.hours-clock');
    let minutes = document.querySelector('.minutes-clock');
    let seconds = document.querySelector('.seconds-clock');
    let time = new Date();
    let timeHours = time.getHours();

    // am-pm ||| SI el contador "hora" detecta un número mayor a 12 se marcará "pm"
    if (timeHours >= 12) {
        am_pm.innerHTML = '.pm';
    }
    // hours
    // Cuando el contador de horas registre un número mayor a 12 al contador "horas" se le restrá 12
    if (timeHours > 12) {
        timeHours -= 12;
        hours.innerHTML = `0${timeHours}`;
    }
    // si el contador "horas" es igual a 0 con las siguientes indicaciones convertirá su valor a 1
    if (timeHours == 0 || timeHours == 00) {
        timeHours = 1;
    }
    // si el contador horas marca un número mayor a 10 se le va a retirar el 0
    if (timeHours > 10) {
        hours.innerHTML = `${timeHours - 12}`;
    }
    // si el contador "horas" es menor a 10 es decir que tiene un número de entre 1-9 se le agregará un cero delante
    if (timeHours < 10) {
        hours.innerHTML = '0' + timeHours;
    } else {
        hours.innerHTML = timeHours;
    }

    // minutes
    if (time.getMinutes() <= 9) {
        minutes.innerHTML = '0' + time.getMinutes();
    } else {
        minutes.innerHTML = time.getMinutes();
    }

    // seconds
    if (time.getSeconds() <= 9) {
        seconds.innerHTML = '0' + time.getSeconds();
    } else {
        seconds.innerHTML = time.getSeconds();
    }
} setInterval(getTime, 1000);

// fecha
getDate();
function getDate() {
    let time = new Date();
    let dayWeek = time.getDay();
    let day = time.getDate();
    let month = time.getMonth();
    let fullYear = time.getFullYear();

    // cambiando número del día de la semana por su repectivo nombre de la semana
    changingDay();
    function changingDay() {
        if (dayWeek == 0) {
            dayWeek = 'Sunday';
        }
        else if (dayWeek == 1) {
            dayWeek = 'Monday';
        }
        else if (dayWeek == 2) {
            dayWeek = 'Tuesday';
        }
        else if (dayWeek == 3) {
            dayWeek = 'Wednesday';
        }
        else if (dayWeek == 4) {
            dayWeek = 'Thursday';
        }
        else if (dayWeek == 5) {
            dayWeek = 'Friday';
        }
        else if (dayWeek == 6) {
            dayWeek = 'Saturday';
        }
    }

    // Cambiando el número del mes por su respectivo nombre del mes 
    changingMonth();
    function changingMonth() {
        if (month == 0) {
            month = 'January';
        }
        else if (month == 1) {
            month = 'February';
        }
        else if (month == 2) {
            month = 'March';
        }
        else if (month == 3) {
            month = 'April';
        }
        else if (month == 4) {
            month = 'May';
        }
        else if (month == 5) {
            month = 'June';
        }
        else if (month == 6) {
            month = 'July';
        }
        else if (month == 7) {
            month = 'August';
        }
        else if (month == 8) {
            month = 'September';
        }
        else if (month == 9) {
            month = 'October';
        }
        else if (month == 10) {
            month = 'November';
        }
        else if (month == 11) {
            month = 'December';
        }
    }

    let date = document.querySelector('.container-date');
    date.innerHTML = `${dayWeek} ${day} ${month} ${fullYear}`;
} setInterval(getDate, 1000);