/* Реализуйте класс MyString, который будет иметь следующие методы: метод
reverse(), который параметром принимает строку, а возвращает ее в перевернутом
виде, метод ucFirst(), который параметром принимает строку, а возвращает эту
же строку, сделав ее первую букву заглавной и метод ucWords, который принимает
строку и делает заглавной первую букву каждого слова этой строки. */
"use strict";

class MyString{
  static reverse(string) {
    return [...string].reverse().join('');
  }

  static ucFirst(string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  static ucWords(string) {
    return string.split(' ').map(this.ucFirst).join(' ');
  }
}

let str = 'hello world'

console.log( MyString.reverse(str) );
console.log( MyString.ucFirst(str) );
console.log( MyString.ucWords(str) );