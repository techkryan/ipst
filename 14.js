// вывести числа фибоначчи
"use strict";

/* // Recursive implementation
const fib = (n) => {
  if (n <= 1) return n;

  return fib(n - 1) + fib(n - 2);
} 

const fibN = (n) => {
  const seq = [];

  for (let i = 1; i <= n; i++) {
    seq.push( fib(i) );
  }
  
  return seq;
}
*/

const fibN = (n) => {
  if (n === 1 || n === 2) return 1;

  let a = 1;
  let b = 1;
  let arr = [1, 1];

  for (let i = 3; i <= n; i++) {
    let c = a + b;
    arr.push(c);
    a = b;
    b = c;
  }

  return arr;
}

alert( fibN(77) );