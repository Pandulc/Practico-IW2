var monto = document.getElementById("monto");
var boton = document.querySelector('button[type="submit"]');
var botonEdit = document.getElementById("editar");
const opcionesMoneda = {
  style: "currency",
  currency: "ARS",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
};
var montoGuardado = parseFloat(localStorage.getItem("monto"));
const iframeHead = document.getElementById("header");
const iframeBarra = document.getElementById("barra-progreso");

// Iframe del header
iframeHead.addEventListener("load", () => {
  var atras = iframeHead.contentDocument.getElementById("atras");
  var logo = iframeHead.contentDocument.getElementById("logo");

  atras.addEventListener("click", () => {
    event.preventDefault();
    window.location.href = "../monto/transferUnicaMonto.html";
  });

  logo.addEventListener("click", () => {
    event.preventDefault();
    window.location.href = "../../homeT/homeTransferencia.html";
  });
});

// Iframe de la barra de progreso
iframeBarra.addEventListener("load", () => {
  var img1 = iframeBarra.contentDocument.getElementById("img1");
  var linea1 = iframeBarra.contentDocument.getElementById("linea1");
  var img2 = iframeBarra.contentDocument.getElementById("img2");

  img1.src = "../../img/listo.svg";
  img1.classList.remove("edit");
  img1.classList.add("ready");

  linea1.style.backgroundColor = "#02BC8A";

  img2.src = "../../img/edit.png";
  img2.classList.remove("more");
  img2.classList.add("edit");
});

botonEdit.addEventListener("click", () => {
  event.preventDefault();

  var saldo = parseFloat(
    localStorage.getItem("saldo").replace(/ARS|\$|\./g, "")
  );

  var montoGuardado = parseFloat(localStorage.getItem("monto"));

  saldo = saldo + montoGuardado + montoGuardado * 0.05;

  saldo = "ARS " + saldo.toLocaleString("es-AR", opcionesMoneda);

  localStorage.setItem("saldo", saldo);

  window.location.href = "../transferUnica.html";
});

// Correccion de color dada no modificacion
boton.style.backgroundColor = "#311b92";

monto.textContent = "ARS $ " + montoGuardado.toLocaleString("es-AR");

boton.addEventListener("click", () => {
  event.preventDefault();
  window.location.href = "../../confirmacion/transferConfirmacion.html";
});
