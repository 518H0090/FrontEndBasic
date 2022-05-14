var itemList = document.querySelector("#items");

// Parent
// parentNode
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = "red";
console.log(itemList.parentNode.parentNode);

// parentElement
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = "red";
console.log(itemList.parentElement.parentElement);

// Child
// childNodes
// Lấy hết thẻ con bên trong bao gồm cả text - không khuyến khích sử dụng
console.log(itemList.childNodes);

// Children
// lấy chủ yếu thẻ con
console.log(itemList.children);

console.log(itemList.children[1]);

itemList.children[1].style.backgroundColor = "yellow";

// FirstChild
// Lấy thẻ con đầu tiên bên trong bao gồm cả text - không khuyến khích sử dụng
console.log(itemList.firstChild);

// firstElementChild
// lấy chủ yếu thẻ con đầu tiên
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = "First 1";

// lastChild
// Lấy thẻ con cuối cùng bên trong bao gồm cả text - không khuyến khích sử dụng
console.log(itemList.lastChild);

// lastElementChild
// lấy chủ yếu thẻ con cuối cùng
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = "End 1";

// Sibling - cùng cấp
// nextSibling
console.log(itemList.nextSibling);

// nextElementSibling
console.log(itemList.nextElementSibling);

// previousSibling
console.log(itemList.previousSibling);

// previousElementSibling
console.log(itemList.previousElementSibling);

itemList.previousElementSibling.style.color = "green";

// CreateElement

// Create div
var newDiv = document.createElement("div");

// Add ClassName
newDiv.className = "HelloDiv";

// Add ID
newDiv.id = "Hello1";

// Add attribute
newDiv.setAttribute("title", "Hello Div");

// Creat text node
var newDivText = document.createTextNode("Hello World");

// Add text to div - appendChild
newDiv.appendChild(newDivText);

// add to html
var container = document.querySelector("header .container");
var h1 = document.querySelector("header h1");

console.log(newDiv);

newDiv.style.fontSize = "25px";

container.insertBefore(newDiv, h1);
