import {
  loadClickMainEvent,
} from './Events.js';

let menuBtn = document.querySelector(".menu-icon");
let menu = document.querySelector(".navigation ul");
let header = document.querySelector(".header");
let iniBtn = document.querySelector(".inicio");
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

let props = {
  iniBtn: iniBtn,
  aboutBtn: aboutBtn,
  serviceBtn: serviceBtn,
  portfolioBtn: portfolioBtn,
  contactBtn: contactBtn,
  menuBtn: menuBtn,
  mainMenu: mainMenu,
  removeClass: removeClass
}

loadClickMainEvent(props);
