import {
  menu,
  header,
  swHeader,
  body,
  storage,
  isBlack,
  regex,
} from '../utilities/ElementsDom.js';

// Permite abrir una url en la misma ventana
let openLink = (url) => { window.location.href = url; };

// Permite abrir una nueva ventana para abrir la url
let openWindowNew = (url) => { window.open(url); };

// Permite cambiar entre dos estados agregar/remover una clase de un elemento del dom a partir de un id
let toggleClass = ({element, id}) => { element.classList.toggle(id); };

// Permite a los inputs remover su clase activa y definir como activa al que se pasa por parametros
let addClass = (inputNew) => {
  let inputsActive = document.getElementsByTagName("a");
  for (let input of inputsActive) {
    if(input.classList.contains("active")) input.classList.remove("active");
  }
  if (inputNew !== undefined) inputNew.classList.add("active");
};

// La funcion permite remover/agregar una clase a los elementos del header y el menu especificamente
let toggleClassMenu = () => {
  header.classList.toggle('showheader');
  menu.classList.toggle('show');
};

// Remueve el switch del header para un maximo de ancho de 1025px y colocarlo dentro del menu o fuera de el
let resizeMode = () => {
  if (window.matchMedia("(max-width: 1025px)").matches) {
    header.contains(swHeader) ?? header.removeChild(swHeader);
    menu.appendChild(swHeader);
  } else {
    menu.contains(swHeader) ?? menu.removeChild(swHeader);
    header.insertAdjacentElement("afterbegin", swHeader);
  } 
};

// Valida is esta activado el modo oscuro y lo checkea
let validBlack = (check) => {
  isBlack
    ? body.classList.add("change-color")
    : body.classList.remove("change-color");
  check.checked = isBlack;
};

// Agrega/remueve la clase para cambiar el color y lo guarda en el localStorage
let addBlack = (element) => {
  if (element.checked) {
    body.classList.add("change-color");
    storage.setItem("oscuro", true);
  } else {
    body.classList.remove("change-color");
    storage.removeItem("oscuro");
  }
};

// Agrega/remueve interacion de clases al campo ingresado verificando su validez
let validateField = (expression, input, field) => {
  let element = document.getElementById(`group-${field}`);
  let elementI = document.querySelector(`#group-${field} i`);
  let elementMessage = document.querySelector(`#group-${field} .input-error`);
  if(expression.test(input.value)) {
    element.classList.remove("form-group-incorrecto");
    element.classList.add("form-group-correcto");
    elementI.classList.remove("bxs-x-circle");
    elementI.classList.add("bxs-check-circle");
    elementMessage.classList.remove("input-error-activo");
    return true;
  }else{
    element.classList.add("form-group-incorrecto");
    element.classList.remove("form-group-correcto");
    elementI.classList.add("bxs-x-circle");
    elementI.classList.remove("bxs-check-circle");
    elementMessage.classList.add("input-error-activo");
    return false;
  }
};

// Valida si cada uno de los campos del formulario son correctos o no
let validateForm = (e) => {
  let resultado = false;
  switch(e.name) {
    case "nombre": resultado = validateField(regex.name, e, e.name); break;
    case "servicio": resultado = validateField(regex.servicio, e, e.name); break;
    case "email": resultado = validateField(regex.email, e, e.name); break;
    case "mensaje": resultado = validateField(regex.message, e, e.name); break;
  }
  return resultado;
};

// Obtiene un valor tipo bandera para verificar si el campo es correcto, en este caso 0 quiere decir correcto, y otro numero diferente de este no.
let getError = (nameInput) => {
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
      : element.validity.valid && element.value !== "" && regex.email.test(element.value);
  let valid = validateForm(element);
  if (validation && valid) result++;
  return result;
};

// Verifica que todos los campos no esten vacios y si lo esta lo retorna con un valor bandera
let isEmptyFields = () => {
  let resultado = 0;
  resultado += getError("Nombre");
  resultado += getError("Email");
  resultado += getError("Mensaje");
  resultado += getError("Servicio");
  return resultado;
};

const formValid = (btn, e) => {
  e.preventDefault();
  let fields = isEmptyFields();
  if (fields === 4) {
    btn.textContent = "Enviando...";

    const serviceID = "default_service";
    const templateID = "template_fhk2408";

    emailjs.sendForm(serviceID, templateID, e.target).then(
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

export {
  openLink,
  openWindowNew,
  toggleClass,
  addClass,
  toggleClassMenu,
  resizeMode,
  validBlack,
  addBlack,
  validateForm,
  formValid,
}
