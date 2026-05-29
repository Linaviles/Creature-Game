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
//counter for make Image function
let i = 1;

//Dictionary to store creatures and services they need? (thinking about this)
let all_service = {};

// Get the start button, starting-screen, and front-shop ID elements
var frontShop = document.getElementById("front-shop");
var start = document.getElementById("start");
var startingScreen = document.getElementById("starting-screen");

// Get starting screen off and front screen in
$("#start").click(function () {
  startingScreen.style.display = "none";
  frontShop.style.display = "block";

  bgMusic.play().catch(function (error) {
    console.log("Audio failed:", error);
  });

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
    let slot = i < 9 ? "0" + i : "" + i; // if slot less than 8 then add 0i (index) else don't add i helps with coutning and storing values
    slotCreatures[slot] = creatureToMatch; // adds crearure to dictionary in the randomized order that they came in
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

//Hover functions (need to find way to make this code shorter more efficient :/ )
let service01 = random_service();
$("#lineCreature01").hover(
  function () {
    $("#service-box").text((slotCreatures["01"] || lineCreature) + " wants a " + service01 + " service."); //checks if creature is the right one being hovered
  },
  function () {
    $("#service-box").text("Let's see what the client wants.");
  });
let service02 = random_service();
$("#lineCreature02").hover(
  function () {
    $("#service-box").text((slotCreatures["02"] || lineCreature) + " wants a " + service02 + " service.");
  },
  function () {
    $("#service-box").text("Let's see what the client wants.");
  });
let service03 = random_service();
$("#lineCreature03").hover(
  function () {
    $("#service-box").text((slotCreatures["03"] || lineCreature) + " wants a " + service03 + " service.");
  },
  function () {
    $("#service-box").text("Let's see what the client wants.");
  });
let service04 = random_service();
$("#lineCreature04").hover(
  function () {
    $("#service-box").text((slotCreatures["04"] || lineCreature) + " wants a " + service04 + " service.");

  },
  function () {
    $("#service-box").text("Let's see what the client wants.");
  });

let service05 = random_service();
$("#lineCreature05").hover(
  function () {
    $("#service-box").text((slotCreatures["05"] || lineCreature) + " wants a " + service05 + " service.");

  },
  function () {
    $("#service-box").text("Let's see what the client wants.");
  });
let service06 = random_service();
$("#lineCreature06").hover(
  function () {
    $("#service-box").text((slotCreatures["06"] || lineCreature) + " wants a " + service06 + " service.");

  },
  function () {
    $("#service-box").text("Let's see what the client wants.");
  });
let service07 = random_service();
$("#lineCreature07").hover(
  function () {
    $("#service-box").text((slotCreatures["07"] || lineCreature) + " wants a " + service07 + " service.");

  },
  function () {
    $("#service-box").text("Let's see what the client wants.");
  });
let service08 = random_service();
$("#lineCreature08").hover(
  function () {
    $("#service-box").text((slotCreatures["08"] || lineCreature) + " wants a " + service08 + " service.");

  },
  function () {
    $("#service-box").text("Let's see what the client wants.");
  });

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var credits = document.getElementById("credits");

// Get the audio element to play
var bgMusic = document.getElementById("bg-music");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
credits.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//work in progress!!!! I need to figure out how to connect the specific creature to the other screen, but if anyone else
// is up for the challenge I wouldn't mind :D

//Shop grooming screen initiation
var groomShop = document.getElementById("grooming-shop");
$("#lineCreature01").click(function () {
  frontShop.style.display = "none";
  groomShop.style.display = "block";
  var content = $('#lineCreature01').html();
  var content2 = $('#groomCreature').html();
  $('#groomCreature').replaceWith(content);
});
