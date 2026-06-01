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

//services list
let groomingService = [" hair cut ", " nail trim ", " nail buff ", " wash ", " brush teeth ", " brush hair "];

//tools list
let tools = ["hairBrush", "nailClippers", "nailFile", "shower", "toothbrush", "scissors"];

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

// random service
function random_service() {
  let randS = Math.floor(Math.random() * groomingService.length);
  return groomingService[randS];
}

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

    all_service[creatureToMatch] = random_service();
    i++;
  }
}

// hover functions
$("#lineCreature01").hover(
  function () {
    let creature = slotCreatures["01"];
    $("#service-box").text(
      creature +
      " wants a " + all_service[creature] + " service."
    );});

$("#lineCreature02").hover(
  function () {
    let creature = slotCreatures["02"];
    $("#service-box").text(creature + " wants a " + all_service[creature] + " service.");});

$("#lineCreature03").hover(
  function () {
    let creature = slotCreatures["03"];
    $("#service-box").text(creature + " wants a " + all_service[creature] + " service.");});

$("#lineCreature04").hover(
  function () {
    let creature = slotCreatures["04"]
    $("#service-box").text(creature + " wants a " + all_service[creature] + " service.");});

$("#lineCreature05").hover(
  function () {
    let creature = slotCreatures["05"];
    $("#service-box").text(creature + " wants a " + all_service[creature] + " service.");});

$("#lineCreature06").hover(
  function () {
    let creature = slotCreatures["06"];
    $("#service-box").text(creature + " wants a " + all_service[creature] + " service.");});

$("#lineCreature07").hover(
  function () {
    let creature = slotCreatures["07"];
    $("#service-box").text(creature + " wants a " + all_service[creature] + " service.");});

$("#lineCreature08").hover(
  function () {
    let creature = slotCreatures["08"];
    $("#service-box").text(creature + " wants a " + all_service[creature]+ " service.");});

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
