/* создать класс calculation, в котором будет одна переменная calculationLine.
методы: setterCalculationLine который будет к переменной приравнивать значение
которое передается, setLastSymbolCalculationLine который будет в конец строки
прибавлять символ, gettercalCulationLine который будет выводить переменную,
lastSymbol получение последнего символа, deleteLastSymbol удаление последнего
символа из строки */
"use strict";

class Calculation {

  constructor(string) {
    this._calculationLine = string;
  }

  setterCalculationLine(string) {
    this._calculationLine = string;
  }
  
  getterCalculationLine() {
    return this._calculationLine;
  }

  setLastSymbolCalculationLine(symbol) {
    if (symbol.length !== 1) {
      throw new Error('Length of the string argument must be equal to 1');
    }
    this._calculationLine += symbol;
  }

  lastSymbol() {
    return this._calculationLine.at(-1);
  }

  deleteLastSymbol() {
    const removed = this.lastSymbol();
    this._calculationLine = this._calculationLine.slice(0, -1);
    return removed;
  }
}

let calc = new Calculation('Hello');

calc.setLastSymbolCalculationLine('!');
console.log( calc.deleteLastSymbol() );
console.log( calc.getterCalculationLine() )