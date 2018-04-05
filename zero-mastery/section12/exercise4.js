// //Solve these problems:

// //#1 Create a one line function that adds two parameters

// const add = (a, b) => a + b;

// //Closure: What does the last line return?
// const addTo = x => y => x + y
// let addToTen = addTo(10)
// addToTen(3) // 13

// //Currying: What does the last line return?
// const sum = (a, b) => a + b
// const curriedSum = (a) => (b) => a + b
// curriedSum(30)(1) // 31


// //Currying: What does the last line return?
// const sum = (a, b) => a + b
// const curriedSum = (a) => (b) => a + b
// const add5 = curriedSum(5)
// add5(12) // 17


// const multiply = (a, b) => a * b;
// const curriedMultiply = (a) => (b) => a * b;
// curriedMultiply(3); // returns previous function

// //Composing: What does the last line return?
// const compose = (f, g) => (a) => f(g(a));
// const add1 = (num) => num + 1;
// const add5 = (num) => num + 5;
// compose(add1, add5)(10) // 16

// //What are the two elements of a pure function?
// "always return and avoid side-effects"




// function first() {
//   var greet = "Hi";
//   function second() {
//     alert(greet);
//   }

//   return second;
// }

// var newFunc = first();
// newFunc();


// const first = () => {
//   const greet = "Hi";
//   const second = () => {
//     alert(greet);
//   }

//   return second;
// };

// const newFunc = first();
// newFunc();