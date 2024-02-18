// declarar  variables

// crear funcion standar suma para el botón suma con un Event
// y lo mismo para la resta

// dentro de la función hacer la operación matemática,
//incluir una variable donde entrega el resultado
// y ese resultado mostrarlo con un inner  en el class resultado

// dentro de la resta poner un condicional  if , else

// si es un número positivo mostrar resultado
// si es un número negativo mostrar resultado = 0
// ----------------------------

// declarar  variables

const num1 = document.getElementById("valor1");
const num2 = document.getElementById("valor2");

let btnsumar = document.getElementById("btn-sumar");
let btnrestar = document.getElementById("btn-restar");

const resultadoSpan = document.querySelector(".resultado");

//al hacer click función sumar

btnsumar.addEventListener("click", function () {
  const suma = Number(num1.value) + Number(num2.value);
  resultadoSpan.innerHTML = +suma;
});

//al hacer click función restar

btnrestar.addEventListener("click", function () {
  const resta = Number(num1.value) - Number(num2.value);
  if (resta >= 0) {
    resultadoSpan.innerHTML = resta;
  } else {
    resultadoSpan.innerHTML = 0;
  }
});
