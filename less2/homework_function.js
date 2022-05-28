//https://learn.javascript.ru/function-basics#funktsii-kommentarii
// Перепишите функцию, используя оператор '?' или '||'
/* function checkAge(age) {
  const result = age > 18 ? true : alert("Родители разрешили?");
  console.log(result);
}
checkAge(20);
checkAge(10); */

/* function checkAge(age) {
  return age > 18 || confirm("Родители разрешили?");
}

let r1 = checkAge(2);
console.log(r1);

let r2 = checkAge(20);
console.log(r2); */

/* const arrow1 = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];
const arrow2 = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
const sumArrow = [];

const logItems = function (array) {
  let index = array.indexOf();
  console.log(index);

  for (let arrNumber of array) {
    sumArrow.push;
  }
};

logItems(arrow1);
 */

//Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
/* function minNumber(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

let r1 = minNumber(2, 5);
console.log(r1);

let r2 = minNumber(3, -1);
console.log(r2); */

//Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.
/* 
let a = prompt("number", "");
let b = prompt("degree", "");
console.log(a);
console.log(b);

function degreeNumbers(a, b) {
  let result = a;

  for (let i = 1; i < b; i++) {
    result = result * a;
    console.log(i);
  }
  return result;
} */

//var2

/* function degreeNumbers(a, b) {
  let degree = Math.pow(a, b);
  return degree;
} 

let r1 = degreeNumbers(a, b);
console.log(r1);
*/

//ЗАДАЧИ ИЗ GO IT

// Напиши скрипт подсчета стоимости гравировки украшений. Для этого создай функцию calculateEngravingPrice(message, pricePerWord) принимающую строку (в строке будут только слова и пробелы) и цену гравировки одного слова, и возвращающую цену гравировки всех слов в строке.

/* const calculateEngravingPrice = function (message, pricePerWord) {
  const result = message.split(" ").length * pricePerWord;
  console.log(result);
};

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    10
  )
); //80

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    20
  )
); //160
 */

//Напиши фукцнию findLongestWord(string), которая принимает параметром
// произвольную строку (в строке будут только слова и пробелы) и возвращает
// самое длинное слово в этой строке.
let arrayWords = [];
const findLongestWord = function (string) {
  console.log(string);
  let array2 = string.split(" ");
  for (let word of array2) {
    let arrayWords = arrayWords.push(word);
    console.log(word);
  }
  
  // array2.sort();
  // console.log(array2);
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
