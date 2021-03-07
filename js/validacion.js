var form  = document.getElementsByTagName('form')[0];
var email = document.getElementById('mail')[0];
var error = document.querySelector('.error');

email.addEventListener("input", function (event) {
  if (email.validity.valid) {
    error.innerHTML = ""; 
    error.className = "error"; 
  }
}, false);

form.addEventListener("submit", function (event) {
  if (!email.validity.valid) {
    error.innerHTML = "I expect an e-mail, darling!";
    error.className = "error active";
    event.preventDefault();
  }
}, false);
