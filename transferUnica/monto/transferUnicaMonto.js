var montoDisponible = document.getElementById("monto-disponible");
const opcionesMoneda = {
  style: "currency",
  currency: "ARS",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
};
var montoIngresado = document.getElementById("monto-ingresado");
var impuesto = document.getElementById("impuesto");
var boton = document.querySelector('button[type="submit"]');
var iframeHead = document.getElementById("header");
var iframeBarra = document.getElementById("barra-progreso");

montoDisponible.textContent = localStorage.getItem("saldo");

// Iframe del header
iframeHead.addEventListener("load", () => {
  var atras = iframeHead.contentDocument.getElementById("atras");
  var logo = iframeHead.contentDocument.getElementById("logo");

  atras.addEventListener("click", () => {
    event.preventDefault();
    window.location.href = "../../transferUnica/transferUnica.html";
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

// Tamanio default del input
montoIngresado.style.width = (montoIngresado.value.length + 2.2) * 38 + "px";

montoIngresado.addEventListener("input", () => {
  if (montoIngresado.value.length != "" && event.key != "Backspace") {
    // Ajusto el tamanio del input segun la cantidad de caracteres
    montoIngresado.style.width = (montoIngresado.value.length + 1) * 38 + "px";
    impuesto.textContent = (montoIngresado.value * 0.05).toFixed(2);
    boton.style.backgroundColor = "#311B92";
  }
  if (montoIngresado.value <= 3) {
    // Tamanio default del input cuando este vacio
    montoIngresado.style.width =
      (montoIngresado.value.length + 2.2) * 38 + "px";
  } else if (event.key === "Backspace") {
    // Reduzco el tamanio del input cuando borre caracteres
    montoIngresado.style.width = (montoIngresado.value.length - 1) * 38 + "px";
  }
});

boton.addEventListener("click", () => {
  event.preventDefault();

  var montoIngresadoNumero = parseFloat(
    montoIngresado.value.replace(/ARS|\$|\./g, "")
  );
  var montoDisponibleNumero = parseFloat(
    montoDisponible.textContent.replace(/ARS|\$|\./g, "")
  );

  if (montoIngresadoNumero <= montoDisponibleNumero) {
    localStorage.setItem("monto", montoIngresadoNumero); // Guardo el monto para recuperarlo en la proxima pantalla
    var saldoFinal =
      montoDisponibleNumero -
      montoIngresadoNumero -
      parseFloat(impuesto.textContent); // Actualizo el monto disponible
    saldoFinal = "ARS " + saldoFinal.toLocaleString("es-AR", opcionesMoneda); // Formateo a ARS $ x.xxx,xx de nuevo
    localStorage.setItem("saldo", saldoFinal); // Guardo el saldo actualizado
    setTimeout(() => {
      window.location.href = "../verificacion/transferUnicaVerificacion.html";
    }, 100);
  }
});
