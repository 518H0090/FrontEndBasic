// Object type
var emailKey = "email";
var emailValue = "nhoxhieuro5@gmail.com";

var info = {
  name: "TrungHieu",
  age: 22,
  classTdt: "18H50303",
  [emailKey]: emailValue,
  getName: function () {
    return this.name;
  },
};

console.log(info);

console.log(info.age);
console.log(info["name"]);

var myKey = "classTdt";
console.log(info[myKey]);

console.log(info["getName"]());
console.log(info.getName());

// Object Constructor
// Viết hoa chữ cái đầu cho Object Constructor
function User(firstName, lastName, avatar) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.avatar = avatar;
  this.getName = function () {
    return this.firstName + this.lastName;
  };
}

var author = new User("Trung", "Hieu", "Deptrai");
var author2 = new User("Hoc", "Hoi", "M");

console.log(author);
console.log(author2);

console.log(author.constructor);
console.log(author2.constructor);
console.log(author.constructor == User);

author.tittle = "Hello World";
author2.command = "Command Line";

console.log(author);
console.log(author2);

console.log(author.getName());
console.log(author2.getName());
