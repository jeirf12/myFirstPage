import {
  addResizeEvent,
  addClickEvent,
} from '../utilities/Events.js';
import {
  toggleClassMenu,
  resizeMode,
} from '../utilities/Funciones.js';
import {
  menuBtn,
  index,
  about,
  service,
  portfolio,
  contact,
} from '../utilities/ElementsDom.js';

let loadMenu = () => {
  resizeMode();
  let toggle = document.querySelector(".toggle");

  addResizeEvent(window, resizeMode);

  addClickEvent(menuBtn, toggleClassMenu);
  addClickEvent(index[0], toggleClassMenu);
  addClickEvent(index[1], toggleClassMenu);
  addClickEvent(about, toggleClassMenu);
  addClickEvent(service, toggleClassMenu);
  addClickEvent(portfolio, toggleClassMenu);
  addClickEvent(contact, toggleClassMenu);
  addClickEvent(toggle, toggleClassMenu);
};

export {
  loadMenu,
}
