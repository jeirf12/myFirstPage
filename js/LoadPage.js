import {
  loadClickEvent
} from './Events.js';

let name = "icon-";
let facebook = document.getElementById(`${name}facebook`)
let instagram = document.getElementById(`${name}instagram`)
let github = document.getElementById(`${name}github`)

let nameHref = "#ir-";
let inicio = document.getElementsByClassName("inicio");
let acerca = document.getElementsByClassName("acerca");
let servicio = document.getElementsByClassName("servicios");
let portafolio = document.getElementsByClassName("portafolio");
let contacto = document.getElementsByClassName("contacto");

const openLink = (url) => {
  window.location.href = url;
}

const openWindowNew = (url) => {
  window.open(url);
}

const addClass = (inputNew) => {
  let inputsActive = document.getElementsByTagName("a");
  for (let input of inputsActive) {
    if(input.classList.contains("active")) input.classList.remove("active");
  }
  if (inputNew !== undefined) inputNew.classList.add("active");
}

loadClickEvent(facebook, openWindowNew, "https://www.facebook.com/Fallen.100101");
loadClickEvent(instagram, openWindowNew, "https://www.instagram.com/fallen.1001");
loadClickEvent(github, openWindowNew, "https://github.com/jeirf12");
loadClickEvent(inicio[0], openLink, "#");
loadClickEvent(inicio[0], addClass, undefined);
loadClickEvent(inicio[1], openLink, "#");
loadClickEvent(inicio[1], addClass, inicio[1]);
loadClickEvent(acerca[0], openLink, `${nameHref}acerca`);
loadClickEvent(acerca[0], addClass, acerca[0]);
loadClickEvent(servicio[0], openLink, `${nameHref}servicios`);
loadClickEvent(servicio[0], addClass, servicio[0]);
loadClickEvent(portafolio[0], openLink, `${nameHref}portafolio`);
loadClickEvent(portafolio[0], addClass, portafolio[0]);
loadClickEvent(contacto[0], openLink, `${nameHref}contacto`);
loadClickEvent(contacto[0], addClass, contacto[0]);
