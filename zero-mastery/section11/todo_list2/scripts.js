var addBtn = document.getElementById('add_btn'),
    addInput = document.getElementById('add_input'),
    ul = document.querySelector('ul');


function inputLength() {
  return addInput.value.length;
}

function createListElement() {
  var li = document.createElement('li');

  li.appendChild(document.createTextNode(addInput.value));

  ul.appendChild(li);

  addInput.value = "";

  li.addEventListener('click', function() {
    li.classList.toggle('done');
  });
}

function addItemClick() {
  if (inputLength()) {
    createListElement();
  }
}

function addItemKeyup(e) {
  if (inputLength() && e.which === 13) {
    createListElement();
  }
}

addBtn.addEventListener('click', addItemClick);

addInput.addEventListener('keyup', addItemKeyup);

