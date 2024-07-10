let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número secreto en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);   
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //el usuario no acertó
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'el número secreto es menor');
        } else {
            asignarTextoElemento('p', 'el número secreto es mayor');
        }
        intentos++;
        limpiarFormulario();
    }
    return;
}

function limpiarFormulario() {
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';
}

function generadorNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los números
    if(listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'ya se sortearon todos los números posibles');
    }

    //si el número generado esta incluido en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)){
        return generadorNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1','juego del # secreto'); 
    asignarTextoElemento('p', `escoja un # entre 1 a ${numeroMaximo}`);
    numeroSecreto = generadorNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar formulario
    limpiarFormulario();
    //indicar mensaje de intervalo de números
    //generar número aleatorio
    //reiniciar el número de intentos
    //deshabilitar el botón de nuevo juego
    condicionesIniciales();
    //deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    
}

condicionesIniciales();
