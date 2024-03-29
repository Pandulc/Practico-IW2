var enlaceDescarga = document.getElementById("enlace-descarga");
var monto = document.getElementById("monto");
const opcionesMoneda = {
  style: "currency",
  currency: "ARS",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
};
var botonConf;
var iframeHead = document.getElementById("header");
const iframeFooter = document.getElementById("footer");

var montoFormat = parseFloat(localStorage.getItem("monto"));
montoFormat = "ARS " + montoFormat.toLocaleString("es-AR", opcionesMoneda);
monto.textContent = montoFormat;

enlaceDescarga.addEventListener("click", function () {
  enlaceDescarga.href = "../archivos/comprobante.pdf";
});

iframeHead.addEventListener("load", () => {
  atras = iframeHead.contentDocument.getElementById("atras");
  logo = iframeHead.contentDocument.getElementById("logo");

  atras.addEventListener("click", () => {
    event.preventDefault();
    window.location.href = "../verificacion/verificacion.html";
  });

  logo.addEventListener("click", () => {
    event.preventDefault();
    window.location.href = "../homeT/homeTransferencia.html";
  });
});

iframeFooter.addEventListener("load", function () {
  botonConf = iframeFooter.contentDocument.getElementById("btnConf");
  botonCanc = iframeFooter.contentDocument.getElementById("btnCanc");
  botonConf.style.backgroundColor = "#311B92";
  botonConf.textContent = "Nueva Transferencia";
  botonConf.addEventListener("click", function () {
    window.location.href = "../homeT/homeTransferencia.html";
  });
  botonCanc.addEventListener("click", function () {
    window.location.href = "../homeT/homeTransferencia.html";
  });
});
