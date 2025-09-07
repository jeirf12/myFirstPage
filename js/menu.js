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
  let index = 0;
  for(const link of links) {
    if(index > 0)
      addClickEvent(link, toggleLinks);
    else 
      addClickEvent(link, toggleLinks, true)

    addClickEvent(link, openLink, redirectLinks[index]);
    index++;
  }
}

const toggleMenu = () => {
  toggleClassList({element: header, id: 'showHeader'});
  toggleClassList({element: menu, id: 'show'});
  toggleClassList({element: document.body, id: 'not-show-scroll'});
}

const toggleLinks = (isFirstElement = false) => {
  if(!isFirstElement || header.classList.contains('showHeader')) toggleClassList({element: header, id: 'showHeader'});
  if(!isFirstElement || menu.classList.contains('show')) toggleClassList({element: menu, id: 'show'});
  if (document.body.classList.contains('not-show-scroll')) {
    toggleClassList({element: document.body, id: 'not-show-scroll'});
  }
}

const toggleClassList = ({element, id}) => element.classList.toggle(id);

const addClickEvent = (element, methodClick, parameter = "") => {
  element.addEventListener("click", addParemeterIfneeded(methodClick, parameter));
};

const addParemeterIfneeded = (method, parameter) => { 
  return parameter !== "" 
      ? () => method(parameter)
      : method; 
}

const openLink = (url) => window.location.href = url;
