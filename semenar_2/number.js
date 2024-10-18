"use strict";
const button = document.querySelector("button");
const input = document.querySelector("input");
const div = document.querySelector("div");
button.addEventListener("click", () => {
  try {
    if (!isNaN(+input.value) && input.value !== "") {
      div.innerHTML = `Всё норм, это число`;
    } else {
      div.innerHTML = `Введите пожалуйста число!`;
      throw new Error("Введите пожалуйста число!");
    }
  } catch (error) {
    console.log(error.message);
  }
});
