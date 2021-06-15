/*Headliner*/
function myFunction() {
  var x = document.getElementById('myTopnav');
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/*Login Modal*/
var modal = document.getElementById('id01');

window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}

/*Sign in Modal*/
var modal = document.getElementById('id02');

window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}
