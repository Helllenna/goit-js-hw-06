function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyEl = document.querySelector("body");
const btnSetColor = document.querySelector(".change-color");
const textColor = document.querySelector(".color");

btnSetColor.addEventListener("click", handleColorChange);
function handleColorChange(event) {
  const currentColor = getRandomHexColor();
  textColor.textContent = currentColor;
  bodyEl.style.backgroundColor = currentColor;
}
