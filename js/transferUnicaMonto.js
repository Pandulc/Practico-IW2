var montoDisponible = document.getElementById('monto-disponible');
var montoIngresado = document.getElementById('monto-ingresado');
var impuesto = document.getElementById('impuesto')
var boton = document.querySelector('button[type="submit"]');


// Tamanio default del input
montoIngresado.style.width = ((montoIngresado.value.length + 2.2) * 38) + 'px';

montoIngresado.addEventListener('input', () =>{
    // tamanio dinamico, se agranda 30 pixeles por cada caracter que se ingresa
    montoIngresado.style.width = ((montoIngresado.value.length + 1) * 30) + 'px';
});

montoIngresado.addEventListener('keyup', () =>{
    
    if(montoIngresado.value == ""){
        // Si el valor es vacio, es decir, borre todo lo que habia escrito, vuelvo a poner el tamanio default
        montoIngresado.style.width = ((montoIngresado.value.length + 2.2) * 38) + 'px';
    }
    else{
        impuesto.textContent = (montoIngresado.value * 0.21).toFixed(2);
    }
    
});

boton.addEventListener('click', () =>{
    event.preventDefault();
    
    montoDisponible.textContent = montoDisponible.textContent.replace(/ARS|\$|\./g, "");

    var montoIngresadoNumero = parseFloat(montoIngresado.value);
    var montoDisponibleNumero = parseFloat(montoDisponible.textContent);

    if(montoIngresadoNumero < montoDisponibleNumero){
        localStorage.setItem('monto', montoIngresadoNumero); // Guardo el monto para recuperarlo en la proxima pantalla
        
        setTimeout(() => {
            window.location.href = "transferUnicaVerificacion.html";
        }, 100);
    }
});