// Làm việc với Array phần 2
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

// Foreach - duyệt mảng
courses.forEach(
  // truyền hàm làm tham số gọi là callback
  (item, index) => {
    console.log(item, index);
  }
);

// every - kiểm tra tất cả phần tử thỏa mãn diều kiện nào đó
// ví dụ tất cả khóa học phải lớn hơn 300 nếu true thì tất cả đều lớn hơn 300

var isMoreThan300 = courses.every(function (item, index) {
  return item.coin >= 300;
});

console.log(isMoreThan300);

var isMoreThan50 = courses.every(function (item, index) {
  return item.coin >= 50;
});

console.log(isMoreThan50);

// Some chỉ cần 1 đối tượng thỏa mãn thì true
var haveCoin200 = courses.some((item, index) => item.coin === 200);
console.log(haveCoin200);

// find - trả về 1 đối tượng thỏa điều kiện
// tìm không được thì trả về undefined còn được thì trả vế
var findPHP = courses.find((item) => item.name === "PHP");
var findphp = courses.find((item) => item.name === "php");

var findMore300 = courses.find((item) => item.coin >= 200);

console.log(findPHP);
console.log(findphp);
console.log(findMore300);

// filter - trả về nhiều đối tượng thỏa điều kiện

var findMore300m = courses.filter((item) => item.coin >= 200);

console.log(findMore300m);
