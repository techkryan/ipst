/* Реализуйте класс Worker (Работник), который будет иметь следующие свойства:
name (имя), surname (фамилия), rate (ставка за день работы), days (количество
отработанных дней). Также класс должен иметь метод getSalary(), который будет
выводить зарплату работника. Зарплата - это произведение (умножение) ставки
rate на количество отработанных дней days */
"use strict";

class Worker {
  constructor(name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
  }

  getSalary() {
    return this.rate*this.days;
  }
}

let worker = new Worker('Иван', 'Иванов', '1000', '23')

alert(worker.getSalary())