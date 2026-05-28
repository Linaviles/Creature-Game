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
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var credits = document.getElementById("credits");

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