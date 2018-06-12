const ul = document.getElementById('star_wars_list');
const url = 'https://swapi.co/api/people/1/';

function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

fetch(url)
  .then(resp => resp.json())
  .then(info => {
    let person = Object.values(info);
    person.map(value => {
      let li = createNode('li');
      li.innerHTML = value;
      append(ul, li);
    })
    .catch(error => console.log('error'))
  });