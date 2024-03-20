var botonSubmit = document.querySelector('button[type="submit"]');
var user = document.querySelector('input[type="email"]');
var password = document.querySelector('input[type="password"]');
var loading = document.getElementById('loader')
var overlay = document.getElementById('overlay')

user.addEventListener('input', () => {
    botonSubmit.disabled = false;
  });
  
  password.addEventListener('input', () => {
    botonSubmit.disabled = false;
  });
  

botonSubmit.addEventListener('click', () => {

    event.preventDefault(); // Prevenir envío por defecto del formulario


    if (!user.value.includes('@gmail.com')) {
        botonSubmit.disabled = true;
        alert('Ingrese un email válido');
        return false;
      }
    
      if (password.value.length < 8) {
        botonSubmit.disabled = true;
        alert('Ingrese una contraseña válida (mínimo 8 caracteres)');
        return false;
      }
    
    loader.style.display = 'block';
    overlay.style.display = 'block';
    
    // Guardar datos en localStorage
    localStorage.setItem('user', user.value);
    // Opcionalmente, puedes encriptar la contraseña antes de guardarla
    localStorage.setItem('password', password.value);
    
    setTimeout(() => {
        botonSubmit.disabled = false;
        loader.style.display = 'none';
        overlay.style.display = 'none';
        window.location.href = "homeTransferencia.html"
        return;
    }, 1000);
    
});





