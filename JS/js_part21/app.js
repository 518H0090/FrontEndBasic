// Reduce - nhận về 1 giá trị duy nhất

// Array 4
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

// hơi dài và rườm rà
// biến lưu trữ
var totalCoin = 0;

// lặp qua các phần tử
for (var course of courses) {
  // thực hiện việc lưu trữ
  totalCoin += course.coin;
}

console.log(totalCoin);

// Reduce
var coinHanlder = function (accumulator, course, currentindex, originArray) {
  console.table({
    Step: currentindex,
    Value: accumulator,
  });
  return `${currentindex} : ${accumulator + course.coin}  \t`;
};

var totalCoinReduce = courses.reduce(coinHanlder, 0);

console.log(totalCoinReduce);

// initial value là giá trị không bắt buộc
// khi không có initial value thì lấy value đầu tiên của mảng 
// mong muốn giá trị trả về là gì thì initial value phải cùng kiểu đó

