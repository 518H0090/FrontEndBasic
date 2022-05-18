// DOM Finish
// Small Project

var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");

// AddEvent listener
form.addEventListener("click", addItem);

// DeleteEvent Listener
itemList.addEventListener("click", removeItem);

// Filter event
filter.addEventListener("keyup", filterItems);

function addItem(e) {
  e.preventDefault();
  //  Get input value
  var newItem = document.getElementById("item");

  // create new li element
  var li = document.createElement("li");
  // Add class
  li.className = "list-group-item";

  // Add Text Node with Input value
  li.appendChild(document.createTextNode(newItem.value));
  itemList.appendChild(li);

  // create delete button
  var deleteButton = document.createElement("button");
  deleteButton.className = "btn btn-danger btn-sm float-right delete";
  // Append Text node
  deleteButton.appendChild(document.createTextNode("X"));

  li.appendChild(deleteButton);
  itemList.appendChild(li);
}

function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    // confirm return true or false so if we click yes it is true
    if (confirm("Are you sure?")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

function filterItems(e) {
  // convert text to lower case
  var text = e.target.value.toLowerCase();
  // Get list
  var items = itemList.getElementsByTagName("li");
  Array.from(items).forEach((item) => {
    var itemName = item.firstChild.textContent;
    console.log(itemName);
    if (itemName.toLowerCase().indexOf(text) !== -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
