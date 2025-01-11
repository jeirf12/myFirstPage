export const validationForm = () => {
  addKeyupEvent(name, validations['name'], name);
  addBlurEvent(name, validations['name'], name);
  addKeyupEvent(service, validations['service'], service);
  addBlurEvent(service, validations['service'], service);
  addKeyupEvent(email, validations['email'], email);
  addBlurEvent(email, validations['email'], email);
  addKeyupEvent(message, validations['message'], message);
  addBlurEvent(message, validations['message'], message);

  addSubmitEvent(form, isValidForm, btn);
}

const form = document.getElementById('form');
const btn = document.getElementById('button');
const name = document.getElementById('name');
const service = document.getElementById('service');
const email = document.getElementById('email');
const message = document.getElementById('message');

const addParemeterIfneeded = (method, parameter) => { return parameter !== "" ? () => { method(parameter); }: method; };

const addKeyupEvent = (element, methodKeyup, parameter = "") => {
  element.addEventListener("keyup", addParemeterIfneeded(methodKeyup, parameter));
};

const addBlurEvent = (element, methodBlur, parameter = "") => {
  element.addEventListener("blur", addParemeterIfneeded(methodBlur, parameter));
};

const addSubmitEvent = (element, methodSubmit, parameter = "") => {
  element.addEventListener("submit", (e) => { methodSubmit(parameter, e); }, false);
};

const isValidForm = (btn, event) => {
  event.preventDefault();

  const isEmpty = isEmptyAllFields();
  if(!isEmpty) {
    btn.textContent = 'Enviando...';
    setTimeout(() => {
      btn.textContent = 'Entregado';
      alert('Mensaje enviado');
      event.target.reset();
    }, 3000);
  } else {
    alert('Warning: Falta campos por llenar');
  }
}

const isEmptyAllFields = () => {
  let result = 0;
  result += isValid('name');
  result += isValid('service');
  result += isValid('email');
  result += isValid('message');
  return result < 4;
}

const isValid = (nameInput) => {
  let result = 0;

  const element = document.getElementById(nameInput);
  const validation = 
    nameInput !== 'email'
      ? element.value
      : element.validity.valid && element.value !== "" && validationRegex.email.test(element.value);

  if (validation && validations[nameInput](element)) result++;

  return result;
}

const validations = {
  name: (element) => validateField(validationRegex.name, element, element.name),
  service: (element) => validateField(validationRegex.service, element, element.name),
  email: (element) => validateField(validationRegex.email, element, element.name),
  message: (element) => validateField(validationRegex.message, element, element.name),
}

const validationRegex = {
  name: /^[a-zA-ZÀ-ÿ]+\s[a-zA-ZÀ-ÿ]+$/, // Letras y espacios, pueden llevar acentos.
  service: /^[a-zA-ZÀ-ÿ]{8,140}$/, // Letras y espacios, pueden llevar acentos minimo 20 palabras.
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  message: /^[a-zA-ZÀ-ÿ0-9,.!?¿¡'"\s\-@#:/\\_+;(){}[\]]{20,1000}$/
 // Letras y espacios, pueden llevar acentos minimo 20 palabras.
}

const validateField = (expression, input, field) => {
  let element = document.getElementById(`group-${field}`);
  let elementIcon = document.querySelector(`#group-${field} i`);
  let elementMessage = document.querySelector(`#group-${field} .input-error`);

  if(expression.test(input.value)) {
    element.classList.remove('form-group-wrong');
    element.classList.add('form-group-ok');
    elementIcon.classList.remove('bxs-x-circle');
    elementIcon.classList.add('bxs-check-circle');
    elementMessage.classList.remove('input-error-active');
    return true;
  } else {
    element.classList.add('form-group-wrong');
    element.classList.remove('form-group-ok');
    elementIcon.classList.add('bxs-x-circle');
    elementIcon.classList.remove('bxs-check-circle');
    elementMessage.classList.add('input-error-active');
    return false;
  }
}
