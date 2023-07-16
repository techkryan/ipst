/* https://github.com/jakiichu/data/blob/main/data.json вывести из объекта
адрес в формате 'Город: city2 Улица: street2 Дом: house2'. из этого же объекта
вывести 'фамилия personLastName имя personFirstName купил 5 штук товаров name'
*/
"use strict";

async function showClientInfo(requestURL) {
  const request = new Request(requestURL);

  const response = await fetch(request);
  const data = await response.json();

  console.log(getClientAddress(data));
  console.log(getClientStats(data));
}

function getClientAddress(obj) {
  const a = obj.address;
  return `Город: ${a.city}\nУлица: ${a.street}\nДом: ${a.house}`;
}

function getClientStats(obj) {
  const fullName = obj.person.lastName + ' ' + obj.person.firstName;
  const product = obj.productsOrder.product.name;

  return `${fullName} купил 5 штук товаров ${product}`
}

const requestURL = "https://raw.githubusercontent.com/jakiichu/data/main/data.json";
showClientInfo(requestURL);