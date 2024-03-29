var vector = document.getElementById("vector");
var logo = document.getElementById("logo");

setTimeout(function () {
  vector.style.display = "block";
}, 1000);

setTimeout(function () {
  logo.style.display = "block";
}, 2000);

setTimeout(function () {
  window.location.href = "../login/login.html";
}, 5000);
