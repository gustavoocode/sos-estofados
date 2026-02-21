document.addEventListener("DOMContentLoaded", function(){

const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");

hamburger.addEventListener("click", function(){
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
  overlay.classList.toggle("active");
});

overlay.addEventListener("click", function(){
  hamburger.classList.remove("active");
  menu.classList.remove("active");
  overlay.classList.remove("active");
});

});