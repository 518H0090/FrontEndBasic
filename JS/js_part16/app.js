// for - lặp với điều kiện đúng với n đã biết
let n = 1000;

// khởi tạo chạy duy nhất 1 lần ; điều kiện kiểm tra ; tăng giá trị
// for (var i = 0; i < n; i++) {
//   console.log(i + 1);
// }

function getRandNumbersNoMAx(min, max, length) {
  var array = new Array(length);
  for (var i = 0; i < array.length; i++) {
    var elementArray = Math.floor(Math.random() * (max - min) + min);
    array[i] = elementArray;
  }

  return array;
}

function getRandNumbersMAx(min, max, length) {
  var array = new Array(length);
  for (var i = 0; i < array.length; i++) {
    var elementArray = Math.floor(Math.random() * (max - min + 1) + min);
    array[i] = elementArray;
  }

  return array;
}

/**
 * Tạo một số nguyên ngẫu nhiên trong đoạn từ "min" đến "max" (không bao gồm max)
 * Math.floor(Math.random() * (max - min)) + min
 * Tạo một số nguyên ngẫu nhiên trong đoạn từ "min" đến "max" (bao gồm max)
 * Math.floor(Math.random() * (max - min + 1)) + min
 */

console.log(getRandNumbersNoMAx(5, 100, 50));
console.log(getRandNumbersMAx(5, 100, 50));

// for in lập với key
// for of lặp với value
// while  lặp khi điều kiện đúng với n chưa biết
// do-while lặp ít nhất 1 lần sau đó lặp với diều kiện đúng với n chưa biết
