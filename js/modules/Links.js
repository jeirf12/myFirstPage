import {
  addClickEvent, 
  addMouseEnterEvent, 
  addMouseLeaveEvent,
} from '../utilities/Events.js';
import {
  openLink,
  openWindowNew,
  toggleClass,
  addClass,
} from '../utilities/Funciones.js';
import {
  index,
  about,
  service,
  portfolio,
  contact,
  facebook,
  instagram,
  github,
  nameHref,
} from '../utilities/ElementsDom.js';

let loadInitialPage = () => {
  addMouseEnterEvent(facebook, toggleClass, { element: facebook, id: "facebook" });
  addMouseLeaveEvent(facebook, toggleClass, { element: facebook, id: "facebook" });
  addMouseEnterEvent(instagram, toggleClass, { element: instagram, id: "instagram" });
  addMouseLeaveEvent(instagram, toggleClass, { element: instagram, id: "instagram" });
  addMouseEnterEvent(github, toggleClass, { element: github, id: "github" });
  addMouseLeaveEvent(github, toggleClass, { element: github, id: "github" });

  addClickEvent(facebook, openWindowNew, "https://www.facebook.com/Fallen.100101");
  addClickEvent(instagram, openWindowNew, "https://www.instagram.com/fallen.1001");
  addClickEvent(github, openWindowNew, "https://github.com/jeirf12");
  addClickEvent(index[0], openLink, "#");
  addClickEvent(index[0], addClass, undefined);
  addClickEvent(index[1], openLink, "#");
  addClickEvent(index[1], addClass, index[1]);
  addClickEvent(about, openLink, `${nameHref}acerca`);
  addClickEvent(about, addClass, about);
  addClickEvent(service, openLink, `${nameHref}servicios`);
  addClickEvent(service, addClass, service);
  addClickEvent(portfolio, openLink, `${nameHref}portafolio`);
  addClickEvent(portfolio, addClass, portfolio);
  addClickEvent(contact, openLink, `${nameHref}contacto`);
  addClickEvent(contact, addClass, contact);
};

export {
  loadInitialPage,
}
