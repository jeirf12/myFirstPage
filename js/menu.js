const menuButton = document.getElementById('menu-icon');
const links = document.querySelectorAll('.link-header');
const menu = document.querySelector('.navigation ul');
const header = document.getElementById('header');
const redirectLinks = [ 
  '#', 
  '#', 
  '#about', 
  '#portfolio', 
  '#services', 
  '#contact' 
];

export const loadMenu = () => {
  addClickEvent(menuButton, toggleMenu);
  addClickEvent(menuButton, noShowScroll);
  let index = 0;
  for(const link of links) {
    if(index > 0) addClickEvent(link, toggleMenu);
    addClickEvent(link, openLink, redirectLinks[index]);
    index++;
  }
}

const noShowScroll = () => {
  toggleClassList({element: document.body, id: 'not-show-scroll'});
}

const toggleMenu = () => {
  toggleClassList({element: header, id: 'showHeader'});
  toggleClassList({element: menu, id: 'show'});
  removeIfExistInClassList({element: document.body, id: 'not-show-scroll'});
}

const toggleClassList = ({element, id}) => element.classList.toggle(id);

const removeIfExistInClassList = ({element, id}) => {
  if (element.classList.contains(id)) element.classList.remove(id);
}

const addClickEvent = (element, methodClick, parameter = "") => {
  element.addEventListener("click", addParemeterIfneeded(methodClick, parameter));
};

const addParemeterIfneeded = (method, parameter) => { 
  return parameter !== "" 
      ? () => method(parameter)
      : method; 
}

const openLink = (url) => window.location.href = url;
