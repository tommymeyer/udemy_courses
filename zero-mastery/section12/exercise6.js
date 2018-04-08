// // reference type
// var object1 = { value: 10 };
// var object2 = object1;
// var object3 = { value: 10 };

// object1 === object2 // true
// object1 === object3 // false

// object1.value = 15;
// object2.value // 15
// object3.value // 10

// // context vs scope
// function b() {
//   let a = 4;
// } // scope

// // this = "what is to the left of the dot?" / what object is "this" inside of?

// const object4 = {
//   a: function() {
//     console.log(this); // object4
//   }
// }

// // instantiation
// "Make copy of object and reuse the code."

// class Player {
//   constructor(name, type) {
//     console.log("player", this);
//     this.name = name;
//     this.type = type;
//   }

//   introduce() {
//     console.log(`Hi I am ${this.name}, I'm a ${this.type}.`);
//   }
// };


// class Wizard extends Player {
//   constructor(name, type) {
//     super(name, type);
//     console.log("wizard", this);
//   }

//   play() {
//     console.log(`WEEEEE I'm a ${this.type}.`);
//   }
// }


// const wizard1 = new Wizard("Shelly", "Healer");
// const wizard2 = new Wizard("Shawn", "Dark Magician");

// //Evaluate these:
// //#1
// [2] === [2] // false
// {} === {} // error

// //#2 what is the value of property a for each object.
// const object1 = { a: 5 }; // 4
// const object2 = object1; // 4
// const object3 = object2; // 4
// const object4 = { a: 5}; // 5
// object1.a = 4;


// //#3 create two classes: an Animal class and a Mamal class. 
// // create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 

// class Animal {
//   constructor(name, type, color) {
//     this.name = name;
//     this.type = type;
//     this.color = color;
//   }

//   sound() {
//     console.log(`Hi, my name is ${this.name}. I'm ${this.type} and my color is ${this.color}.`);
//   }
// }

// class Mammal extends Animal {
//   constructor(name, type, color) {
//     super(name, type, color);
//   }
// }

// const cow = new Mammal("Bessy", "a Chocolate Milk Cow", "Brown");