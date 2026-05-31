let message = "<p> </p>" + "<br></br>";

// list of line variables
let creatures = ["platypus", "jackalope", "pegasus", "poodle", "snake"];

let creatureCount = 0;

let lineNumber = Math.floor(Math.random() * creatures.length);

let lineCreature = creatures[lineNumber];

let lineCount = 0;

//Dictionary to make sure creatures are saved properly
let slotCreatures = {};
let i = 1;

//Dictionary to store creatures and services they need? (thinking about this)
let all_service = {};

// Get screen elements
var frontShop = document.getElementById("front-shop");
var start = document.getElementById("start");
var startingScreen = document.getElementById("starting-screen");

// audio stuff
var bgMusic = document.getElementById("bg-music");
var startSound = document.getElementById("start-sound");


// once you press start it plays theme song
$("#start").click(function () {

  // play click sound
  if (startSound) {
    startSound.currentTime = 0;
    startSound.play().catch(function (error) {
      console.log("Start sound failed:", error);
    });
  }

  startingScreen.style.display = "none";
  frontShop.style.display = "block";

  // background MUSIC (fixed?)
  if (bgMusic) {
    bgMusic.currentTime = 0;
    bgMusic.play().catch(function (error) {
      console.log("BG music failed:", error);
    });
  }

  // random creature is called on
  var counter = setInterval(function () {
    lineNumber = Math.floor(Math.random() * creatures.length);
    lineCreature = creatures[lineNumber];
    lineCount = lineCount + 1;

    if (lineCount == 8) {
      clearInterval(counter);
    }
  }, 1000);

  // Line of creatures starts to form
  var lineImage = setInterval(function () {
    makeImage("platypus");
    makeImage("jackalope");
    makeImage("pegasus");
    makeImage("poodle");
    makeImage("snake");

    console.log(lineCreature);

    if (lineCount == 8) {
      clearInterval(lineImage);
    }
  }, 1000);

});


console.log(lineNumber);
console.log(lineCreature);


// create the image
function makeImage(creatureToMatch) {

  if (lineCreature === creatureToMatch) {
    let slot = i < 9 ? "0" + i : "" + i;

    slotCreatures[slot] = creatureToMatch;

    $("#lineCreature" + slot).prepend(
      "<img class='line' src='art/" + creatureToMatch + ".png'>"
    );

    i++;
  }
}


// random service
function random_service() {
  let groomingService = [" hair cut ", " nail trim ", " nail buff ", " wash ", " brush teeth ", " brush hair "];
  let randS = Math.floor(Math.random() * groomingService.length);
  return groomingService[randS];
}


// hover functions
let service01 = random_service();

$("#lineCreature01").hover(
  function () {
    $("#service-box").text(
      (slotCreatures["01"] || lineCreature) +
      " wants a " + service01 + " service."
    );
  },
  function () {
    $("#service-box").text("Let's see what the client wants.");
  }
);


// modal
var modal = document.getElementById("myModal");
var credits = document.getElementById("credits");
var span = document.getElementsByClassName("close")[0];

credits.onclick = function () {

  if (startSound) {
    startSound.currentTime = 0;
    startSound.play().catch(function (error) {
      console.log("Credits sound failed:", error);
    });
  }

  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};


// shop screen / groom shop
var groomShop = document.getElementById("grooming-shop");

$("#lineCreature01").click(function () {
  frontShop.style.display = "none";
  groomShop.style.display = "block";

  var content = $('#lineCreature01').html();
  $('#groomCreature').replaceWith(content);
});