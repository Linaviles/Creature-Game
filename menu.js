// button functions
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

// AUDIO ELEMENTS
var bgMusic = document.getElementById("bg-music");
var menuMusic = document.getElementById("menu-music");
var startSound = document.getElementById("start-sound");


// menu music 
document.addEventListener("click", function () {
  if (menuMusic) {
    menuMusic.play().catch(function (e) {
      console.log("Menu music blocked:", e);
    });
  }
}, { once: true });


// Get starting screen off and front screen in
$("#start").click(function () {

  // play click sound
  if (startSound) {
    startSound.currentTime = 0;
    startSound.play().catch(function (error) {
      console.log("Start sound failed:", error);
    });
  }

  // stop menu music
  if (menuMusic) {
    menuMusic.pause();
    menuMusic.currentTime = 0;
  }

  startingScreen.style.display = "none";
  frontShop.style.display = "block";

  // start game music
  if (bgMusic) {
    bgMusic.play().catch(function (error) {
      console.log("Audio failed:", error);
    });
  }

  // random creature is called on
  var counter = setInterval(function () {
    lineNumber = (Math.floor(Math.random() * creatures.length))
    lineCreature = creatures[lineNumber];
    lineCount = lineCount + 1;
    if (lineCount == 8) {
      clearInterval(counter)
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
      clearInterval(lineImage)
    }
  }, 1000);

});

console.log(lineNumber);
console.log(lineCreature);


// prepends creature to line on screen
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


//random service function
function random_service() {
  let groomingService = [" hair cut ", " nail trim ", " nail buff ", " wash ", " brush teeth ", " brush hair "];
  let randS = Math.floor(Math.random() * groomingService.length);
  return randomService = groomingService[randS];
}


//Hover functions
let service01 = random_service();
$("#lineCreature01").hover(
  function () {
    $("#service-box").text((slotCreatures["01"] || lineCreature) + " wants a " + service01 + " service.");
  },
  function () {
    $("#service-box").text("Let's see what the client wants.");
  }
);


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var credits = document.getElementById("credits");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// credits sound + modal
credits.onclick = function () {

  if (startSound) {
    startSound.currentTime = 0;
    startSound.play().catch(function (error) {
      console.log("Credits sound failed:", error);
    });
  }

  modal.style.display = "block";
}

// close modal
span.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


//Shop grooming screen initiation
var groomShop = document.getElementById("grooming-shop");

$("#lineCreature01").click(function () {
  frontShop.style.display = "none";
  groomShop.style.display = "block";

  var content = $('#lineCreature01').html();
  $('#groomCreature').replaceWith(content);
});