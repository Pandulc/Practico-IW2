var boton = document.querySelector('button[type="submit"]');
var opcion1 = document.getElementById('wibond');
var opcion2 = document.getElementById('bancaria');
var destinatario = document.querySelector('input[type="text"]');

opcion1.addEventListener('change', () =>{
    destinatario.value="";
    boton.style.backgroundColor = '#7e6ec5';
    destinatario.placeholder= "Usuario, DNI, CUIT o CUIL";
})

opcion2.addEventListener('change', () =>{
    destinatario.value="";
    boton.style.backgroundColor = '#7e6ec5';
    destinatario.placeholder = "CBU, alias o CVU";
})

destinatario.addEventListener('input', () => {
    if(destinatario.value.trim() && (opcion1.checked || opcion2.checked)){
        boton.style.backgroundColor = '#311b92';
    }
    else{
        boton.style.backgroundColor = '#7e6ec5';
    }
});

boton.addEventListener('click', () =>{
    event.preventDefault()

    if(opcion1.checked && destinatario.value.trim()){
        window.location.href = "transferUnicaMonto.html";
    }
    else if(opcion2.checked && destinatario.value.trim()){
        window.location.href = "transferUnicaMonto.html";
    }
    else{}
});