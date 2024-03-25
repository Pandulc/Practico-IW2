var opcion1 = document.getElementById('unico');
var opcion2 = document.getElementById('multiple');
var boton = document.querySelector('button[type="submit"]');

opcion1.addEventListener('change', () => {
    boton.style.backgroundColor = '#311b92';
});

opcion2.addEventListener('change', () => {
    boton.style.backgroundColor = '#311b92';
});

boton.addEventListener('click', () =>{
    event.preventDefault()

    if(opcion1.checked){
        window.location.href = "transferUnica.html";
    }
    else if(opcion2.checked){
        window.location.href = "transferMultiple.html";
    }
    else{}
});

