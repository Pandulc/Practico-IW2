var botonSubmit = document.querySelector('button[type="submit"]');
var user = document.querySelector('input[type="email"]');
var password = document.querySelector('input[type="password"]');
var loading = document.getElementById('loader')
var overlay = document.getElementById('overlay')
var mensajeError = document.getElementById('mensaje-error')

user.addEventListener('input', () => {
    checkInputs();
  });
  
  password.addEventListener('input', () => {
    checkInputs();
  });

checkInputs = () => {
    
    if (user.value.includes('@gmail.com') && password.value.length >= 8) {
      botonSubmit.style.backgroundColor = '#311b92';
    } else {
      botonSubmit.style.backgroundColor = '#7e6ec5';
    }
}
  

botonSubmit.addEventListener('click', () => {

    event.preventDefault(); // Prevenir envío por defecto del formulario


    if (!user.value.includes('@gmail.com')) {
        
        mensajeError.textContent = "Ingrese un email valido."
        return false;
      }
    
      if (password.value.length < 8) {
        
        mensajeError.textContent = "Ingrese una contraseña válida (mínimo 8 caracteres)"
        return false;
      }
    
    loader.style.display = 'block';
    overlay.style.display = 'block';
    
    
    // Guardar datos en localStorage
    localStorage.setItem('user', user.value);
    // Opcionalmente, puedes encriptar la contraseña antes de guardarla
    localStorage.setItem('password', password.value);
    
    setTimeout(() => {
        loader.style.display = 'none';
        overlay.style.display = 'none';
        window.location.href = "homeTransferencia.html"
        return;
    }, 1000);
    
});





