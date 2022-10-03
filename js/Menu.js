import {
  loadClickMainEvent,
  headerSwitch,
  loadResizeEvent,
} from './Events.js';

let menuBtn = document.querySelector(".menu-icon");
let menu = document.querySelector(".navigation ul");
let header = document.querySelector(".header");
let iniBtn = document.querySelectorAll(".inicio");
let aboutBtn = document.querySelector(".acerca");
let serviceBtn = document.querySelector(".servicios");
let portfolioBtn = document.querySelector(".portafolio");
let contactBtn = document.querySelector(".contacto");

const removeClass = () => {
  header.classList.remove('showheader');
  menu.classList.remove('show');
}

const mainMenu = () => {
  if(menu.classList.contains("show")) {
    removeClass();
  } else {
    header.classList.add("showheader");
    menu.classList.add("show");
  }
}

let swHeader = headerSwitch();

const resizeMode = () => {
  if (window.screen.width < 1025) {
    header.contains(swHeader) ?? header.removeChild(swHeader);
    menu.appendChild(swHeader);
  } else {
    menu.contains(swHeader) ?? menu.removeChild(swHeader);
    header.insertAdjacentElement("afterbegin", swHeader);
  } 
}

resizeMode();
let toggle = document.querySelector(".toggle");

let props = {
  iniBtn: iniBtn,
  aboutBtn: aboutBtn,
  serviceBtn: serviceBtn,
  portfolioBtn: portfolioBtn,
  contactBtn: contactBtn,
  menuBtn: menuBtn,
  toggle: toggle,
  mainMenu: mainMenu,
  removeClass: removeClass
}
 
loadResizeEvent(window, resizeMode);
loadClickMainEvent(props);
