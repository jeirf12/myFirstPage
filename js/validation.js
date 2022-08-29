import { loadKeyupEvent, loadBlurEvent, loadClickEvent, loadSubmitEvent, regularExpressions } from "./Events.js";

let form = document.getElementById("form");
let nombre = document.getElementById("nombre");
let servicio = document.getElementById("motivoServicios");
let email = document.getElementById("email");
let mensaje = document.getElementById("mensaje");
let check = document.querySelector(".toggle");
let body = document.querySelector(".body");

let storage = window.localStorage;

let isBlack = Boolean(storage.getItem("oscuro"));

const validBlack = (isBlack) => {
  isBlack
    ? body.classList.add("change-color")
    : body.classList.remove("change-color");
  check.checked = isBlack;
};

const getError = (nameInput) => {
  let result = 0;
  let settings = {
    Nombre: nombre,
    Email: email,
    Mensaje: mensaje,
    Servicio: servicio
  };
  let element = settings[nameInput];
  let validation =
    nameInput !== "Email"
      ? element.value !== ""
      : element.validity.valid && element.value !== "" && regularExpressions.email.test(element.value);
  if (validation) result++;
  return result;
};

const validateField = (expression, input, field) => {
  let element = document.getElementById(`group-${field}`);
  let elementI = document.querySelector(`#group-${field} i`);
  let elementMessage = document.querySelector(`#group-${field} .input-error`);
  if(expression.test(input.value)) {
    element.classList.remove("form-group-incorrecto");
    element.classList.add("form-group-correcto");
    elementI.classList.remove("bxs-x-circle");
    elementI.classList.add("bxs-check-circle");
    elementMessage.classList.remove("input-error-activo");
  }else{
    element.classList.add("form-group-incorrecto");
    element.classList.remove("form-group-correcto");
    elementI.classList.add("bxs-x-circle");
    elementI.classList.remove("bxs-check-circle");
    elementMessage.classList.add("input-error-activo");
  }
};

const validateForm = (e) => {
  switch(e.name) {
    case "nombre": validateField(regularExpressions.name, e, e.name); break;
    case "servicio": validateField(regularExpressions.servicio, e, e.name); break;
    case "email": validateField(regularExpressions.email, e, e.name); break;
    case "mensaje": validateField(regularExpressions.message, e, e.name); break;
  }
}

const isEmptyFields = () => {
  let resultado = 0;
  resultado += getError("Nombre");
  resultado += getError("Email");
  resultado += getError("Mensaje");
  resultado += getError("Servicio");
  return resultado;
};

const checkBlack = (element) => {
  if (element.checked) {
    body.classList.add("change-color");
    storage.setItem("oscuro", true);
  } else {
    body.classList.remove("change-color");
    storage.removeItem("oscuro");
  }
};

const formValid = (btn, e) => {
  e.preventDefault();
  let fields = isEmptyFields();
  if (fields === 4) {
    btn.textContent = "Enviando...";

    const serviceID = "default_service";
    const templateID = "template_fhk2408";

    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        btn.textContent = "Enviar";
        alert("Mensaje enviado correctamente");
        e.target.reset();
      },
      (err) => {
        btn.textContent = "Enviar";
        alert(JSON.stringify(err));
      }
    );
  } else if(fields < 4){
    alert("Ingrese todos los campos correctamente");
  }
};

loadKeyupEvent(nombre, validateForm, nombre);
loadBlurEvent(nombre, validateForm, nombre)
loadKeyupEvent(servicio, validateForm, servicio);
loadBlurEvent(servicio, validateForm, servicio)
loadKeyupEvent(email, validateForm, email);
loadBlurEvent(email, validateForm, email)
loadKeyupEvent(mensaje, validateForm, mensaje);
loadBlurEvent(mensaje, validateForm, mensaje)

// validBlack debe ir antes de cargar el evento click
// de checkBlack como aparece en las siguientes lineas
validBlack(isBlack);
loadClickEvent(check, checkBlack, check);

emailjs.init("EwqvfVivMbrGZlI8K");

const btn = document.getElementById("button");
loadSubmitEvent(form, formValid, btn);
