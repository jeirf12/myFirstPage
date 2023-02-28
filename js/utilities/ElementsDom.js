let createSwitchHeader = () => {
  let div = document.createElement("div")
  div.setAttribute("class", "switch-header");
  let h3 = document.createElement("h3")
  h3.textContent = "Modo Oscuro";
  let label = document.createElement("label")
  label.setAttribute("class", "switch");
  let input = document.createElement("input")
  input.setAttribute("class", "toggle")
  input.setAttribute("type", "checkbox");
  let span = document.createElement("span")
  span.setAttribute("class", "slider round");
  label.appendChild(input);
  label.appendChild(span);
  div.appendChild(h3);
  div.appendChild(label);
  return div;
};

let regex = {
  name: /^[a-zA-ZÀ-ÿ]+\s[a-zA-ZÀ-ÿ]+$/, // Letras y espacios, pueden llevar acentos.
  message: /^[a-zA-ZÀ-ÿ ]{20,140}$/, // Letras y espacios, pueden llevar acentos minimo 20 palabras.
  servicio: /^[a-zA-ZÀ-ÿ]{8,140}$/, // Letras y espacios, pueden llevar acentos minimo 20 palabras.
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
};

let menuBtn = document.querySelector(".menu-icon");
let index = document.querySelectorAll(".inicio");
let about = document.querySelector(".acerca");
let service = document.querySelector(".servicios");
let portfolio = document.querySelector(".portafolio");
let contact = document.querySelector(".contacto");

let name = "icon-";
let nameHref = "#ir-";
let menu = document.querySelector(".navigation ul");
let header = document.querySelector(".header");
let swHeader = createSwitchHeader();
let body = document.querySelector(".body");
let storage = window.localStorage;
let isBlack = Boolean(storage.getItem("oscuro"));

// Elementos obtenidos por id
let form = document.getElementById("form");
let nombre = document.getElementById("nombre");
let servicio = document.getElementById("motivoServicios");
let email = document.getElementById("email");
let mensaje = document.getElementById("mensaje");
let btn = document.getElementById("button");

let facebook = document.getElementById(`${name}facebook`);
let instagram = document.getElementById(`${name}instagram`);
let github = document.getElementById(`${name}github`);

export {
  index,
  about,
  service,
  portfolio,
  contact,
  menu,
  header,
  swHeader,
  body,
  storage,
  isBlack,
  regex,
  form,
  nombre,
  servicio,
  email,
  mensaje,
  btn,
  facebook,
  instagram,
  github,
  nameHref,
  menuBtn,
};
