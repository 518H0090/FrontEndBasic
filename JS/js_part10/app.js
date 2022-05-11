// Làm việc với Array
var languages = ["Javascript", "C#", "PHP", "Java", "Ruby", "Dart", 0, 2, 3];
console.log(languages);

var languages2 = new Array("Javascript", "C#", "PHP", "Java", "Ruby", "Dart");

console.log(languages2);

// Kiểm tra kiểu của Array
console.log(Array.isArray(languages));

console.log(Array.isArray(new Array()));

// Length
console.log(languages.length);

// Truy xuất Array
console.log(languages[2]);

// Array methods

var languages3 = ["Javascript", "PHP", "Ruby"];

// ToString
console.log(languages3.toString());
console.log(typeof languages3.toString());

// Join
console.log(languages3.join("__"));

// Pop - xóa element cuối mảng và trả về phần tử đã xóa
console.log(languages3.pop());
console.log(languages3);

// Push - thêm element cuối mảng
console.log(languages3.push("Python"));
console.log(languages3);

// Shift - xóa element đầu mảng và trả về phần tử đã xóa
console.log(languages3.shift());
console.log(languages3);

// unShift - thêm element đầu mảng
console.log(languages3.unshift("Dart"));
console.log(languages3);

// splicing
languages3.splice(1, 1);
languages3.splice(1, 0, "Nodejs");
languages3.splice(0, 1, "Go");
console.log(languages3);
// concat - hợp mảng
var concatValue = languages2.concat(languages);
console.log(concatValue);

// slicing
console.log(concatValue.slice(1, 4));
