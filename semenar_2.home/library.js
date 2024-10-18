"use strict";
class Library {
  #books = [];
  constructor(books) {
    if (new Set(books).size !== books.length) {
      throw new Error("Массив книг содержит дубликаты!");
    } else {
      console.log("Библиотека инициализирована!");
      this.#books = books;
    }
  }
  getallBooks() {
    return this.#books;
  }
  addBook(title) {
    try {
      if (this.#books.includes(title)) {
        throw new Error(`Книга с называнием ${title} уже лежит на полке!`);
      } else {
        this.#books.push(title);
        console.log(`Книга ${title} добавлена на полку`);
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  removeBook(title) {
    try {
      let bookIndex = this.#books.findIndex((n) => n === title);
      if (bookIndex >= 0) {
        this.#books.splice(bookIndex, 1);
        console.log(`Книга ${title} удалена из библиотеки`);
      } else {
        throw new Error("Такой книги нет в библиотеке");
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  hasBook(title) {
    if (this.#books.includes(title)) {
      console.log(`Книга ${title} есть в библиотеке!`);
    } else {
      console.log(`Увы, ${title} в библиотеке нет!`);
    }
  }
}

const biblio = new Library(["book", "boobook", "booooooook"]);
biblio.addBook("novaya kniga");
biblio.addBook("staraya kniga");
biblio.addBook("staraya kniga");
biblio.addBook("new kniga");
biblio.addBook("english kniga");
biblio.addBook("russian kniga");
biblio.removeBook("staraya kniga");
console.log(biblio.getallBooks());
biblio.hasBook("new kniga");
