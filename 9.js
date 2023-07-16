// Напишите функцию, которая поверхностно сравнивает два объекта
"use strict";

const isEqual = (object1, object2) => {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
}

const obj1 = { a: 1, b: 1 };
const obj2 = { a: 1, b: 1 };

alert(isEqual(obj1, obj2));

