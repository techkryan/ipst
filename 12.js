/* Модифицируйте класс Worker из предыдущей задачи следующим образом: для
свойства rate и для свойства days сделайте еще и методы-сеттеры.  */
"use strict";

class Worker {
  #name;
  #surname;
  #rate;
  #days;

  constructor(name, surname, rate, days) {
    this.#name = Worker.#validateName(name);
    this.#surname = Worker.#validateName(surname);
    this.#rate = Worker.#validateRate(rate);
    this.#days = Worker.#validateDays(days);
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
    return this.#days;
  }

  set rate(value) {
    this.#rate = this.#validateRate(value);
  }

  set days(value) {
    this.#days = this.#validateDays(value);
  }

  static #validateRate(rate) {
    if (typeof(rate) === 'number' && rate > 0) {
      return rate;
    }
    throw new Error('The "rate" must be a number greater than 0');
  }

  static #validateDays(days) {
    if (typeof(days) === 'number' && days >= 0) {
      return days;
    }
    throw new Error('The "days" must be a number greater than or equal to 0');
  }

  static #validateName(name) {
    if (typeof name === 'string') {
      let str = name.trim();
      if (str.length >= 2) {
        return str;
      }
    }
    throw new Error('The "name"/"surname" must be a string with at least 2 characters');
  }

  getSalary() {
    return this.#rate*this.#days;
  }
}

let worker = new Worker('Иван', 'Иванов', 1000, 23);