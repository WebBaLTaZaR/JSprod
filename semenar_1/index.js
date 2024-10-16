"use strict";
const musicCollection = {
  albums: [
    { title: "Abbey Road", artist: "The Beatles", year: 1969 },
    { title: "Thriller", artist: "Michael Jackson", year: 1982 },
    { title: "The Dark Side of the Moon", artist: "Pink Floyd", year: 1973 },
    { title: "Back in Black", artist: "AC/DC", year: 1980 },
  ],
  [Symbol.iterator]() {
    let index = 0;
    const albums = this.albums;
    return {
      next() {
        if (index < albums.length) {
          return { value: albums[index++], done: false };
        } else {
          return { value: undefined, done: true };
        }
      },
    };
  },
};
for (const album of musicCollection) {
  console.log(`${album.title} - ${album.artist} (${album.year})`);
}
// ================================== 2 задание =======================================================

const chefs = new Map([
  ["Пицца Маргарита", "повар: Виктор"],
  ["Пицца Пепперони", "повар: Виктор"],
  ["Суши Филадельфия", "повар: Ольга"],
  ["Суши Калифорния", "повар: Ольга"],
  ["Тирамису", "повар: Дмитрий"],
  ["Чизкейк", "повар: Дмитрий."],
]);

const clientAlex = {
  name: "Алексей",
};
const clientIrina = {
  name: "Ирина",
};
const clientMaria = {
  name: "Мария",
};
const ordersMap = new Map();

function addOrder(client, dish) {
  if (ordersMap.has(client)) {
    ordersMap.get(client).push(dish);
  } else {
    ordersMap.set(client, [dish]);
  }
}

addOrder(clientAlex, "Пицца Пепперони");
addOrder(clientAlex, "Тирамису");
addOrder(clientMaria, "Суши Калифорния");
addOrder(clientAlex, "Пицца Маргарита");
addOrder(clientIrina, "Чизкейк");

function showClientOrders(client) {
  const orders = ordersMap.get(client);
  if (client) {
    console.log(`Заказы клиента ${client.name} следующие:`);
    orders.forEach((dish) => {
      const chef = chefs.get(dish);
      console.log(`${dish}, приготовил ${chef}`);
    });
  } else {
    console.log(`У клиента - ${client} нет заказов`);
  }
}
showClientOrders(clientAlex);
showClientOrders(clientIrina);
showClientOrders(clientMaria);
