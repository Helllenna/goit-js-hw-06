const btnDecrementEl = document.querySelector('[data-action="decrement"]');
const btnIncrementEl = document.querySelector('[data-action="increment"]');
const counterValueEl = document.querySelector("#value");

let counterValue = 0;

btnDecrementEl.addEventListener("click", handleDecrement);
btnIncrementEl.addEventListener("click", handleIncrement);

function handleIncrement(event) {
  counterValueEl.textContent = Number(counterValueEl.textContent) + 1;
}

function handleDecrement(event) {
  counterValueEl.textContent = Number(counterValueEl.textContent) - 1;
}
