
let containerColor = document.querySelector('.container-colors').children;

// guardando color seleccionado en el localStorage
setDataLS();
function setDataLS() {
    if (localStorage.getItem('color') === null) {
        localStorage.setItem('color', '');
    }

    for (let i = 0; i < containerColor.length; i++) {
        containerColor[i].addEventListener('click', () => {
            // accediendo a cada nombre de la lista de cada color 
            let selecctionColor = containerColor[i].classList[0];

            // seleccionando el color para guardarlo en el localStorage
            selectionSaveColor();
            function selectionSaveColor() {
                if (selecctionColor == 'RebeccaPurple') {
                    localStorage.setItem('color', 'RebeccaPurple');
                }
                if (selecctionColor == 'LimeGreen') {
                    localStorage.setItem('color', 'LimeGreen');
                }
                if (selecctionColor == 'MediumSpringGreen') {
                    localStorage.setItem('color', 'MediumSpringGreen');
                }
                if (selecctionColor == 'LightSeaGreen') {
                    localStorage.setItem('color', 'LightSeaGreen');
                }
                if (selecctionColor == 'Yellow') {
                    localStorage.setItem('color', 'Yellow');
                }
                if (selecctionColor == 'Chocolate') {
                    localStorage.setItem('color', 'Chocolate');
                }
                if (selecctionColor == 'DarkSlateGray') {
                    localStorage.setItem('color', 'DarkSlateGray');
                }
                if (selecctionColor == 'Crimson') {
                    localStorage.setItem('color', 'Crimson');
                }
                if (selecctionColor == 'DeepPink') {
                    localStorage.setItem('color', 'DeepPink');
                }
                if (selecctionColor == 'Tomato') {
                    localStorage.setItem('color', 'Tomato');
                }
            }
            // seleccionando y indicandole al usuario que ha dado click en el btn. Esta configuración debe de quedarse guardado en el localStorage
            selecctionColorBtn();
        });
    }
}
// seleccionando y indicandole al usuario que ha dado click en el color deseado y inmediatamente este color se le va aplicar a toda la configuración de la app. Esta configuración debe de quedarse guardado en el localStorage
selecctionColorBtn();
function selecctionColorBtn() {
    // color 1 "RebeccaPurple"
    if (localStorage.getItem('color') == 'RebeccaPurple') {

        document.documentElement.style.setProperty('--color_grey2', '#663399');

        containerColor[0].classList.add('active');
        containerColor[1].classList.remove('active');
        containerColor[2].classList.remove('active');
        containerColor[3].classList.remove('active');
        containerColor[4].classList.remove('active');
        containerColor[5].classList.remove('active');
        containerColor[6].classList.remove('active');
        containerColor[7].classList.remove('active');
        containerColor[8].classList.remove('active');
        containerColor[9].classList.remove('active');
    }
    // color 2 "LimeGreen"
    if (localStorage.getItem('color') == 'LimeGreen') {
        
        document.documentElement.style.setProperty('--color_grey2', '#32cd32');

        containerColor[0].classList.remove('active');
        containerColor[1].classList.add('active');
        containerColor[2].classList.remove('active');
        containerColor[3].classList.remove('active');
        containerColor[4].classList.remove('active');
        containerColor[5].classList.remove('active');
        containerColor[6].classList.remove('active');
        containerColor[7].classList.remove('active');
        containerColor[8].classList.remove('active');
        containerColor[9].classList.remove('active');
    }
    // color 3 "MediumSpringGreen"
    if (localStorage.getItem('color') == 'MediumSpringGreen') {
        
        document.documentElement.style.setProperty('--color_grey2', '#00fa9a');

        containerColor[0].classList.remove('active');
        containerColor[1].classList.remove('active');
        containerColor[2].classList.add('active');
        containerColor[3].classList.remove('active');
        containerColor[4].classList.remove('active');
        containerColor[5].classList.remove('active');
        containerColor[6].classList.remove('active');
        containerColor[7].classList.remove('active');
        containerColor[8].classList.remove('active');
        containerColor[9].classList.remove('active');
    }
    // color 4 "LightSeaGreen"
    if (localStorage.getItem('color') == 'LightSeaGreen') {
        
        document.documentElement.style.setProperty('--color_grey2', '#20b2aa');

        containerColor[0].classList.remove('active');
        containerColor[1].classList.remove('active');
        containerColor[2].classList.remove('active');
        containerColor[3].classList.add('active');
        containerColor[4].classList.remove('active');
        containerColor[5].classList.remove('active');
        containerColor[6].classList.remove('active');
        containerColor[7].classList.remove('active');
        containerColor[8].classList.remove('active');
        containerColor[9].classList.remove('active');
    }
    // color 5 "Yellow"
    if (localStorage.getItem('color') == 'Yellow') {
        
        document.documentElement.style.setProperty('--color_grey2', '#909008');

        containerColor[0].classList.remove('active');
        containerColor[1].classList.remove('active');
        containerColor[2].classList.remove('active');
        containerColor[3].classList.remove('active');
        containerColor[4].classList.add('active');
        containerColor[5].classList.remove('active');
        containerColor[6].classList.remove('active');
        containerColor[7].classList.remove('active');
        containerColor[8].classList.remove('active');
        containerColor[9].classList.remove('active');
    }
    // color 6 "Chocolate"
    if (localStorage.getItem('color') == 'Chocolate') {
        
        document.documentElement.style.setProperty('--color_grey2', '#d2691e');

        containerColor[0].classList.remove('active');
        containerColor[1].classList.remove('active');
        containerColor[2].classList.remove('active');
        containerColor[3].classList.remove('active');
        containerColor[4].classList.remove('active');
        containerColor[5].classList.add('active');
        containerColor[6].classList.remove('active');
        containerColor[7].classList.remove('active');
        containerColor[8].classList.remove('active');
        containerColor[9].classList.remove('active');
    }
    // color 7 "DarkSlateGray"
    if (localStorage.getItem('color') == 'DarkSlateGray') {
        
        document.documentElement.style.setProperty('--color_grey2', '#305050');

        containerColor[0].classList.remove('active');
        containerColor[1].classList.remove('active');
        containerColor[2].classList.remove('active');
        containerColor[3].classList.remove('active');
        containerColor[4].classList.remove('active');
        containerColor[5].classList.remove('active');
        containerColor[6].classList.add('active');
        containerColor[7].classList.remove('active');
        containerColor[8].classList.remove('active');
        containerColor[9].classList.remove('active');
    }
    // color 8 "Crimson"
    if (localStorage.getItem('color') == 'Crimson') {
        
        document.documentElement.style.setProperty('--color_grey2', '#dc143c');

        containerColor[0].classList.remove('active');
        containerColor[1].classList.remove('active');
        containerColor[2].classList.remove('active');
        containerColor[3].classList.remove('active');
        containerColor[4].classList.remove('active');
        containerColor[5].classList.remove('active');
        containerColor[6].classList.remove('active');
        containerColor[7].classList.add('active');
        containerColor[8].classList.remove('active');
        containerColor[9].classList.remove('active');
    }
    // color 9 "DeepPink"
    if (localStorage.getItem('color') == 'DeepPink') {
        
        document.documentElement.style.setProperty('--color_grey2', '#ff1493');

        containerColor[0].classList.remove('active');
        containerColor[1].classList.remove('active');
        containerColor[2].classList.remove('active');
        containerColor[3].classList.remove('active');
        containerColor[4].classList.remove('active');
        containerColor[5].classList.remove('active');
        containerColor[6].classList.remove('active');
        containerColor[7].classList.remove('active');
        containerColor[8].classList.add('active');
        containerColor[9].classList.remove('active');
    }
    // color 10 "Tomato"
    if (localStorage.getItem('color') == 'Tomato') {
        
        document.documentElement.style.setProperty('--color_grey2', '#ff6347');

        containerColor[0].classList.remove('active');
        containerColor[1].classList.remove('active');
        containerColor[2].classList.remove('active');
        containerColor[3].classList.remove('active');
        containerColor[4].classList.remove('active');
        containerColor[5].classList.remove('active');
        containerColor[6].classList.remove('active');
        containerColor[7].classList.remove('active');
        containerColor[8].classList.remove('active');
        containerColor[9].classList.add('active');
    }
}
// Acción para mostrar la paleta de colores al dar click en el btn redondo
showPaetteColors();
function showPaetteColors() {
    let containerColor = document.querySelector('.container-colors');
    containerColor.addEventListener('click', () => {
        containerColor.classList.toggle('active');
    });
}

