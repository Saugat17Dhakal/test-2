
// Navbar Script Start
// Declaring Variables

const menuBtn = document.querySelector(".menu-icon span");
const searchBtn = document.querySelector(".search-icon");
const cancelBtn = document.querySelector(".cancel-icon");
const items = document.querySelector(".nav-items");
const form = document.querySelector("form");

// Close and Open Menu

menuBtn.onclick = ()=>{
  items.classList.add("active");
  menuBtn.classList.add("hide");
  searchBtn.classList.add("hide");
  cancelBtn.classList.add("show");
}

// Close and Open Menu

cancelBtn.onclick = ()=>{
  items.classList.remove("active");
  menuBtn.classList.remove("hide");
  searchBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
  form.classList.remove("active");
  cancelBtn.style.color = "var(--primary)";
}

// Close and Open Search

searchBtn.onclick = ()=>{
  form.classList.add("active");
  searchBtn.classList.add("hide");
  cancelBtn.classList.add("show");
}

//Changing Navbar Style on Scroll

window.addEventListener('scroll', function () {
  const header = document.querySelector('nav');
  const windowPosition = window.scrollY > 0;
  header.classList.toggle('scrolling-active', windowPosition);
})

// Navbar Script End

// Carousel Start

// Carousel Responsiveness
const responsive = {
  0: {
      items: 1
  },
  320: {
      items: 1
  },
  570: {
      items: 2
  },
  960: {
      items: 3
  }
}
// Carousel Core Styles
$(".slider").owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 2000, 
  autoplayHoverPause: true,
  nav: true,
  navText: ["<i class='fas fa-long-arrow-alt-left' > ","<i class='fas fa-long-arrow-alt-right' >"],
  dots: true,
  responsive: responsive
});

// Heart 

function myFunction(x) {
  x.classList.toggle("fas");
  
}

// AOS 

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
// Loader
const spinnerWrapper = document.querySelector('.spinner-wrapper');

window.addEventListener('load', function () {
    // spinnerWrapper.style.display = 'none';
    spinnerWrapper.parentElement.removeChild(spinnerWrapper);
});