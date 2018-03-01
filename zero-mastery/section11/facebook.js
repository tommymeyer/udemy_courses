var database = [
  {
    username: "Tommy",
    password: "777",
  },
  {
    username: "Jack",
    password: "777",
  },
  {
    username: "Jill",
    password: "777",
  }
];

var newsFeed = [
  {
    "username": "Jack",
    "timeline": "Blah"
  },
  {
    "username": "Jill",
    "timeline": "Blah"
  },
  {
    "username": "Bob",
    "timeline": "Blah"
  }
];

var userName = prompt("Username");
var password = prompt("Password");

function isUserValid(user, pass) {
  for (var i = 0; i < database.length; i++) {
    if (database[i].username === user && database[i].password === pass) {
      return true;
    }
  }
  return false;
};

function signIn(user, pass) {
  if (isUserValid(user, pass)) {
    console.log(newsFeed);
  } else {
    alert("Sorry, wrong username or password.");
  }
};

signIn(userName, password);