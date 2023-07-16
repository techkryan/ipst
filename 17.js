// https://leetcode.com/problems/roman-to-integer/
"use strict";

// This is how I solved the task:
/* function romanToInt(s) {
  const ROMAN = {
    I:  1,
    IV: 4,
    V:  5,
    IX: 9,
    X:  10,
    XL: 40,
    L:  50,
    XC: 90,
    C:  100,
    CD: 400,
    D:  500,
    CM: 900,
    M:  1000,
  };

  let ans = 0;

  for (let i = 0; i < s.length; i++) {
    curr = s[i]
    pair = curr + s[i+1];

    if (pair in ROMAN) {
      ans += ROMAN[pair];
      i++;
    } else {
      ans += ROMAN[s[i]];
    }
  }

  return ans;
} */

// ...And this is how it should have been solved:
function romanToInt(s) {
  const ROMAN = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let ans = 0;

  for (let i = 0; i < s.length; i++) {
    const curr = ROMAN[s[i]];
    const next = ROMAN[s[i+1]]

    if (curr < next) {
      ans -= curr;
    } else {
      ans += curr;
    }
  }

  return ans;
}

console.log( romanToInt('III') );
console.log( romanToInt('LVIII') );
console.log( romanToInt('MCMXCIV') );