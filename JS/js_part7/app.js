var a = 1;
var b = 2;

var result = a < b && a < 0;

console.log(result);

var valueCheck = "A" && "B" && "C";
console.log(valueCheck);

function showDialog(message) {
  console.log(`gia tri nhan dc ${message}`);
}

showDialog("Value");

function showAruments() {
  var myString = "";
  for (var pagrams of arguments) {
    myString += `${pagrams} - `;
  }

  console.log(myString);
}

showAruments("h1", "h2", "h3", "h4");

var isConfirm = confirm("Trên 18");
console.log(isConfirm);

function Sum(a, b) {
  return a + b;
}

var valueSum = Sum(5, 6);
console.log(valueSum);

function TestLocalVariable() {
  var valueLocal = "h1";
  return valueLocal;
}

console.log(TestLocalVariable());

// Nested function

function showMessage() {
  function showMessage2() {
    console.log("Hello");
  }

  showMessage2();
}

showMessage();

// các loại function
// declaration function
function showValue() {
  console.log("Declaration");
}

// Expression function
var showMessage = function () {
  console.log("Expression");
};

// thực thi

showValue();
showMessage();

// Hosting

showHostingNEw();

function showHostingNEw() {
  console.log("hosting");
}
