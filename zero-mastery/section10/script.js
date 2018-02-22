// function sayHello() {
//   console.log("Hello");
// }

// sayHello();

// var sayBye = function() {
  // console.log("Bye");
// }();

// sayBye();

// function sing(song) {
  // console.log(song);
// }
// 
// sing("Laaa deee daaa");
// sing("hellllllooooo");
// sing("backstreets back alright!");

// function multiply(a, b) {
//   return a * b;
// }

// var array = ["Banana", "Apples", "Oranges", "Blueberries"];

// var user = {
//   name: "John",
//   age: 34,
//   hobby: "Soccer",
//   isMarried: false,
//   spells: ["alakazam", "shazam", "boo"],
//   shout: function() {
//     console.log("AHHHHHHH!!!!!");
//   }
// };

var todos = ["clean room", "brush teeth", "study JS", "workout"];

for (var i = 0; i < todos.length; i++) {
  console.log(i);
}

todos.forEach(function(todo, i) {
  console.log(todo, i);
})