import { 
  addKeyupEvent, 
  addBlurEvent, 
  addClickEvent, 
  addSubmitEvent, 
} from "../utilities/Events.js";
import { 
  validBlack,
  addBlack,
  validateForm,
  formValid,
} from '../utilities/Funciones.js';
import {
  form,
  nombre,
  servicio,
  email,
  mensaje,
  btn,
} from '../utilities/ElementsDom.js';

let loadValidation = () => {
  addKeyupEvent(nombre, validateForm, nombre);
  addBlurEvent(nombre, validateForm, nombre);
  addKeyupEvent(servicio, validateForm, servicio);
  addBlurEvent(servicio, validateForm, servicio);
  addKeyupEvent(email, validateForm, email);
  addBlurEvent(email, validateForm, email);
  addKeyupEvent(mensaje, validateForm, mensaje);
  addBlurEvent(mensaje, validateForm, mensaje);

  // validBlack debe ir antes de cargar el evento click
  // de checkBlack como aparece en las siguientes lineas
  let check = document.querySelector(".toggle");
  validBlack(check);
  addClickEvent(check, addBlack, check);

  emailjs.init("EwqvfVivMbrGZlI8K");

  addSubmitEvent(form, formValid, btn);
};

export {
  loadValidation,
}
