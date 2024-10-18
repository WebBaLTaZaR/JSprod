"use strict";
const comments = document.querySelector(".comments");
const product = document.querySelector(".product");
const comment = document.querySelector(".comment");
const select = document.querySelector("select");
const textArea = document.querySelector("textarea");
const sendButton = document.querySelector(".send");
initialData.forEach((element) => {
  // Преобразуем отзывы в одну строку с помощью map и join
  const reviewsHtml = element.reviews
    .map((item) => `<p>${item.text}</p>`)
    .join("");

  // Вставляем HTML-код с продуктом и его отзывами
  comments.insertAdjacentHTML(
    "beforeend",
    `
			<div class="product">${element.product}</div>
			  <div class="comment">${reviewsHtml}</div>
			`
  );
});

sendButton.addEventListener("click", () => {
  try {
    if (textArea.value.length < 50 || textArea.value.length > 500) {
      throw new Error("Текст не может быть меньше 50 и более 500 символов");
    } else {
      comments.insertAdjacentHTML(
        "beforeend",
        `
				<div class="product">${select.value}</div>
					  <div class="comment">${textArea.value}</div>
				`
      );
      textArea.value = "";
    }
  } catch (error) {
    alert(error.message);
  }
});
