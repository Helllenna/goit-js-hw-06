const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", handleClick);
input.addEventListener("input", handleClick);

function handleClick(event) {
  event.currentTarget.value
    ? (output.textContent = event.currentTarget.value)
    : (output.textContent = "Anonymous");
}
