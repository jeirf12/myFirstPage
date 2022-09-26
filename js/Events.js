const loadKeyupEvent = (element, methodInput, parameter="") => {
  return element.addEventListener("keyup", () => {
    if(parameter !== "") return methodInput(parameter);
    else return methodInput();
  });
}

const loadBlurEvent = (element, methodInput, parameter="") => {
  return element.addEventListener("blur", () => {
    if(parameter !== "") return methodInput(parameter);
    else return methodInput();
  });
}

const loadClickEvent = (element, methodClick, parameter="") => {
  element.addEventListener("click", () => {
    if(parameter !== "") methodClick(parameter);
    else methodClick();
  });
}

const loadSubmitEvent = (element, methodSubmit, parameter="") => {
  element.addEventListener("submit", (e) => {
    if(parameter !== "") methodSubmit(parameter, e);
    else methodSubmit(e);
  }, false);
}

const loadClickMainEvent = (props) => {
  props.menuBtn.addEventListener("click", () => {
    props.mainMenu();
  });
  loadClickEvent(props.iniBtn[0], props.removeClass);
  loadClickEvent(props.iniBtn[1], props.removeClass);
  loadClickEvent(props.aboutBtn, props.removeClass);
  loadClickEvent(props.serviceBtn, props.removeClass);
  loadClickEvent(props.portfolioBtn, props.removeClass);
  loadClickEvent(props.contactBtn, props.removeClass);
}

const regularExpressions = {
  name: /^[a-zA-ZÀ-ÿ]+\s[a-zA-ZÀ-ÿ]+$/, // Letras y espacios, pueden llevar acentos.
  message: /^[a-zA-ZÀ-ÿ ]{20,140}$/, // Letras y espacios, pueden llevar acentos minimo 20 palabras.
  servicio: /^[a-zA-ZÀ-ÿ]{8,140}$/, // Letras y espacios, pueden llevar acentos minimo 20 palabras.
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

export { loadKeyupEvent, loadBlurEvent, loadClickEvent, loadSubmitEvent, loadClickMainEvent, regularExpressions };
