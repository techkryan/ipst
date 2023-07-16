// вывести все числа делящиеся только на себя до 100
"use strict";

const primes = (n) => {
  let boolArr = new Array(n).fill(true);

  for (let i = 2; i**2 <= n; i++) {
    if (boolArr[i - 1]) {
      for (let j = i**2; j <= n;) {
        boolArr[j - 1] = false;
        j += i;
      }
    }
  }

  let arr = [];
  boolArr.forEach((curr, ind) => {
    if (curr) arr.push(ind+1);
  });

  return arr.slice(1);
};

alert(primes(100))