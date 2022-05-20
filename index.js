// Random number between 1-6
var randomNumber1 = Math.ceil((Math.random() * 6));
var randomNumber2 = Math.ceil((Math.random() * 6));
// For the first dice
function firstDice() {
  var firstImageSource = "images/dice" + randomNumber1 + ".png";
  document.querySelector("img.left-image").setAttribute("src", firstImageSource);
}
// For the second dice
function secondDice() {
  var secondImageSource = "images/dice" + randomNumber2 + ".png";
  document.querySelector("img.right-image").setAttribute("src", secondImageSource);
}
// To decide the winner
function winner() {
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 is the Winner! 🚩"
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 is the Winner! 🚩"
  } else {
    document.querySelector("h1").innerHTML = "It's a tie. Roll again."
  }
}
firstDice();
secondDice();
winner();
