//// Lesson 179

// const promise = new Promise((resolve, reject) => {
//   if (true) {
//     resolve('Stuff worked');
//   } else {
//     reject('It broke');
//   }
// });

// promise
//   .then(result => result + '!'
//   )
//   .then(result2 => {
//     throw Error
//     console.log(result2)
//   })
//   .catch(() => console.log('error'));


// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, 'hiii');
// });

// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 1000, 'byyye')
// });

// Promise.all([promise2, promise3])
//   .then(values => {
//     console.log(values);
//   });


// const urls = [
//   "https://jsonplaceholder.typicode.com/users",
//   "https://jsonplaceholder.typicode.com/posts",
//   "https://jsonplaceholder.typicode.com/albums"
// ];

// Promise.all(urls.map(url => {
//   return fetch(url).then(resp => resp.json())
// })).then(results => {
//   console.log(results[0]);
//   console.log(results[1]);
//   console.log(results[2]);
// }).catch(() => console.log('error'));


//// Lesson 181

//// Promise
// movePlayer(100, 'Left')
//   .then(() => movePlayer(400, 'Left'))
//   .then(() => movePlayer(10, 'Right'))
//   .then(() => movePlayer(330, 'Left'))

// // Async Await
// async function playerStart() {
//   const first = await movePlayer(100, 'Left');
//   const second = await movePlayer(400, 'Left');
//   await movePlayer(30, 'Right');
//   await movePlayer(330, 'Left');
// }

// fetch("https://swapi.co/api/people/1/")
//   .then(resp => resp.json())
//   .then(console.log);


// async function fetchLuke() {
//   const resp = await fetch('https://swapi.co/api/people/1/');
//   const data = await resp.json();
//   console.log(data);
// }

// fetchLuke();


const urls = [
  "https://swapi.co/api/people/1/",
  "https://swapi.co/api/people/2/",
  "https://swapi.co/api/people/3/"
];

const getData = async function() {
  try {
    const [person1, person2, person3] = await Promise.all(urls.map(url => fetch(url).then(resp => resp.json())))

    console.log(person1, person2, person3);
  } catch {
    console.log('ooops');
  }
}

getData();