const addParemeterIfneeded = (method, parameter) => { return parameter !== "" ? () => { method(parameter); }: method; };
const addMouseEnterEvent = (element, methodMouseEnter, parameter = "") => {
  element.addEventListener("mouseenter", addParemeterIfneeded(methodMouseEnter, parameter));
};
const addMouseLeaveEvent = (element, methodMouseLeave, parameter = "") => {
  element.addEventListener("mouseleave", addParemeterIfneeded(methodMouseLeave, parameter));
};
const addKeyupEvent = (element, methodKeyup, parameter = "") => {
  element.addEventListener("keyup", addParemeterIfneeded(methodKeyup, parameter));
};
const addBlurEvent = (element, methodBlur, parameter = "") => {
  element.addEventListener("blur", addParemeterIfneeded(methodBlur, parameter));
};
const addClickEvent = (element, methodClick, parameter = "") => {
  element.addEventListener("click", addParemeterIfneeded(methodClick, parameter));
};
const addSubmitEvent = (element, methodSubmit, parameter = "") => {
  element.addEventListener("submit", (e) => { methodSubmit(parameter, e); }, false);
};
const addResizeEvent = (element, methodResize, parameter = "") => {
  element.addEventListener("resize", addParemeterIfneeded(methodResize, parameter));
};

export { addMouseEnterEvent, addMouseLeaveEvent, addKeyupEvent, addBlurEvent, addClickEvent, addSubmitEvent, addResizeEvent };
