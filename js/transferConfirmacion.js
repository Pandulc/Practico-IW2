var email = document.getElementById("email");
var whatsapp = document.getElementById("whatsapp");
var msgWhatsapp = document.getElementById("msgWhatsapp");
var botonSig = document.getElementById('btnSig')

email.addEventListener("click", function() {
    email.style.backgroundColor = "#f1f1f1";
    whatsapp.style.backgroundColor = "#ffff";
    msgWhatsapp.style.backgroundColor = "#ffff";
    
    botonSig.style.backgroundColor = "#311B92";

    localStorage.setItem("medio", "0");
});

whatsapp.addEventListener("click", function() {
    email.style.backgroundColor = "#ffff";
    whatsapp.style.backgroundColor = "#f1f1f1";
    msgWhatsapp.style.backgroundColor = "#ffff";
    
    botonSig.style.backgroundColor = "#311B92";

    localStorage.setItem("medio", "1");
});

msgWhatsapp.addEventListener("click", function() {
    email.style.backgroundColor = "#ffff";
    whatsapp.style.backgroundColor = "#ffff";
    msgWhatsapp.style.backgroundColor = "#f1f1f1";
    
    botonSig.style.backgroundColor = "#311B92";
    
    localStorage.setItem("medio", "2");
});


botonSig.addEventListener("click", function(){
        
    event.preventDefault(); 
    window.location.href = "verificacion/verificacion.html";

});

