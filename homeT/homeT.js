var opcion1 = document.getElementById("unico");
var opcion2 = document.getElementById("multiple");
var boton = document.querySelector('button[type="submit"]');
var atras;
var logo;
var iframeHead = document.getElementById("header");

// Calculo y guardado del monto y tipo de transferencia
var montoDisponible = document.getElementById("monto");
const opcionesMoneda = {
  style: "currency",
  currency: "ARS",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
};

localStorage.setItem("transferMultiple", "false");
// Si entro por primera vez, me calcula un saldo aleatorio, sino, mantiene el usado
if (localStorage.getItem("saldo") == null) {
  var monto = Math.floor(Math.random() * 10001);
  monto = "ARS " + monto.toLocaleString("es-AR", opcionesMoneda);
  localStorage.setItem("saldo", monto);
}

montoDisponible.textContent = localStorage.getItem("saldo");

iframeHead.addEventListener("load", () => {
  atras = iframeHead.contentDocument.getElementById("atras");
  logo = iframeHead.contentDocument.getElementById("logo");

  atras.addEventListener("click", () => {
    event.preventDefault();
    window.location.href = "../login/login.html";
  });

  logo.addEventListener("click", () => {
    event.preventDefault();
    window.location.href = "../homeT/homeTransferencia.html";
  });
});

opcion1.addEventListener("change", () => {
  boton.style.backgroundColor = "#311b92";
});

opcion2.addEventListener("change", () => {
  boton.style.backgroundColor = "#311b92";
});

boton.addEventListener("click", () => {
  event.preventDefault();

  if (opcion1.checked) {
    window.location.href = "../transferUnica/transferUnica.html";
  } else if (opcion2.checked) {
    window.location.href = "../transferMultiple/transferMultiple.html";
  } else {
  }
});
