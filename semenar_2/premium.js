"use strict";
class User {
  #name;
  #surname;
  constructor(name, surname) {
    this.#name = name;
    this.#surname = surname;
  }
}

class RegularUser extends User {
  constructor(name, surname) {
    super(name, surname);
  }
}
class PremiumUser extends User {
  #duration = new Date().setFullYear(new Date().getFullYear() + 1);
  constructor(name, surname) {
    super(name, surname);
  }
  getAccountInfo(user) {
    return this.#duration;
  }
}
const user1 = new PremiumUser("Sergey", "Gricaev");
console.log(user1?.getAccountInfo());

const user2 = new RegularUser("Sergey", "Gricaev");
console.log(user2?.getAccountInfo?.());
