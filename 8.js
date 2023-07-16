/* Напишите функцию, которая возвращает вложенный массив вида
[[key, value], [key, value]] Ожидаемый результат:
({ a: 1, b: 2 }) => [['a', 1], ['b', 2]] */
"use strict";

const getEntries = (object) => {
  let arr = [];

  for (const key in object) {
    arr.push([key, object[key]]);
  }

  return arr;
};

const object = {
  a: 1,
  b: 2,
};

console.log(getEntries(object));

// // Or, alternatively
// console.log(Object.entries(object));