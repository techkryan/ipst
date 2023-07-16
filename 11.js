/* Модифицируйте класс Worker из предыдущей задачи следующим образом: сделайте
все его свойства приватными, а для их чтения сделайте методы-геттеры. */
"use strict";

class Worker {
  #name;
  #surname;
  #rate;
  #days;

  constructor(name, surname, rate, days) {
    this.#name = name;
    this.#surname = surname;
    this.#rate = rate;
    this.#days = days;
  }

  get name() {
    return this.#name;
  }

  get surname() {
    return this.#surname;
  }

  get rate() {
    return this.#rate;
  }

  get days() {
    return this.#days
  }

  getSalary() {
    return this.#rate*this.#days;
  }
}

let worker = new Worker('Иван', 'Иванов', '1000', '23');

alert(worker.getSalary())