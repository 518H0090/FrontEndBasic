// javascript tự động định nghĩa kiểu

// type number
var number1 = 2;
var number2 = 3.5;

// type string
var fullName = "Huynh Tran Trung Hieu";
var fullValue = 'Hoi anh chua " Hoi roi" ';

// type Boolean
var isSucces = true;
var isFail = false;

//  Undefined
var age;

console.log(age);

// Null
var isNullValue = null;

// Symbol
var id = Symbol("description"); //đặc tính là unique
var id2 = Symbol("description");

if (id === id2) {
  console.log(true);
} else {
  console.log(false);
}

// Function
// Function tự định nghĩa
var myFunction = function () {
  alert("Hi xin chào");
};

// gọi function
myFunction();

// Object types
// key:value , key1:value1,...
var myObjects = {
  name: "Trung Hieu",
  age: 22,
  myFunctionValue: function () {},
};

// Array thuộc Object type
// đánh theo index bắt đầu từ 0
var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var listLanguage = ["Java", "Javascript", "C#"];

// kiểm tra dữ liệu của variable
console.log(typeof myArray);

// kiểm tra null
console.log(isNaN(isNullValue));
