// Solve the below problems:

// #1) Convert the below promise into async await
// fetch('https://swapi.co/api/starships/9/')
//   .then(response => response.json())
//   .then(console.log)


async function getFetch() {
  const resp = await fetch('https://swapi.co/api/starships/9/');
  const data = await resp.json();
  console.log(data);
}

// getFetch();


// #2) ADVANCED: Update the function below from the video to also have
// async await for this line: fetch(url).then(resp => resp.json())
// So there shouldn't be any .then() calls anymore!
// Don't get discouraged... this is a really tough one...
const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function() {
  try {
    const [users, posts, albums] = await Promise.all(urls.map(url =>
      fetch(url).then(resp => resp.json())
    ));
    console.log('users', users);
    console.log('posts', posts);
    console.log('albums', albums);
  } catch(err) {
    console.log('whoops', err);
  }
}

getData();

// const getData = async function() {
//   const resp = urls.map(async function(url) {
//     const data = await fetch(url);
//     const result = await data.json();
//     return result;
//   });
//   console.log('users', urls[0]);
//   console.log('posts', urls[1]);
//   console.log('albums', urls[2]);
// }

// getData();

// #3) Add a try catch block to the #2 solution in order to catch any errors.
// Now chnage one of the urls so you console.log your error with 'ooooooops'
