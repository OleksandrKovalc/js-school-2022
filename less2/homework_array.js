// Давайте произведём 5 операций с массивом.
// Создайте массив styles с элементами «Джаз» и «Блюз».
// Добавьте «Рок-н-ролл» в конец.
// Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
// Удалите первый элемент массива и покажите его.
// Вставьте Рэп и Регги в начало массива.

/* let styles = ["Джаз", "Блюз"];
styles.push("Rock");
console.log(styles);

styles[Math.floor((styles.length - 1) / 2)] = "classic";
console.log(styles);

const res1 = styles.shift();
console.log(res1);
console.log(styles);

const res2 = styles.unshift("Rap", "Raggi");
console.log(res2);
console.log(styles); */

//
// task 2
//
// Напишите функцию sumInput(), которая:
// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.

const sumInput = function () {
  let array = [];
  let input;
  let sum = 0;
  while (true) {
    input = prompt("write number", 0);

    if (input === null || input === NaN) {
      console.log(sum);
      break;
    }
    input = Number(input);
    array.push(input);
    console.log(array);

    sum += input;
  }
};

sumInput();
