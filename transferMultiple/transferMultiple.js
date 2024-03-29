var panel = document.getElementById("panel");
var boton = document.getElementById("boton-desplegar");
var botonSubir = document.getElementById("subir-archivo");
var botonDescargar = document.getElementById("bajar-planilla");
var enlaceDescarga = document.getElementById("enlace-descarga");
var botonSig = document.getElementById("boton-siguiente");
var inputFile = document.getElementById("archivo-input");
var iframeHead = document.getElementById("header");

localStorage.setItem("transferMultiple", "true");
botonSig.disabled = true;

// Iframe del header
iframeHead.addEventListener("load", () => {
  var atras = iframeHead.contentDocument.getElementById("atras");
  var logo = iframeHead.contentDocument.getElementById("logo");

  atras.addEventListener("click", () => {
    event.preventDefault();
    window.location.href = "../../homeT/homeTransferencia.html";
  });

  logo.addEventListener("click", () => {
    event.preventDefault();
    window.location.href = "../../homeT/homeTransferencia.html";
  });
});

botonSubir.addEventListener("click", () => {
  event.preventDefault();
  inputFile.click();
});

inputFile.addEventListener("change", () => {
  var archivo = inputFile.files[0];
  if (archivo) {
    if (archivo.name.includes(".csv")) {
      botonSig.style.backgroundColor = "#311B92";
      botonSig.disabled = false;
    } else {
      alert("El archivo debe ser de tipo CSV");
      inputFile.value = "";
      botonSig.style.backgroundColor = "#7e6ec5";
      botonSig.disabled = true;
    }
  }
});

botonDescargar.addEventListener("click", () => {
  event.preventDefault();
  enlaceDescarga.href = "../archivos/planilla.csv";
  enlaceDescarga.click();
});

boton.addEventListener("click", () => {
  var estiloBoton = window.getComputedStyle(boton);

  if (estiloBoton.backgroundImage.match("../img/desplegar.svg")) {
    boton.style.backgroundImage = "url(../img/colapsar.svg)";
    botonSig.style.marginTop = "13.8rem";
    panel.classList.toggle("open");
  } else {
    boton.style.backgroundImage = "url(../img/desplegar.svg)";
    botonSig.style.marginTop = "31rem";
    panel.classList.remove("open");
  }
});

botonSig.addEventListener("click", () => {
  event.preventDefault();
  window.location.href = "../confirmacion/transferConfirmacion.html";
});
