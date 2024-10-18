"use strict";
class BankAccount {
  #balance = 0;
  constructor(balance) {
    if (
      typeof balance !== "number" ||
      Number.isNaN(balance) ||
      balance === undefined ||
      balance < 0
    ) {
      throw new Error("Введите валидное число!");
    }
    this.#balance = balance;
  }
  getBalance() {
    return `Ваш баланс составляет ${this.#balance} тг`;
  }
  deposit(amount) {
    try {
      if (
        typeof amount === "number" &&
        !Number.isNaN(amount && amount !== undefined)
      ) {
        if (amount < 0) {
          throw new Error("Вы не можете ввести сумму меньше нуля!");
        }
        this.#balance += amount;
        console.log(
          `Ваш баланс пополнен на ${amount} тг и составляет ${this.#balance} тг`
        );
      } else {
        throw new Error("Проверьте корректность ввода!");
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  withdraw(amount) {
    try {
      if (
        typeof amount === "number" &&
        !Number.isNaN(amount) &&
        amount !== undefined
      ) {
        if (amount <= 0) {
          throw new Error("Вы не можете ввести сумму меньше или равную нулю!");
        } else if (amount > this.#balance) {
          throw new Error("На счету недостаточно средств для такой операции!");
        } else {
          this.#balance -= amount;
          console.log(
            `С вашего баланса списана сумма: ${amount} тг и теперь он составляет ${
              this.#balance
            } тг`
          );
        }
      } else {
        throw new Error("Проверьте корректность ввода!");
      }
    } catch (error) {
      console.log(error.message);
    }
  }
}

const myBalans = new BankAccount(1000);
console.log(myBalans.getBalance());

myBalans.deposit(5000);
myBalans.withdraw(4000);
