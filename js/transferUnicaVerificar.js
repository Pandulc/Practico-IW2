var monto = document.getElementById('monto');
var boton = document.querySelector('button[type="submit"]');

var montoGuardado = parseFloat(localStorage.getItem('monto'));
monto.textContent = "ARS $ " + montoGuardado.toLocaleString('es-AR');

boton.addEventListener('click', () => {
    event.preventDefault();
    window.location.href = 'transferUnicaConfirmacion.html';
});