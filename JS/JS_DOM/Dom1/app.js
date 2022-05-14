// show all element in document
console.dir(document);
// show domain IP
console.dir(document.domain);
// show url
console.dir(document.URL);

// change title
document.title = "Hiếu đẹp trai";
console.log(document.title);

// show doctype file
console.log(document.doctype);
// show tag
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);

// change text
document.all[10].textContent = "hello";
// show form
console.log(document.forms);
console.log(document.forms[0]);
// show links
console.log(document.links);
// show images
console.log(document.images);

// SELECTOR IN JAVASCRIPT

// GETELEMENTBYID
var headerTitle = document.getElementById("header-title");
console.log(headerTitle);

// textContent là lấy hết nội dung không quan trọng style css
console.log(headerTitle.textContent);
// innerText là lấy text hiển thị ảnh hưởng với style css
console.log(headerTitle.innerText);

headerTitle.textContent = "Hello From 1";
headerTitle.innerText = "Hello From 2";
// Đưa nội dung vào bên trong
headerTitle.innerHTML = "<h3>Hello From 3</h3>";

// Thay đổi style css
var header = document.getElementById("main-header");
header.style.borderBottom = "solid 3px #000";

// GetElementByClass
var items = document.getElementsByClassName("list-group-item");
console.log(items);
console.log(items[1]);

items[1].textContent = "Hello Item 2";
items[1].style.fontWeight = "bold";
items[1].style.backgroundColor = "yellow";

// not work : items.style.backgroundColor = "grey";
// Do this instead because items is Array
for (var item of items) {
  item.style.backgroundColor = "grey";
}

// GetElementTagName
var li = document.getElementsByTagName("li");
console.log(li);
console.log(li[1]);

li[1].textContent = "Hello Item 2";
li[1].style.fontWeight = "bold";
li[1].style.backgroundColor = "yellow";

for (var item of items) {
  item.style.backgroundColor = "red";
}

// QuerySelector
// Select one element by class or id, tag
var header = document.querySelector("#main-header");
header.style.borderBottom = "solid 4px #ccc";

var input = document.querySelector("input");
input.value = "Hello World";

var submit = document.querySelector('input[type="submit"]');
submit.value = "SEND";

var item = document.querySelector(".list-group-item");
item.style.color = "white";

var lastItem = document.querySelector(".list-group-item:last-child");
lastItem.style.color = "blue";

var secondItem = document.querySelector(".list-group-item:nth-child(2)");
secondItem.style.color = "coral";

// QuerySelectorAll
// Select all element by class or id,tag
var titles = document.querySelectorAll(".title");
console.log(titles);
titles[0].textContent = "Dau";

var odd = document.querySelectorAll("li:nth-child(odd)");
var even = document.querySelectorAll("li:nth-child(even)");

for (var i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = "#f4f4f4";
  even[i].style.backgroundColor = "#ccc";
}
