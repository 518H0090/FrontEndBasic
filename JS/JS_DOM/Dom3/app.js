var button = document
  .getElementById("button")
  .addEventListener("click", buttonClick);

//   Events
function buttonClick(event) {
  //   document.getElementById("header-title").textContent = "Changed";
  //   document.querySelector("#main").style.backgroundColor = "#f4f4f4";

  console.log(event);

  console.log(event.target);
  console.log(event.target.id);
  console.log(event.target.className);
  console.log(event.target.classList);
  var output = document.getElementById("output");
  output.innerHTML = `<h3>${event.target.id}</h3>`;

  //   loại
  console.log(event.type);

  console.log(event.clientX);
  console.log(event.clientY);

  //   độ dài theo tọa độ
  console.log(event.offsetX);
  console.log(event.offsetY);

  //   dùng các phím alt ctrl shift kết hợp click chuột
  console.log(event.altKey);
  console.log(event.ctrlKey);
  console.log(event.shiftKey);
}

var button2 = document.getElementById("button");

// button2.addEventListener("click", runEvent);
// button2.addEventListener("dblclick", runEvent);
// button2.addEventListener("mousedown", runEvent);
// button2.addEventListener("mouseup", runEvent);

var box = document.getElementById("box");

function runEvent(e) {
  console.log("EVENTS TYPE : ", e.type);
  output.innerHTML = `<h3>MouseX : ${e.offsetX}</h3> <h3>MouseY : ${e.offsetY}</h3>`;
  box.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},40)`;
  document.body.style.backgroundColor = `rgba(${e.offsetX},${e.offsetY},120,0.3)`;
}

// mouseenter tính khi vào phần tử đó
box.addEventListener("mouseenter", runEvent);
// mouseenter tính khi ra phần tử đó
box.addEventListener("mouseleave", runEvent);
// mouseover tính khi vào phần tử đó và vào phần tử con của phần tử đó
box.addEventListener("mouseover", runEvent);
// mouseover tính khi ra phần tử đó và ra phần tử con của phần tử đó
box.addEventListener("mouseout", runEvent);

//mousemove tính khi di chuyển bên trong phần tử
box.addEventListener("mousemove", runEvent);

var itemInput = document.querySelector("input[type='text']");
var formI = document.querySelector("form");

// keydown có tác động tới phần tử  - gõ vào
itemInput.addEventListener("keydown", runEvent2);
// keyup có tác dụng khi gõ vào và thả ra
itemInput.addEventListener("keyup", runEvent2);

// đưa vào là focus thả ra là blur
itemInput.addEventListener("focus", runEvent2);
itemInput.addEventListener("blur", runEvent2);

// copy và paste
itemInput.addEventListener("cut", runEvent2);
itemInput.addEventListener("paste", runEvent2);

// giữ key
itemInput.addEventListener("keypress", runEvent2);

// input thêm vào
itemInput.addEventListener("input", runEvent2);

var select = document.querySelector("select");

// Change
select.addEventListener("change", runEvent2);
select.addEventListener("input", runEvent2);

// Submit
formI.addEventListener("submit", runEvent3);

function runEvent2(e) {
  console.log("EVENT TYPE : ", e.type);
  console.log(e.target.value);
  document.getElementById("output").innerHTML = `<h3>${e.target.value}</h3>`;
}

function runEvent3(e) {
  e.preventDefault();
  console.log("EVENT TYPE : ", e.type);
  console.log(e.target.value);
  document.getElementById("output").innerHTML = `<h3>${e.target.value}</h3>`;
}
