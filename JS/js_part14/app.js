// Math function

// PI
console.log(Math.PI);

// Round
// Làm tròn lên khi hơn 0.5 hoặc tròn xuống khi nhỏ hơn 0.5
var number = 2353.25252;

console.log(Math.round(number));

// Abs - trị tuyệt đối
console.log(Math.abs(-4));

// ceil - làm tròn lên
console.log(Math.ceil(number));

// floor - làm tròn xuống
console.log(Math.floor(number));

// Random
// Dãy số nhỏ hơn 1
console.log(Math.random());
// Trong khoảng cho trước
console.log(Math.floor(Math.random() * 10));

var randomValue = Math.floor(Math.random() * 5);

var bonus = ["10 coin", "20 coin", "30 coin", "40 coin", "50 coin"];

console.log(bonus[randomValue]);

// Min
console.log(Math.min(-20, 3, 90, 100));

// Max
console.log(Math.max(-20, 3, 90, 100));
