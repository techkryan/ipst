/* сортировкой пузырьком сортируем массив [1,2,3,6,8,1,6,3,2,1,0,4] и надо
его склеить с массивом строк ['one', 'two','three'] решенным заданием
будет сичтаться массив [0,1,1,1,2,2,3,3,4,6,6,8,'one','two','three'] */
"use strict";

const array = [1,2,3,6,8,1,6,3,2,1,0,4];

const bubbleSort = (array) => {
  for (let j = 0; j < array.length - 1; j++) {
    let cond = true;
    for (let i = 0; i < array.length - 1 - j; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        cond = false;
      }
    }
  if (cond) return array;
  }
};

const sorted = bubbleSort(array);
const numbers = ['one', 'two', 'three'];

alert([].concat(sorted, numbers));