const slugify = function (string) {
  const words = string.toLowerCase().split(" ");
  const slug = words.join("-");
  return slug;
};

const a = slugify("lo we r case");
console.log(a);

const articles = [
  "asdasdas asd asd asdvc asd asd asd asd asd a s",
  "asdasdas asd asd asd vcasd asd asd asd asd a s",
  "asdasdas asd asd asd fgasd asd asd asd asd a s",
  "asdasdas asd asd asd gjasd asd asd asd asd a s",
  "asdasdas asd asd asd jkasd asd asd asd asd a s",
];

// const b = slugify(articles);
// console.log(b);

const i = [];

for (const article of articles) {
  const slug = slugify(article);
  i.push(slug);
}

console.log(i);
