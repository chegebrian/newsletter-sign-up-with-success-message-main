const email = document.querySelector("#email");
const errorEl = document.querySelector(".error");
const formEl = document.querySelector(".form");

//submit the form
formEl.addEventListener("submit", (e) => {
  // if the email field is valid, we let the form submit
  if (!email.validity.valid) {
    // If it isn't, we display an appropriate error message
    showError();
  }
  // Then we prevent the form from being sent by canceling the event
  e.preventDefault();
});

// error handling
function showError() {
  //empty field
  if (email.validity.valueMissing) {
    errorEl.textContent = "email address required";
    email.className = "tomato";
  }
  // not a valid email address
  else if (email.validity.typeMismatch) {
    errorEl.textContent = "invalid email address";
  }
}
