const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", (event) => {
  const inputValue = event.target.value.trim(); // Отримуємо значення інпуту та обрізаємо зайві пробіли з початку і кінця

  if (inputValue === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = inputValue;
  }
});
