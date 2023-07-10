/* сделать палиндромы из строк "дим" "an" "рота" "аргентинам" чтоб получилось
"димид" "ana" "ротатор" */
"use strict";

const strReverse = (str) => [...str].reverse().join('');
const createPalindrome = (str) => str + strReverse(str.slice(0,-1));

const strings = ['дим', 'an', 'рота', 'аргентинам'];

for (const str of strings) {
  console.log( createPalindrome(str) );
}