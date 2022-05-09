/* const add = function (a, b) {
  let c = a + b;
  //   console.log(c);
  return c;
};

const d = add(1, 2);
console.log(d);

const t = add(10, 15);
console.log(t); */

// функция для перебора массива

/* const friends = ["Mango", "Kiwi", "Poly"];
const nameFind = "Poly";
let messge = "без ответа"; */

// //пример цикла
/* 
for (const friend of friends) {
  if (nameFind === friend) {
    messge = "нашли";
    break;
  }
} 
*/

// console.log(messge);

//нашли в массиве нужное имя и вывели сообщение
/* const friends = ["Mango", "Kiwi", "Poly"];
const nameFind = "Poly";

const findFriends = function (allFriends, name) {
  console.log(name);
  console.log(allFriends);

  for (const friend of friends) {
    if (name === friend) {
      return "nawli";
    }
  }

  return "no";
};

const r1 = findFriends(friends, "Poly");
console.log(r1);

const r2 = findFriends(friends, "Sawa");
console.log(r2); */

//slugs function

/* 
// нашли в массиве нужное имя и вывели сообщение
// нdshh hdsjd sjd jsdj jdsjs jdj sjdj s dj jsие

const title = "разделили строку и добавили дефиз и вывели";
const words = title.toLowerCase().split(" ");
const slug = words.join("-");
console.log(slug);
*/

//or 2 variant

/* const addSpace = function (string) {
  const words = string.toLowerCase().split(" ");
  const slug = words.join("-");
  return slug;
};

const title = "разделили строку и добавили дефиз и вывели";

const result1 = addSpace(title);
console.log(result1);

const result2 = addSpace("нdshh hdsjd sjd jsdj jdsjs jdj sjdj s dj jsие");
console.log(result2);
 */

//поиск самого маленького числа if else
/* const numbers = [67, 45, -3, 78, 90, 2];
let smallNumbers = numbers[0];

for (let i = 1; i < numbers.length; i += 1) {
  if (numbers[i] < smallNumbers) {
    smallNumbers = numbers[i];
  }
} */

//поиск самого маленького числа function

/* const numbers = [67, 45, -3, 78, 90, 2];

const findNumbers = function (arrowNumber) {
  let smallNumbers = arrowNumber[0];

  for (let i = 1; i < numbers.length; i += 1) {
    if (arrowNumber[i] < smallNumbers) {
      smallNumbers = arrowNumber[i];
    }
  }
  return smallNumbers;
};

let result1 = findNumbers(numbers);
console.log(result1);

let result2 = findNumbers([90, 76, 34, 2, 13]);
console.log(result2);
 */

//нашли в массиве нужное имя и вывели сообщение INCLUDS
/* const friends = ["Mango", "Kiwi", "Poly"];
const nameFind = "Poly";

const findFriends = function (allFriends, name) {
  const oneFriends = allFriends.includes(name);

  // variant 1
  // if (oneFriends === true) {
  //   return "нашли";
  // }

  // variant 2
  return oneFriends ? "finded" : "не нашли";
};

const r1 = findFriends(friends, "Poly");
console.log(r1);
 */

// добавляем удаляем ячейки массива

/* const cards = ["card-1", "card-2", "card-3", "card-4", "card-5"];

const resultRemove = function (allCards, cardRemoved) {
  let index = allCards.indexOf(cardRemoved);
  // console.log(index);
  let allCards2 = allCards.slice();
  let result = allCards2.splice(index, 1);
  // console.log(allCards2);
  // console.log(result);
  return result;
};

let result1 = resultRemove(cards, "card-3");
console.log(result1);

const AddCards = function (allCards, cardAdds, index) {
  allCards.splice(index, 0, cardAdds);
  // console.log(allCards);
  return allCards;
};

let resultAdds = AddCards(cards, "card-8", 2);
console.log(resultAdds); */

//добавляем посты и привязываем к тегам
/* const posts = ["post-1", "post-2", "post-3", "post-4", "post-5"];
const tag = "#jScript";

const postWithTag = [];

for (const post of posts) {
  postWithTag.push("${post}${tag}");
}
console.log(postWithTag); */

