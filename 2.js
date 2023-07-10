/* В переменной month лежит какое-то число из интервала от 1 до 12(можно
рандомайзер сделать). Определите в какую пору года попадает этот месяц (зима,
лето, весна, осень). В переменной year лежит какой то год например 2022.
Определите високосный это год или нет. */
"use strict";

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1) + min);
}

/* function inRange(x, min, max) {
  return x >= min && x <= max;
} */

const month = getRandomInt(1, 12);
const year = getRandomInt(1917, 2023);

const months = new Map([
  [[12,1,2], 'зима'],
  [[3,4,5], 'весна'],
  [[6,7,8], 'лето'],
  [[9,10,11], 'осень']
]);

months.forEach((value, key) => {
  if (key.includes(month)) {
    const isLeap = year % 4 == 0 ? 'високосный' : 'невисокосный';
    alert(`${month}-й месяц ${year}-го года\n${value}, ${isLeap} год`);
  }
});


