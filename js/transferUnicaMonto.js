var montoDisponible = document.getElementById('monto-disponible');
var montoIngresado = document.getElementById('monto-ingresado');
var impuesto = document.getElementById('impuesto')
var boton = document.querySelector('button[type="submit"]');

montoIngresado.style.width = ((montoIngresado.value.length + 2.2) * 38) + 'px';

montoIngresado.addEventListener('input', () =>{
    montoIngresado.style.width = ((montoIngresado.value.length + 1) * 30) + 'px';
});

montoIngresado.addEventListener('keyup', () =>{
    
    if(montoIngresado.value == ""){
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