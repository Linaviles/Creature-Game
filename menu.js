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
var menuMusic = document.getElementById("menu-music");

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
  }, 5000);

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
  }, 5000);

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

// hover functions (shows text on bottom of screen)
$("#lineCreature01").hover(
  function () {
    let creature = slotCreatures["01"];
    $("#service-box").text(
      creature +
      " wants a " + all_service[creature] + " service."
    );
  });

$("#lineCreature02").hover(
  function () {
    let creature = slotCreatures["02"];
    $("#service-box").text(creature + " wants a " + all_service[creature] + " service.");
  });

$("#lineCreature03").hover(
  function () {
    let creature = slotCreatures["03"];
    $("#service-box").text(creature + " wants a " + all_service[creature] + " service.");
  });

$("#lineCreature04").hover(
  function () {
    let creature = slotCreatures["04"]
    $("#service-box").text(creature + " wants a " + all_service[creature] + " service.");
  });

$("#lineCreature05").hover(
  function () {
    let creature = slotCreatures["05"];
    $("#service-box").text(creature + " wants a " + all_service[creature] + " service.");
  });

$("#lineCreature06").hover(
  function () {
    let creature = slotCreatures["06"];
    $("#service-box").text(creature + " wants a " + all_service[creature] + " service.");
  });

$("#lineCreature07").hover(
  function () {
    let creature = slotCreatures["07"];
    $("#service-box").text(creature + " wants a " + all_service[creature] + " service.");
  });

$("#lineCreature08").hover(
  function () {
    let creature = slotCreatures["08"];
    $("#service-box").text(creature + " wants a " + all_service[creature] + " service.");
  });

// modal
var modal = document.getElementById("myModal");
var credits = document.getElementById("credits");
var span = document.getElementsByClassName("close")[0];

credits.onclick = function () {
  if (menuMusic) {
    menuMusic.currentTime = 0;
    menuMusic.play().catch(function (error) {
      console.log("Credits sound failed:", error);
    });
  }

  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
  if (menuMusic) {
    menuMusic.pause();
  }
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// shop screen / groom shop
var groomShop = document.getElementById("grooming-shop");
let currentCreature = null;
$("#lineCreature01").click(function () {
  frontShop.style.display = "none";
  groomShop.style.display = "block";
  var content = $('#lineCreature01').html();
  $('#groomCreature').replaceWith(content);
  currentCreature = slotCreatures["01"];
});

function dragstart(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function dragover(ev) {
  ev.preventDefault();
}

function drop(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  // ev.target.appendChild(document.getElementById(data)); this line places the tool image inside the groomContainer div and removes the image from the tool box
}

hairBrush.addEventListener("dragstart", function (e) {

  var hB = document.createElement('img');
  hB.src = 'art/hairBrush.png';
  hB.width = '100';
  var div = document.createElement('div');
  div.appendChild(hB);
  document.querySelector('body').appendChild(div);
  e.dataTransfer.setDragImage(div, -10, -10)

}, false);

toothBrush.addEventListener("dragstart", function (e) {

  var tB = document.createElement('img');
  tB.src = 'art/toothBrush.png';
  tB.width = '100';
  var div = document.createElement('div');
  div.appendChild(tB);
  document.querySelector('body').appendChild(div);
  e.dataTransfer.setDragImage(div, -10, -10)

}, false);

nailClippers.addEventListener("dragstart", function (e) {

  var nC = document.createElement('img');
  nC.src = 'art/nailClippers.png';
  nC.width = '100';
  var div = document.createElement('div');
  div.appendChild(nC);
  document.querySelector('body').appendChild(div);
  e.dataTransfer.setDragImage(div, -10, -10)

}, false);

nailFile.addEventListener("dragstart", function (e) {

  var nF = document.createElement('img');
  nF.src = 'art/nailFile.png';
  nF.width = '100';
  var div = document.createElement('div');
  div.appendChild(nF);
  document.querySelector('body').appendChild(div);
  e.dataTransfer.setDragImage(div, -10, -10)

}, false);

shower.addEventListener("dragstart", function (e) {

  var sH = document.createElement('img');
  sH.src = 'art/shower.png';
  sH.width = '100';
  var div = document.createElement('div');
  div.appendChild(sH);
  document.querySelector('body').appendChild(div);
  e.dataTransfer.setDragImage(div, -10, -10)

}, false);

scissors.addEventListener("dragstart", function (e) {

  var sC = document.createElement('img');
  sC.src = 'art/scissors.png';
  sC.width = '100';
  var div = document.createElement('div');
  div.appendChild(sC);
  document.querySelector('body').appendChild(div);
  e.dataTransfer.setDragImage(div, -10, -10)

}, false);

//Check if selected tool is the right tool
function checkCorrectTool(tool) {
  for (const [key, value] of Object.entries(all_service)) {
    let clean_string = tool.replaceAll(' ', '');
    let clean_string01 = value.replaceAll(' ', '');
    if (currentCreature === key) {
      return clean_string.toLowerCase() === clean_string01.toLowerCase();
    }

    return false;
  }
}

//take damage if tool incorrect
let lifeCounter = 0;
var healthBar = document.getElementById("health-bar");
var heart01 = document.getElementById("heart01");
var heart02 = document.getElementById("heart02");
var heart03 = document.getElementById("heart03");
var skull01 = document.getElementById("skull01");
var skull02 = document.getElementById("skull02");

function takeDamage(check) {
  if (checkCorrectTool(check)) {
    //maybe a sound effect + visual effect can go here
    happyClient();
  }
  else {
    lifeCounter += 1;
    if (lifeCounter == 1) {
      heart01.style.display = "none";
      skull.style.display = "block";
    }
    if (lifeCounter == 2) {
      heart01.style.display = "none";
      skull.style.display = "block";
    }
    if (lifeCounter == 3) {
      gameOver();
    }

  }
}

//Game over function
var deathScreen = document.getElementById("game-over")
function gameOver() {
  groomShop.style.display = "none";
  deathScreen.style.display = "block";
}

//refresh button
$("#refresh").click(function () {
  window.location.reload();
})

//Succsessfully helps the client
function happyClient() {
  
}