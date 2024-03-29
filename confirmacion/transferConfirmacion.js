var msg = document.getElementById("mensaje");
var email = document.getElementById("email");
var whatsapp = document.getElementById("whatsapp");
var msgWhatsapp = document.getElementById("msgWhatsapp");
var botonSig = document.getElementById("btnSig");
var iframeHead = document.getElementById("header");
var iframeBarra = document.getElementById("barra-progreso");

// Iframe del header
iframeHead.addEventListener("load", () => {
  var atras = iframeHead.contentDocument.getElementById("atras");
  var logo = iframeHead.contentDocument.getElementById("logo");

  atras.addEventListener("click", () => {
    event.preventDefault();
    window.location.href = "../transferUnica/transferUnicaVerificacion.html";
  });

  logo.addEventListener("click", () => {
    event.preventDefault();
    window.location.href = "../homeT/homeTransferencia.html";
  });
});

// Iframe de la barra de progreso
iframeBarra.addEventListener("load", () => {
  var img1 = iframeBarra.contentDocument.getElementById("img1");
  var linea1 = iframeBarra.contentDocument.getElementById("linea1");
  var img2 = iframeBarra.contentDocument.getElementById("img2");
  var linea2 = iframeBarra.contentDocument.getElementById("linea2");
  var img3 = iframeBarra.contentDocument.getElementById("img3");

  img1.src = "../img/listo.svg";
  img1.classList.remove("edit");
  img1.classList.add("ready");

  linea1.style.backgroundColor = "#02BC8A";

  if (localStorage.getItem("transferMultiple") == "true") {
    img2.src = "../img/edit.png";
    img2.classList.remove("more");
    img2.classList.add("edit");

    msg.style.display = "none";
  } else {
    img2.src = "../img/listo.svg";
    img2.classList.remove("edit");
    img2.classList.add("ready");

    linea2.style.backgroundColor = "#02BC8A";

    img3.src = "../img/edit.png";
    img3.classList.remove("more");
    img3.classList.add("edit");
  }
});

email.addEventListener("click", function () {
  email.style.backgroundColor = "#f1f1f1";
  whatsapp.style.backgroundColor = "#ffff";
  msgWhatsapp.style.backgroundColor = "#ffff";

  botonSig.style.backgroundColor = "#311B92";
});

whatsapp.addEventListener("click", function () {
  email.style.backgroundColor = "#ffff";
  whatsapp.style.backgroundColor = "#f1f1f1";
  msgWhatsapp.style.backgroundColor = "#ffff";

  botonSig.style.backgroundColor = "#311B92";
});

msgWhatsapp.addEventListener("click", function () {
  email.style.backgroundColor = "#ffff";
  whatsapp.style.backgroundColor = "#ffff";
  msgWhatsapp.style.backgroundColor = "#f1f1f1";

  botonSig.style.backgroundColor = "#311B92";
});

botonSig.addEventListener("click", function () {
  event.preventDefault();
  window.location.href = "../verificacion/verificacion.html";
});
