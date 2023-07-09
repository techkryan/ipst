/* отфильтровать выборкой массив и бинарным поиском найти элемент:
[6,1,7,3,5,8,0,-1,3,2,4,5] искомое число 0 */
"use strict";

let array = [6,1,7,3,5,8,0,-1,3,2,4,5];

function binarySearch(array, item) {
  let start = 0;
  let end = array.length;

  while (start <= end) {
    const middle = Math.floor( (start + end) / 2 );

    if (array[middle] === item) {
      return middle;
    }

    if (item < array[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1
    }
  }
  return -1;
}

function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let indexMin = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[indexMin]) {
        indexMin = j;
      }
    }
    if (indexMin != i) {
      [array[i], array[indexMin]] = [array[indexMin], array[i]]
    }
  }
  return array;
}

/* It should be noted that applying binary search after sorting an array makes
little sense as time consumption of the latter is higher than using a search
algorithm within an unsorted array alone */

let sorted = selectionSort(array);

alert(`${sorted}\nIndex of 0: ${binarySearch(sorted, 0)}`);