// const array = [1, 2, 3, 4];

// const double = [];
// const newArray = array.forEach((num) => {
//   double.push(num * 2);
// });

// console.log(double);


// const mapArray = array.map( (num) => num * 2 );

// console.log(mapArray);


// const filterArray = array.filter( (num) => num > 2 );

// console.log(filterArray);

// const reduceArray = array.reduce( (accumulator, num) => {
//   return accumulator + num;
// }, 0);

// console.log(reduceArray);


// // Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

// //Create an array using forEach that has all the usernames with a "!" to each of the usernames
// let newArray = [];

// array.forEach((user) => {
//   let { username } = user;
//   username = username + "!";
//   newArray.push(username);
// });

// console.log(newArray);


// //Create an array using map that has all the usernames with a "? to each of the usernames
// const newArray = array.map((user) => {
//   let { username } = user;
//   username = username + "?";
//   return username;
// });

// console.log(newArray);

// //Filter the array to only include users who are on team: red
// const newArray = array.filter((user) => {
//   let { team } = user;
//   // return user.team === "red";

//   if (team === "red") {
//     return user.username;
//   }
// });

// console.log(newArray);



// //Find out the total score of all users using reduce
// const newArray = array.reduce((accumulator, num) => {
//   let { score } = num;
//   return accumulator + score;
// }, 0);

// console.log(newArray);



// // (1), what is the value of i?
// // (2), Make this map function pure:
// const arrayNum = [1, 2, 4, 5, 8, 9];
// const newArray = arrayNum.map((num, i) => {
//   console.log(num, i);
//   alert(num);
//   return num * 2;
// });

// //BONUS: create a new list with all user information, but add "!" to the end of each items they own.
// const mapArray = array.map((user) => {
//   user.items = user.items.map((item) => {
//     return item = item + "?";
//   })

//   return user;
// });