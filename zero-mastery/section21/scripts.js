const data = fetch('https://swapi.co/api/people/1/')
  .then((response) => response.json())
  .then((myJson) => {
    console.log(myJson);
  });

// document.addEventListener('DOMContentLoaded', loadPlanets);

// function loadPlanets() {
//   var docBod = document.body;
//   for (var j = 1; j < 8; j++) {
//     (function (i) { //need to create closure for j
//       var f = i;
//       var req = new XMLHttpRequest();
//       var URLhost = 'https://swapi.co/api/planets/?page=' + f;
//       req.open('GET', URLhost, true);
//       req.addEventListener('load', function () {
//         if (req.status >= 200 && req.status < 400) {
//           var response = JSON.parse(req.responseText);
//           console.log(response);
//           var planetHead = document.createElement('h5');
//           docBod.appendChild(planetHead);
//           planetHead.textContent = 'Planets Page - ' + f;
//           var planetList = document.createElement('ol');
//           planetHead.appendChild(planetList);

//           for (var k = 0; k < response.results.length; k++) {
//             (function (y) {
//               var planetIn = document.createElement('li');
//               planetIn.textContent = response.results[y].name;
//               planetList.appendChild(planetIn);
//             })(k);
//           }

//         } else {
//           console.log('Error in network request: ' + req.statusText);
//         }
//       });
//       req.send(null);
//       event.preventDefault();
//     })(j);
//   }
// }
