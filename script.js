// Javascript for controlling hamburger

var menuButton = document.querySelector('#menuToggle');
var navLinks = document.querySelectorAll('.list-link');

menuButton.addEventListener('click',function (){

    document.body.classList.toggle('nav-open');
})

// Remove class nav-open on click of links

navLinks.forEach(link=>{
  document.body.classList.remove('nav-open');
})