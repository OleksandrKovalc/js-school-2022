// пример 1
// const age = 16;
// const category = age >= 18 ? "взрослый" : "ребенок";
// console.log(category);

//пример 2
// const stars = 3;

// if (stars === 1) {
//   console.log("1");
// } else if (stars === 2) {
//   console.log("2");
// } else if (stars === 3) {
//   console.log("3");
// } else if (stars === 4) {
//   console.log("4");
// } else if (stars === 5) {
//   console.log("5");
// } else {
//   console.log("не верный ввод");
// }

// пример 3
// const stars = 7;
// let result;
// switch (stars) {
//   case 1:
//     result = "1";
//     break;
//   case 2:
//     result = "2";
//     break;
//   case 3:
//     result = "3";
//     break;
//   case 4:
//     result = "4";
//     break;
//   case 5:
//     result = "5";
//     break;
//   default:
//     result = "error";
// }
// console.log(result);

//пример 4

let stars = 4;
let price = 0;
switch (stars) {
  case 1:
    price = "20";
    break;
  case 2:
    price = "30";
    break;
  case 3:
  case 4:
    price = "40";
    break;
  case 5:
    price = "50";
    break;
  default:
    price = "error";
}
console.log(price);
