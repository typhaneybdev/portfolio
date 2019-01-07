//sticky header function
window.onscroll = function() {
  myFunction();
};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
//https://www.w3schools.com/howto/howto_js_sticky_header.asp

//TODO: Hamburger menu toggle
//document.querySelector(".fas fa-bars").addEventListener("click", menuToggle);
//console.log("clicked");

//function menuToggle() {
// const x = document.getElementById("nav-menu");
//if (x.className === "nav-menu") {
// x.className += " responsive";
// console.log("clicked");
//} else {
//   x.className = "nav-menu";
// }
