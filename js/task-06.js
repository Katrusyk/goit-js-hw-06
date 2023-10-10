const input = document.getElementById("validation-input");

input.addEventListener("blur", () => {
  const expectedLength = parseInt(input.getAttribute("data-length"), 10); // Отримуємо очікувану кількість символів
  const inputValue = input.value.trim(); // Отримуємо вміст інпуту та обрізаємо зайві пробіли

  if (inputValue.length === expectedLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});
