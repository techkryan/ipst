/* вывести все элементы из двумерного массива [[1,4,5],[1,3,4],[2,6]] добавить
все элементы в одномерный массив [1,4,5,1,3,4,2,6] и отсоритровать его */
"use strict";

const printNested = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'object') {
      printNested(array[i])
    } else console.log(array[i]);
  }
};

const arr = [[1,4,5],[1,3,4],[2,6]];

printNested(arr);

const sorted = arr.flat().sort();

console.log(sorted);
