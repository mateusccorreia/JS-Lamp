const btnLamp = document.querySelector('button');
const imgLamp = document.getElementById('lamp-image');

function ligarLamp() {
    imgLamp.src = 'assets/lamp-on.png';
}

function desligarLamp() {
    imgLamp.src = 'assets/lamp-off.png';
}

function ligarDesligar () {
    if (btnLamp.textContent == 'Ligar') {
        ligarLamp();
        btnLamp.textContent = 'Desligar';
    } else {
        desligarLamp();
        btnLamp.textContent = 'Ligar'
    }
}

btnLamp.addEventListener('click', ligarDesligar)

//funcao passando a seta do mouse e double click
imgLamp.addEventListener('mouseover', ligarLamp);
imgLamp.addEventListener('mouseleave', desligarLamp)