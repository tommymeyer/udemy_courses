var css = document.querySelector("h3");
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var body = document.querySelector("body");
var randomBtn = document.getElementById("random-btn");

function changeGradient() {
  body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  
  css.textContent = body.style.background + ";";
};

function randomColor() {
  var color = '#' + Math.floor(Math.random() * 16777215).toString(16);

  return color;
};

color1.addEventListener("input", changeGradient);
color2.addEventListener("input", changeGradient);

randomBtn.addEventListener("click", function() {
  body.style.background = "linear-gradient(to right, " + randomColor() + ", " + randomColor() + ")";

  css.textContent = body.style.background + ";";
});