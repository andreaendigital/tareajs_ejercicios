//utilizar el evento submit
// expresiones regulares
// permite ingresar  A-a” hasta la “Z-z” mediante el método test()
//mostrando un mensaje de error y/o éxito cuando corresponda.

let form = document.getElementById("formulario");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  limpiarErrores();
  let textNombre = document.getElementById("nombre").value;
  let textAsunto = document.getElementById("asunto").value;
  let textMensaje = document.getElementById("mensaje").value;

  let resultado = validar(textNombre, textAsunto, textMensaje);
  if (resultado == true) {
    exito();
  }
});

function limpiarErrores() {
  document.querySelector(".resultado").innerHTML = "";
  document.querySelector(".errorNombre").innerHTML = "";
  document.querySelector(".errorAsunto").innerHTML = "";
  document.querySelector(".errorMensaje").innerHTML = "";
}

function exito() {
  document.querySelector(".resultado").innerHTML = "Mensaje enviado con éxito!";
}

function validar(textNombre, textAsunto, textMensaje) {
  let validacionPositiva = true;

  let validacionNombre = /[a-zA-Z]/gim;

  if (validacionNombre.test(textNombre) == false) {
    document.querySelector(".errorNombre").innerHTML =
      "Ingrese un nombre válido.";
    validacionPositiva = false;
  }

  let validacionAsunto = /[a-zA-Z]/gim;

  if (validacionAsunto.test(textAsunto) == false) {
    document.querySelector(".errorAsunto").innerHTML =
      "Ingrese un asunto válido";
    validacionPositiva = false;
  }
  let validacionMensaje = /^[a-zA-Z\s]+$/gim;

  if (validacionMensaje.test(textMensaje) == false) {
    document.querySelector(".errorMensaje").innerHTML =
      "Ingrese un mensaje válido.";
    validacionPositiva = false;
  }
  return validacionPositiva;
}
