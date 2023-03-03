const fontSizeControlEL = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

textEl.setAttribute("style", `font-size: ${fontSizeControlEL.value}px`);

fontSizeControlEL.addEventListener("input", handleResizing);

function handleResizing() {
  textEl.style.fontSize = `${fontSizeControlEL.value}px`;
}
