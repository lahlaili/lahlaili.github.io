
function nav() {
  var nav = document.getElementById("nav-page");
  var hamburger = document.getElementById('hamburger');
  var x = document.getElementById('x');

  if (nav.style.display=="none") {
    nav.style.display = "block";
    x.style.display="block"
    hamburger.style.display="none"
  } else {
    nav.style.display = "none";
    x.style.display="none"
    hamburger.style.display="block"
  }
}
