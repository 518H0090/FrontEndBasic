var a = 6;

var output = a++;

console.log(output);
console.log(a);

var number = 6;
// 6 + 6 vì number++ trả về 6 sau đó number thành 7 rồi đem ra --number thành 6
var outputValue = number++ + --number;

console.log(outputValue);
