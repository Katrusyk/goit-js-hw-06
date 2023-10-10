const counterValue = document.getElementById("value");
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');

let value = 0;

function updateCounter() {
  counterValue.textContent = value;
}

decrementButton.addEventListener("click", () => {
  value -= 1;
  updateCounter();
});

incrementButton.addEventListener("click", () => {
  value += 1;
  updateCounter();
});

updateCounter();
