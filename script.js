const email = document.querySelector("#email");
const errorEl = document.querySelector(".error");
const formEl = document.querySelector(".form");
const wrapperEl = document.querySelector(".wrapper");
const successEl = document.querySelector(".success");
const dismissEl = document.querySelector(".dismiss");
console.log(email);

email.addEventListener("input", () => {
  if (email.validity.valid) {
    errorEl.textContent = "";
  }
});

//submit the form
formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  // if the email field is valid, we let the form submit
  if (email.validity.valid) {
    email.value = "";
    wrapperEl.classList.add("none");
    successEl.classList.remove("none");
  }
  if (!email.validity.valid) {
    // If it isn't, we display an appropriate error message
    showError();
  }
  // Then we prevent the form from being sent by canceling the event
  //   e.preventDefault();
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

dismissEl.addEventListener("click", (e) => {
  wrapperEl.classList.remove("none");
  successEl.classList.add("none");
});
