var campos = document.querySelectorAll(".codigo");
var botonConf;
var botonCanc;
const opcionesMoneda = {
  style: "currency",
  currency: "ARS",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
};
var botonReenvio = document.getElementById("reCod");
var timer = document.getElementById("timer");
var tiempoRestante = 20;
var loading = document.getElementById("loader");
var overlay = document.getElementById("overlay");
const iframeHead = document.getElementById("header");
const iframeFooter = document.getElementById("footer");

iframeHead.addEventListener("load", () => {
  var atras = iframeHead.contentDocument.getElementById("atras");
  var logo = iframeHead.contentDocument.getElementById("logo");

  atras.addEventListener("click", () => {
    event.preventDefault();
    window.location.href = "../confirmacion/transferConfirmacion.html";
  });

  logo.addEventListener("click", () => {
    event.preventDefault();
    window.location.href = "../homeT/homeTransferencia.html";
  });
});

iframeFooter.addEventListener("load", function () {
  // Cargamos el boton
  botonConf = iframeFooter.contentDocument.getElementById("btnConf");
  botonCanc = iframeFooter.contentDocument.getElementById("btnCanc");
  botonConf.disabled = true;

  // Validacion del codigo de verificacion
  campos.forEach((campo, index) => {
    // Validar entrada numerica y pasar al siguiente campo
    campo.addEventListener("input", function () {
      if (campo.value.match(/[0-9]/)) {
        if (campo.value.length == 1 && index < campos.length - 1) {
          campos[index + 1].focus();
        } else {
          botonConf.style.backgroundColor = "#311B92";
          botonConf.disabled = false;
        }
      }
    });

    // Verificar borrado, en caso, volver al campo anterior
    campo.addEventListener("keydown", (event) => {
      if (
        event.key === "Backspace" &&
        index == campos.length - 1 &&
        campo.value != ""
      ) {
        campo.value = "";
        botonConf.style.backgroundColor = "#7F8A8E";
        botonConf.disabled = true;
        return;
      }
      if (event.key === "Backspace" && index > 0) {
        botonConf.style.backgroundColor = "#7F8A8E";
        campos[index - 1].focus();
      }
    });
  });

  botonConf.addEventListener("click", function () {
    event.preventDefault();

    loading.style.display = "block";
    overlay.style.display = "block";

    setTimeout(() => {
      loading.style.display = "none";
      overlay.style.display = "none";
      window.location.href = "../resumen/resumen.html";
    }, 1000);
  });

  botonCanc.addEventListener("click", function () {
    event.preventDefault();

    var saldo = parseFloat(
      localStorage.getItem("saldo").replace(/ARS|\$|\./g, "")
    );

    var montoGuardado = parseFloat(localStorage.getItem("monto"));

    saldo = saldo + montoGuardado + montoGuardado * 0.05;

    saldo = "ARS " + saldo.toLocaleString("es-AR", opcionesMoneda);

    localStorage.setItem("saldo", saldo);

    window.location.href = "../homeT/homeTransferencia.html";
  });

  // Temporizador para reenvio de codigo

  var intervalo = setInterval(function () {
    // Calculamos los minutos y segundos restantes
    var minutos = Math.floor(tiempoRestante / 60);
    var segundos = tiempoRestante % 60;

    // Formateamos los minutos y segundos para que tengan 2 dígitos
    var formatoMinutos = minutos < 10 ? "0" + minutos : minutos;
    var formatoSegundos = segundos < 10 ? "0" + segundos : segundos;

    // Actualizamos el contenido del elemento con el tiempo formateado
    timer.textContent = formatoMinutos + ":" + formatoSegundos;

    // Verificamos si el tiempo ha llegado a cero
    if (tiempoRestante <= 0) {
      // Detenemos el temporizador
      clearInterval(intervalo);

      // Cambiamos color del texto
      reCod.style.color = "#311B92";
      reCod.textContent = "Reenviar código";
      timer.style.display = "none";
    }

    // Disminuimos el tiempo restante
    tiempoRestante--;
  }, 1000);
});
