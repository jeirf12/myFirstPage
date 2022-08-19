const loadInputEvent = (element, methodInput) => {
  element.addEventListener("input", () => methodInput());
}

const loadClickEvent = (element, methodClick, parameter="") => {
  element.addEventListener("click", () => {
    if(parameter != "") methodClick(parameter);
    else methodClick();
  });
}

const loadSubmitEvent = (element, methodSubmit) => {
  element.addEventListener("submit", (e) => methodSubmit(e), false);
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

export { loadInputEvent, loadClickEvent, loadSubmitEvent, loadClickMainEvent };
