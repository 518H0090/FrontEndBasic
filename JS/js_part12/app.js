function User(name, age, address) {
  this.name = name;
  this.age = age;
  this.address = address;
  this.getInfo = function () {
    return `${name} ${age} ${address}`;
  };
}

var author = new User("TrungHieu", 22, "TPHCM");
var user = new User("Son", 19, "BenTre");

console.log(author.getInfo());
console.log(user.getInfo());

console.log(author.constructor);
console.log(user.constructor);

// Object prototype
User.prototype.className = "F8";
User.prototype.getClassName = function () {
  return this.className;
};

console.log(author);
console.log(user);

console.log(author["className"]);
console.log(user.className);

console.log(author.getClassName());
console.log(user.getClassName());
