// Set là tập hợp unique trong javascript giống như HashSet trong C#

var array = ["a", "b", "c", "a", "b", "c", "a", "c", "c"];

// Spread trong ES6
console.log([...new Set(array)]);

// Recursive - gọi lại chính nó
// Nếu không nắm chắc thì đừng dùng vì dễ bị tràn bộ nhớ

// A - loop -> CPU
// A -> Recursive -> RAM (Memory Lack)

/**
 * Để xài đệ quy
 * 1. xác định điểm dừng
 * 2. có logic  => tạo ra điểm dừng
 *
 */

// Count down timer Recursive

function Coundown(num) {
  if (num > 0) {
    console.log(num);
    return Coundown(num - 1);
  } else {
    return num;
  }
}

Coundown(5);

function loopStart(start, end, cb) {
  if (start <= end) {
    cb(start);
    return loopStart(start + 1, end, cb);
  }
}

var arrayM = ["javascript", "php", "ruby"];

loopStart(0, arrayM.length - 1, function (index) {
  console.log("index: ,", index);
});

// Financial
function Financial(number) {
  if (number == 0) {
    return 1;
  }

  return Financial(number - 1) * number;
}

function FinancialUseLoop(num) {
  var output = 1;
  for (var i = num; i > 0; i--) {
    output = output * i;
  }

  return output;
}

console.log(Financial(5));
console.log(FinancialUseLoop(5));
