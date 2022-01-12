var form  = document.getElementsByTagName('form')[0];
var email = document.getElementById('mail');
var error = document.querySelector('.error');

email.addEventListener("input", () => {
  if (email.validity.valid) {
    error.innerHTML = ""; 
    error.className = "error"; 
  }
}, false);

form.addEventListener("submit", (event) => {
  if (!email.validity.valid) {
    error.innerHTML = "I expect an e-mail, darling!";
    error.className = "error active";
    event.preventDefault();
  }
}, false);
