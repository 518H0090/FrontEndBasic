// tạo chuỗi
// cách 1
var fullName = "đây là chuỗi 1";
// cách 2
var fullName2 = new String("Đây là chuỗi 2");

console.log(fullName);
console.log(fullName2);

// ta dùng cách 1 tốt hơn

// dùng backslash
var fullName3 = "Hieu la \\ ' Idol '";

console.log(fullName3);

// Length

console.log(fullName3.length);

// Template String
var firstName = "Trung";
var lastName = "Hieu";

console.log(`tôi là ${firstName} ${lastName}`);

// Làm việc với chuỗi
var myString = "Học JS tại JS JS F8! JS";
// Length
console.log(myString.length);
// Find Index
// Indexof có thể truyền index để quy định vị trí bắt đầu tìm kiếm
console.log(myString.indexOf("JS"));
console.log(myString.indexOf("JS", 5));
console.log(myString.lastIndexOf("JS"));
console.log(myString.lastIndexOf("ABC"));

// Không hỗ trợ index mà tìm kiếm theo biểu thức chính quy
console.log(myString.search("JS"));
// Cut
console.log(myString.slice(4, 7));
console.log(myString.slice(4));
console.log(myString.slice(-4, -1));
// Replace
console.log(myString.replace("JS", "Javascript"));
console.log(myString.replace(/JS/g, "Javascript"));
// Upper
console.log(myString.toUpperCase());
// Lower
console.log(myString.toLowerCase());
// Trim
var myString = "                 Học JS tại JS JS F8! JS                 ";
console.log(myString.length);
console.log(myString.trim().length);
// Split
// dựa vào 1 điểm chung tách string thành array
var languages = "javascript,php,ruby";
var languages2 = "javascript";
console.log(languages.split(","));
console.log(languages2.split(""));

// Get character by index
const myString2 = "Trung Hiếu";
console.log(myString2.charAt(3));
console.log(myString2.charAt(10));

console.log(myString2[3]);
console.log(myString2[10]);
