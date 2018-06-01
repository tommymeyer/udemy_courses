var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelector("li");

function inputLength() {
  return input.value.length;
};

function createListEl() {
  var li = document.createElement("li");

  li.appendChild(document.createTextNode(input.value));

  ul.appendChild(li);

  input.value = "";
};

function addListAfterClick() {
  if (inputLength() > 0) {
    createListEl();
  }
};

function addListAfterKeyPress(e) {
  if (inputLength() > 0 && e.which === 13) {
    createListEl();
  }
};

li.addEventListener("click", function() {
  li.classList.toggle("done");
  console.log(li);
  
});

button.addEventListener("click", addListAfterClick);

input.addEventListener("keyup", addListAfterKeyPress);