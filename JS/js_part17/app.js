// duyệt mảng bằng for
var myArray = ["JAvascript", "Java", "PHP", "Ruby"];

for (var i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

// for - in duyệt theo key
var myInfo = {
  name: "Son Dang",
  age: 18,
  address: "Ha noi,VN",
};

for (var value in myInfo) {
  console.log(value);
}

// lấy value qua key
for (var value in myInfo) {
  console.log(myInfo[value]);
}

for (var key in myArray) {
  console.log(key);
}

// for - of duyệt lấy value
for (var value of myArray) {
  console.log(value);
}

var myObject = {
  name: "TrungHieu",
  age: 22,
};

console.log(Object.keys(myObject));
console.log(Object.values(myObject));

for (var value of Object.keys(myObject)) {
  console.log(value);
}

for (var value of Object.values(myObject)) {
  console.log(value);
}

// While loop
var i = 0;
while (i < myArray.length) {
  console.log(myArray[i]);
  i++;
}

// do while
do {
  console.log(i + 1);
  i++;
} while (i < 10);

// ứng dụng do while

var j = 0;
var isSucces = false;

var idN = "HT";
var pasW = "TH2";

do {
  j += 1;
  console.log("Nạp thẻ lần " + j);

  if (idN === "HT" && pasW === "TH") {
    isSucces = true;
  }
} while (!isSucces && j <= 3);

// Continue và break
for (var z = 0; z <= 10; z++) {
  console.log(z);
  if (z >= 5) {
    break;
  }
}

console.log("---------------------------------------");

for (var z = 0; z <= 10; z++) {
  if (z % 2 === 0) {
    continue;
  }
  console.log(z);
}

// Nested Loop
var array2d = [
  [1, 2],
  [3, 4],
  [5, 6],
];

console.log("--------------------------------");

for (var i = 0; i < array2d.length; i++) {
  for (var j = 0; j < array2d[i].length; j++) {
    console.log(array2d[i][j]);
  }
}
