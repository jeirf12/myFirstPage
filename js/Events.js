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
  loadClickEvent(props.iniBtn, props.removeClass);
  loadClickEvent(props.aboutBtn, props.removeClass);
  loadClickEvent(props.serviceBtn, props.removeClass);
  loadClickEvent(props.portfolioBtn, props.removeClass);
  loadClickEvent(props.contactBtn, props.removeClass);
}

const regularExpressions = {
  name: /^\w+\s\w+$/, // Letras y espacios, pueden llevar acentos.
  message: /^[a-zA-ZÀ-ÿ_.+-\s]{20,140}$/, // Letras y espacios, pueden llevar acentos minimo 20 palabras.
  servicio: /^\S+[a-zA-ZÀ-ÿ\s]{20,140}$/, // Letras y espacios, pueden llevar acentos minimo 20 palabras.
  password: /^.{4,12}$/, // 4 a 12 digitos.
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

export { loadKeyupEvent, loadBlurEvent, loadClickEvent, loadSubmitEvent, loadClickMainEvent, regularExpressions };
