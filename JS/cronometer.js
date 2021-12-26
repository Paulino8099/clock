
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
// activando y seleccionando el cronómetro
function activeChronometer() {
    if (localStorage.getItem('active') == 'chronometer') {
        document.querySelector('.container-chronometer').classList.add('active');

        document.querySelector('.container-clock').classList.remove('active');

        // selection btn
        document.querySelector('.btn-chronometer').classList.add('active');
        document.querySelector('.btn-clock').classList.remove('active');
    }
}
