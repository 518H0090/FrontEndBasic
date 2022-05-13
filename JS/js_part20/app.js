// Array 3
var courses = [
  {
    id: 1,
    name: "html",
    coin: 100,
  },
  {
    id: 2,
    name: "css",
    coin: 200,
  },
  {
    id: 3,
    name: "javascript",
    coin: 300,
  },
  {
    id: 4,
    name: "mysql",
    coin: 400,
  },
  {
    id: 5,
    name: "php",
    coin: 500,
  },
];

// Map
// định dạng lại mảng
var newCourses = courses.map((item, index, originArray) => {
  return {
    index: index,
    id: item.id,
    coin: item.coin,
    name: item.name,
    coinText: `Gia : ${item.coin}`,
    originArray: originArray,
  };
});

console.log(newCourses);
