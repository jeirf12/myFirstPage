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

loadClickEvent(facebook, openWindowNew, "https://www.facebook.com/Fallen.100101");
loadClickEvent(instagram, openWindowNew, "https://www.instagram.com/fallen.1001");
loadClickEvent(github, openWindowNew, "https://github.com/jeirf12");
loadClickEvent(inicio[0], openLink, "#");
loadClickEvent(inicio[1], openLink, "#");
loadClickEvent(acerca[0], openLink, `${nameHref}acerca`);
loadClickEvent(servicio[0], openLink, `${nameHref}servicios`);
loadClickEvent(portafolio[0], openLink, `${nameHref}portafolio`);
loadClickEvent(contacto[0], openLink, `${nameHref}contacto`);
