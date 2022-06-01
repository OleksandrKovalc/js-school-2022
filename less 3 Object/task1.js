/* const hotel = {
  name: "alsd",
  stars: 5,
  capacity: 200,
};
console.log(hotel);
console.log(hotel.name);

hotel.stars = 3;
console.log(hotel); */

//methods
/* const hotel = {
  name: "sfs",
  stars: 5,
  capacity: 200,
  updateHotelName: function (newName) {
    this.name = newName;
  },
};

console.log(hotel); 
*/

//for IN
/* const feedback = {
  good: 3,
  neutral: 5,
  negative: 10,
};

for (const key in feedback) {
  console.log(key);
  console.log(feedback[key]);
}
 */

//Object.keys
const feedback = {
  good: 3,
  neutral: 5,
  negative: 10,
};

const keys = Object.keys(feedback);
console.log(keys);

let sum = 0;
for (const key of keys) {
  //   console.log(keys);
  sum += feedback[key];
  console.log(sum);
}
