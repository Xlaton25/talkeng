// ACTIVE BUTTON
var btnContainer = document.getElementById("mid");

var btns = btnContainer.getElementsByClassName("bt");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");

    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    this.className += " active";
  });
} 


// Dark Mode
function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}