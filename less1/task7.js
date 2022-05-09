//задача 1

// Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“
// Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!»

// let nameLang = prompt("какое название языка?", "");

// do {
//   if (nameLang === null) {
//     alert("cancel");
//     break;
//   } else if (nameLang === "EcmaScript") {
//     alert("Yes");
//     break;
//   } else {
//     alert("no");
//     break;
//   }
// } while (true);

//задача 2
// Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:

// let number = prompt("write number", "");
// if (number > 0) {
//   alert("1");
// } else if (number < 0) {
//   alert("-1");
// } else {
//   alert("0");
// }

// задача 4
// Перепишите конструкцию if с использованием условного оператора '?':

// let result = a + b < 4 ? "litle" : "over";

// задача 5 массивы
// Давайте произведём 5 операций с массивом.

// Создайте массив styles с элементами «Джаз» и «Блюз».
// Добавьте «Рок-н-ролл» в конец.
// Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
// Удалите первый элемент массива и покажите его.
// Вставьте «Рэп» и «Регги» в начало массива.


// let styles = ["Jaz", "Bluz"];
// styles.push("Rock");
// console.log(styles);

// styles.splice(styles.length / 2, 1);
// console.log(styles);

// styles.splice(styles.length / 2, 0, "Классика");

// console.log(styles);

// let shiFt = styles.shift();

// console.log(shiFt);
// console.log(styles);

// styles.unshift("Rap", "sdsdf");
// console.log(styles);


//задача 6
