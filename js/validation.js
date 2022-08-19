import { 
  loadInputEvent,
  loadClickEvent,
  loadSubmitEvent,
} from './Events.js';

let form  = document.getElementsByTagName('form')[0];
let nombre = document.getElementById('nombre');
let email = document.getElementById('mail');
let mensaje = document.getElementById('mensaje');
let check = document.querySelector('.toggle');
let body = document.querySelector('.body');

let storage = window.localStorage;

let isBlack = Boolean(storage.getItem("oscuro"));

const validBlack = (isBlack) => {
  isBlack 
    ? body.classList.add("change-color")
    : body.classList.remove("change-color");
  check.checked = isBlack;
}

const getError = (nameInput) => {
  let error = document.querySelector(`.error${nameInput}`);
  error.textContent = `El ${nameInput} no puede quedar vacio`;
  return error;
}

const clearFields = () => {
  nombre.value = "";
  email.value = "";
  mensaje.value = "";
}

const isEmptyFields = () => {
  let resultado = false;
  let errNombre = getError("Nombre");
  let errEmail = getError("Email");
  let errMensaje = getError("Mensaje");
  if(nombre.value !== "") {
    errNombre.textContent = ""; 
    resultado = true; 
  }
  if(email.validity.valid && email.value !== "") {
    errEmail.textContent = ""; 
    resultado = true;
  }
  if(mensaje.value !== "") {
    errMensaje.textContent = ""; 
    resultado = true;
  }
  return resultado;
}

const checkBlack = (element) => {
  if(element.checked) {
    body.classList.add("change-color");
    storage.setItem("oscuro", true);
  } else {
    body.classList.remove("change-color");
    storage.removeItem("oscuro");
  }
}

const formValid = (e) => {
  if (isEmptyFields()) {
    alert("Mensaje Enviado");
    clearFields();
  } else {
    e.preventDefault();
  }
}

loadInputEvent(nombre, isEmptyFields);
loadInputEvent(email, isEmptyFields);
loadInputEvent(mensaje, isEmptyFields);

// validBlack debe ir antes de cargar el evento click
// de checkBlack como aparece en las siguientes lineas
validBlack(isBlack);
loadClickEvent(check, checkBlack, check);

loadSubmitEvent(form, formValid);
