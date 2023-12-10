// const column = document.querySelectorAll(".elements");
const button = document.querySelector("#yourButtonId");
const fierstN = document.querySelector('input[name = "fierstName"]');

button.addEventListener("click", (event) => {
  const inputs = document.querySelectorAll(".elements input");
  const inputsP = document.querySelectorAll(".elements p");
  const blockWrong = document.querySelector(".block_wrong");
  //   const showWrong = document.querySelectorAll(".show_wrong");
  inputs.forEach((input, index) => {
    const showWrong = input.nextElementSibling.querySelector(".wrong");
    showWrong.style.display = "none";

    if (!input.value) {
      input.style.borderColor = "red";
      blockWrong.style.display = "block";
      showWrong.style.display = "block";

      if (inputsP[index]) {
        inputsP[index].style.color = "red";
      }
    } else {
      input.style.borderColor = "initial";
      showWrong.style.display = "none";

      if (inputsP[index]) {
        inputsP[index].style.color = "initial";
      }
    }
  });
});

const close = document.querySelector(".close");
close.addEventListener("click", () => {
  const blockWrong = document.querySelector(".block_wrong");
  blockWrong.style.display = "none";
});

// Функция, которая вызывается при клике на кнопку
function onButtonClick() {
  // Здесь должен быть ваш код, который срабатывает при клике на кнопку
  console.log("Кнопка нажата!");
}

// Добавление события click к кнопке
button.addEventListener("click", onButtonClick);

// Обработчик события keydown для всего документа
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    // Проверяем, не находится ли пользователь в текстовом поле
    if (
      document.activeElement.tagName !== "INPUT" &&
      document.activeElement.tagName !== "TEXTAREA"
    ) {
      onButtonClick(); // Вызываем функцию нажатия кнопки
    }
  }
});
