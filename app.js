$(document).ready( ()=> {
  $('.toggle-collapse').click( ()=> {
    $('.navbar-collapse').toggleClass("collapse");
  });
});

window.addEventListener("scroll", ()=> {
  var nav = document.querySelector("nav");
  nav.classList.toggle("sticky",window.scrollY > 0);
});