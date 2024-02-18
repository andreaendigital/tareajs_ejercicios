//planteamiento: si hago click en btn - 1 entonces caja cambiar de color

// declaración de variables:
const caja = document.getElementById("caja");

//selecciono el id del primer botón y se lo asigno a la variable rojo
const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");
const btn4 = document.getElementById("btn-4");
const btn5 = document.getElementById("btn-5");
const btn6 = document.getElementById("btn-6");

// Agregamos eventListeners a cada botón

btn1.addEventListener("click", function () {
  caja.setAttribute(
    "style",
    "border: 1px solid black; width: 100%; height: 100%; background-color: #e53e3e"
  );
});
btn2.addEventListener("click", function () {
  caja.setAttribute(
    "style",
    "border: 1px solid black; width: 100%; height: 100%; background-color: #dd6b20"
  );
});
btn3.addEventListener("click", function () {
  caja.setAttribute(
    "style",
    "border: 1px solid black; width: 100%; height: 100%; background-color: #faf089"
  );
});
btn4.addEventListener("click", function () {
  caja.setAttribute(
    "style",
    "border: 1px solid black; width: 100%; height: 100%; background-color: #48bb78"
  );
});
btn5.addEventListener("click", function () {
  caja.setAttribute(
    "style",
    "border: 1px solid black; width: 100%; height: 100%; background-color: #81e6d9"
  );
});
btn6.addEventListener("click", function () {
  caja.setAttribute(
    "style",
    "border: 1px solid black; width: 100%; height: 100%; background-color: #d53f8c"
  );
});
