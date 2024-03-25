var panel = document.getElementById('panel');
var boton = document.getElementById('boton-desplegar');
var botonSubir = document.getElementById('subir-archivo');
var botonSig = document.getElementById('boton-siguiente');

botonSubir.addEventListener('click', () =>{
    event.preventDefault();
    botonSig.style.backgroundColor = '#311b92';
});

boton.addEventListener('click', () =>{
    var estiloBoton = window.getComputedStyle(boton)
    
    if(estiloBoton.backgroundImage.match("../img/desplegar.svg")){
        boton.style.backgroundImage="url(../img/colapsar.svg)";
        botonSig.style.marginTop = '13.8rem';
        panel.classList.toggle('open');
    }
    else{
        boton.style.backgroundImage="url(../img/desplegar.svg)"
        botonSig.style.marginTop = '31rem';
        panel.classList.remove('open');
    }
});

botonSig.addEventListener('click', () =>{
    event.preventDefault();
    window.location.href = 'transferMultipleConfirmacion.html';
})