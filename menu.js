// button functions
let message = "<p> </p>" + "<br></br>";

// Get the start button, starting-screen, and front-shop ID elements
var frontShop = document.getElementById("front-shop");
var start = document.getElementById("start");
var startingScreen = document.getElementById("starting-screen");

// Get starting screen off and front screen in
$("#start").click(function () {
  startingScreen.style.display = "none";
  frontShop.style.display = "block";

  bgMusic.play().catch(function(error) {
    console.log("Audio failed:", error);
  });

// Line of creatures starts to form
  var lineImage = setInterval(function () {
    makeImage("platypus");
    makeImage("jackalope");
    makeImage("pegasus");
    makeImage("poodle");
    makeImage("snake");
    if (lineCount === maxLineCount) {
      clearInterval(lineImage)
    }
  }, 7000);

});

// list of line variables
let creatures = ["platypus", "jackalope", "pegasus", "poodle", "snake"];

let creatureCount = 0;

let lineNumber = Math.floor(Math.random() * creatures.length);

let lineCreature = creatures[lineNumber];

let lineCount = 0;

let maxLineCount = 8;

// random creature is called on
var counter = setInterval(function () {
  lineNumber = (Math.floor(Math.random() * creatures.length))
  lineCreature = creatures[lineNumber];
  lineCount = lineCount + 1;
  if (lineCount === maxLineCount) {
    clearInterval(counter)
  }
}, 7000);

console.log(lineNumber);
console.log(lineCreature);

// prepends creature to line on screen
function makeImage(creatureToMatch) {
  // what the function actually does
  if (lineCreature == creatureToMatch) {
    $("#lineCreature").prepend("<img class = 'line' width=125 src='" + "art/" + creatureToMatch + ".png'>");
  }
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var credits = document.getElementById("credits");

// Get the audio element to play
var bgMusic = document.getElementById("bg-music");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
credits.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}