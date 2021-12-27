
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
    let hours = document.querySelector('.hours-clock');
    let minutes = document.querySelector('.minutes-clock');
    let seconds = document.querySelector('.seconds-clock');
    let time = new Date();

    // hours
    if (time.getHours() <= 9) {
        hours.innerHTML = '0' + time.getHours();
    } else {
        hours.innerHTML = time.getHours();
    }
    if (time.getHours() > 12) {
        hours.innerHTML = `0${time.getHours() - 12}`;
        if (time.getHours() > 10) {
            hours.innerHTML = `${time.getHours() - 12}`;
        }
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