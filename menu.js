let message = "<p> </p>" + "<br></br>";

// list of line variables
let creatures = ["platypus", "jackalope", "pegasus", "poodle", "snake", "Hermit crab", "Horse", "Ladybug",
  "Rattlesnake", "beetle", "Mister Blob", "Tired Snail", "Flouncy Sheep"
];

let creatureCount = 0;

let lineNumber = Math.floor(Math.random() * creatures.length);

let lineCreature = creatures[lineNumber];

let lineCount = 0;

let theEnd = 0;

//Dictionary to make sure creatures are saved properly
let slotCreatures = {};
let i = 1;

//Dictionary to store creatures and services they need
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

  // play click sound - 
  if (startSound) {
    startSound.currentTime = 0;
    startSound.play().catch(function (error) {
      console.log("Start sound failed:", error); // WORKING AFTER 2?
    });
  }

  startingScreen.style.display = "none";
  frontShop.style.display = "block";

  if (menuMusic) {
    menuMusic.pause();
  }

  // background MUSIC (fixed?)
  if (bgMusic) {
    bgMusic.currentTime = 0;
    bgMusic.play().catch(function (error) {
      console.log("BG music failed:", error);
    });
  }

  // Line of creatures starts to form
  var lineImage = setInterval(function () {

    lineNumber = Math.floor(Math.random() * creatures.length);
    lineCreature = creatures[lineNumber];

    makeImage(lineCreature);
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

  if (Object.values(slotCreatures).includes(creatureToMatch)) return;

  if (lineCreature === creatureToMatch) {
    let slot = i <= 8 ? "0" + i : "" + i;
    slotCreatures[slot] = creatureToMatch;
    $("#lineCreature" + slot).prepend(
      "<img class='line' src='art/" + creatureToMatch + ".png'>"
    );
    all_service[creatureToMatch] = random_service();
    i++;
    lineCount++;
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
  },
  function () {
    $("#service-box").text("Lets see what the clients want.");
  });

$("#lineCreature02").hover(
  function () {
    let creature = slotCreatures["02"];
    $("#service-box").text(creature + " wants a " + all_service[creature] + " service.");
  },
  function () {
    $("#service-box").text("Lets see what the clients want.");
  });

$("#lineCreature03").hover(
  function () {
    let creature = slotCreatures["03"];
    $("#service-box").text(creature + " wants a " + all_service[creature] + " service.");
  },
  function () {
    $("#service-box").text("Lets see what the clients want.");
  });

$("#lineCreature04").hover(
  function () {
    let creature = slotCreatures["04"]
    $("#service-box").text(creature + " wants a " + all_service[creature] + " service.");
  },
  function () {
    $("#service-box").text("Lets see what the clients want.");
  });

$("#lineCreature05").hover(
  function () {
    let creature = slotCreatures["05"];
    $("#service-box").text(creature + " wants a " + all_service[creature] + " service.");
  },
  function () {
    $("#service-box").text("Lets see what the clients want.");
  });

$("#lineCreature06").hover(
  function () {
    let creature = slotCreatures["06"];
    $("#service-box").text(creature + " wants a " + all_service[creature] + " service.");
  },
  function () {
    $("#service-box").text("Lets see what the clients want.");
  });

$("#lineCreature07").hover(
  function () {
    let creature = slotCreatures["07"];
    $("#service-box").text(creature + " wants a " + all_service[creature] + " service.");
  },
  function () {
    $("#service-box").text("Lets see what the clients want.");
  });

$("#lineCreature08").hover(
  function () {
    let creature = slotCreatures["08"];
    $("#service-box").text(creature + " wants a " + all_service[creature] + " service.");
  },
  function () {
    $("#service-box").text("Lets see what the clients want.");
  });

// modal
var modal = document.getElementById("myModal");
var credits = document.getElementById("credits");
var span = document.getElementsByClassName("close")[0];

window.onload = function () {
  document.getElementById("menu-music").play();
}

credits.onclick = function () {
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
let currentCreature = null;
let currentLinePlace = null;

$("#lineCreature01").click(function () {
  frontShop.style.display = "none";
  groomShop.style.display = "block";
  var content = $('#lineCreature01').html();
  $('#groomCreature').replaceWith(content);
  currentCreature = slotCreatures["01"];
  currentLinePlace = "lineCreature01";
});

$("#lineCreature02").click(function () {
  frontShop.style.display = "none";
  groomShop.style.display = "block";
  var content = $('#lineCreature02').html();
  $('#groomCreature').replaceWith(content);
  currentCreature = slotCreatures["02"];
  currentLinePlace = "lineCreature02";
});

$("#lineCreature03").click(function () {
  frontShop.style.display = "none";
  groomShop.style.display = "block";
  var content = $('#lineCreature03').html();
  $('#groomCreature').replaceWith(content);
  currentCreature = slotCreatures["03"];
  currentLinePlace = "lineCreature03";
});

$("#lineCreature04").click(function () {
  frontShop.style.display = "none";
  groomShop.style.display = "block";
  var content = $('#lineCreature04').html();
  $('#groomCreature').replaceWith(content);
  currentCreature = slotCreatures["04"];
  currentLinePlace = "lineCreature04";
});

$("#lineCreature05").click(function () {
  frontShop.style.display = "none";
  groomShop.style.display = "block";
  var content = $('#lineCreature05').html();
  $('#groomCreature').replaceWith(content);
  currentCreature = slotCreatures["05"];
  currentLinePlace = "lineCreature05";
});

$("#lineCreature06").click(function () {
  frontShop.style.display = "none";
  groomShop.style.display = "block";
  var content = $('#lineCreature06').html();
  $('#groomCreature').replaceWith(content);
  currentCreature = slotCreatures["06"];
  currentLinePlace = "lineCreature06";
});

$("#lineCreature07").click(function () {
  frontShop.style.display = "none";
  groomShop.style.display = "block";
  var content = $('#lineCreature07').html();
  $('#groomCreature').replaceWith(content);
  currentCreature = slotCreatures["07"];
  currentLinePlace = "lineCreature07";
});

$("#lineCreature08").click(function () {
  frontShop.style.display = "none";
  groomShop.style.display = "block";
  var content = $('#lineCreature08').html();
  $('#groomCreature').replaceWith(content);
  currentCreature = slotCreatures["08"];
  currentLinePlace = "lineCreature08";
});

//Drag and drop Function
let selected = null;
function dragstart(ev) {
  ev.dataTransfer.setData("text", ev.target.id);

}

function dragover(ev) {
  ev.preventDefault();
}

function drop(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  takeDamage(selected);
  //ev.target.appendChild(document.getElementById(data)); //this line places the tool image inside the groomContainer div and removes the image from the tool box
}

hairBrush.addEventListener("dragstart", function (e) {

  var hB = document.createElement('img');
  hB.src = 'art/hairBrush.png';
  hB.width = '100';
  var div = document.createElement('div');
  div.appendChild(hB);
  document.getElementById('dropTool').appendChild(div).classList.toggle('spin-animation');
  e.dataTransfer.setDragImage(div, -10, -10)
  selected = "brush hair";

}, false);

toothBrush.addEventListener("dragstart", function (e) {

  var tB = document.createElement('img');
  tB.src = 'art/toothBrush.png';
  tB.width = '100';
  var div = document.createElement('div');
  div.appendChild(tB);
  document.getElementById('dropTool').appendChild(div).classList.toggle('spin-animation');
  e.dataTransfer.setDragImage(div, -10, -10)
  selected = "brush teeth";

}, false);

nailClippers.addEventListener("dragstart", function (e) {

  var nC = document.createElement('img');
  nC.src = 'art/nailClippers.png';
  nC.width = '100';
  var div = document.createElement('div');
  div.appendChild(nC);
  document.getElementById('dropTool').appendChild(div).classList.toggle('spin-animation');
  e.dataTransfer.setDragImage(div, -10, -10)
  selected = "nail trim";

}, false);

nailFile.addEventListener("dragstart", function (e) {

  var nF = document.createElement('img');
  nF.src = 'art/nailFile.png';
  nF.width = '100';
  var div = document.createElement('div');
  div.appendChild(nF);
  document.getElementById('dropTool').appendChild(div).classList.toggle('spin-animation');
  e.dataTransfer.setDragImage(div, -10, -10)
  selected = "nail buff";

}, false);

shower.addEventListener("dragstart", function (e) {

  var sH = document.createElement('img');
  sH.src = 'art/shower.png';
  sH.width = '100';
  var div = document.createElement('div');
  div.appendChild(sH);
  document.getElementById('dropTool').appendChild(div).classList.toggle('spin-animation');
  e.dataTransfer.setDragImage(div, -10, -10)
  selected = "wash";

}, false);

scissors.addEventListener("dragstart", function (e) {

  var sC = document.createElement('img');
  sC.src = 'art/scissors.png';
  sC.width = '100';
  var div = document.createElement('div');
  div.appendChild(sC);
  document.getElementById('dropTool').appendChild(div).classList.toggle('spin-animation');
  e.dataTransfer.setDragImage(div, -10, -10)
  selected = "hair cut";

}, false);

//takeDamage(selected);

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
  let bool_val = checkCorrectTool(check);
  if (bool_val) {
    //maybe a sound effect + visual effect can go here
    happyClient();
    console.log("this runs");
    theEnd++

    if (theEnd == 8) {
      theEnding();
    }
  }
  else {
    lifeCounter += 1;
    if (lifeCounter == 1) {
      heart01.style.display = "none";
      skull01.style.display = "block";
      console.log("took one damage");
    }
    if (lifeCounter == 2) {
      heart02.style.display = "none";
      skull02.style.display = "block";
      console.log("took two damage");
    }
    if (lifeCounter == 3) { // This does work
      gameOver();
      console.log("lost the game");
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
var completion = document.getElementById("completion");
function happyClient() {
  completion.style.display = "block";
}

$("#clickable").click(function () {
  groomShop.style.display = "none";
  frontShop.style.display = "block";
  completion.style.display = "none";
  clear();
})

function clear() {
  //Removes lineCreater from object
  for (const [key, value] of Object.entries(all_service)) { //This doesn't completley work either
    if (currentCreature === key) {
      delete all_service[key];
      console.log("this potentially runs");
    }
  }
  //removes lineCreature that has already been treated
  var delDiv = document.getElementById(currentLinePlace);
  delDiv.remove();

  //remove image in groom div
  var content = document.getElementById("groomContainer");
  content.innerHTML = '';
  content.innerHTML = `<div id="groomCreature"></div> 
                          
                          <div id="dropTool"></div>`;

  selected = null;
  currentLinePlace = null;
  currentCreature = null;
}

//The end
var shiftEnd = document.getElementById("shift-end");
function theEnding() {
  groomShop.style.display = "none";
  shiftEnd.style.display = "block";
}

//BUG TO FIX
/*1. It works well in order, but once you pick a creature not in order it breaks I think the checkCorrectTool function 
has a glitch, something wrong when iterating through the keys it automatically sends a false */