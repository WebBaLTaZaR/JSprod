"use strict";
const buttonText = document.querySelector(".buttonText");
const textValue = document.querySelector("#textValue");
const ul = document.querySelector("ul");

buttonText.addEventListener("click", () => {
  try {
    if (textValue.value.length >= 3 && textValue.value.length <= 10) {
      ul.insertAdjacentHTML("beforeend", `<li>${textValue.value}</li>`);
    } else {
      throw new Error("Минимум 3 символа, максимум 10!");
    }
  } catch (error) {
    alert(error.message);
  }
});
