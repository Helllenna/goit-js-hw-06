const form = document.querySelector(".login-form");

form.addEventListener("submit", handleEvent);
const { email, password } = form;

function handleEvent(event) {
  event.preventDefault();

  if (email.value === "" || password.value === "") {
    alert("Всі поля мають бути заповнені!");
  }

  if (email.value && password.value) {
    console.log({ email: email.value, password: password.value });
    event.currentTarget.reset();
  }
}
