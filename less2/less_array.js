// Выносим варианты в массив
// const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];
// const fruit = 'cherry';

// if (redFruits.includes(fruit)) {
//     console.log('It is a red fruit!');
// }

//пример 1
// const array2 = [1800, "2", true, "string"];

// console.log(array2.length);
// console.log(array2[0]);

// array2[0] = 'GoIt';

// console.log(array2);

// пример 2

// const numbers = [-100, 5, 150, 30, 40, 850];

// let maxNumber = numbers[0];
// let minNumber = numbers[0];

// for (let number of numbers) {
//     if (number > maxNumber) {
//         maxNumber = number;
//     }
//     if (number < minNumber) {
//         minNumber = number;
//     }
//     console.log(number);
// }

// console.log("Max:", maxNumber);
// console.log("Min:", minNumber);

// привер 3
// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// for (const array of matrix) {
//     console.log("ARRAY:", array);
//     let counter = 1;

//     for (const elem of array) {
//         console.log(`ELEM-${counter++}:`, elem);
//     }
// }

// push/unshift
// for (let i = 1; i < 100; i++) {
//     const randomNumber = Math.round(Math.random() * 100)
// }

// pop/shift

// const array1 = [1, 2, 3, 4, 5, 6, 7, 8];
// const array2 = array1.slice();

// console.log(array2.pop());
// console.log(array2);

// console.log(array2.shift());
// console.log(array2);

//метод возвращает часть массива
// console.log(array1.slice(0, array1.length / 2));
// console.log(array1.slice(-3));

// console.log(array2.reverse());

// const array3 = [true, 'goIt'];
//метод cоединения массивоов
// console.log(array2.concat(array3));

// разделяем массив на буквы
// const str = ' разбираем строку на буквы';
console.log(str.split("").reverse().join("-"));
const result = str.split("");
console.log(result);
// console.log(result.join(""));
