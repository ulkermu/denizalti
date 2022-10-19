// Instantiating the global app object
var app = {};

//* Toggle Nav Bar

const menuLink = document.querySelector(".nav-bar-burger");
const menuOverlay = document.querySelector(".menu-overlay");
const burger1 = document.querySelector(".nav-bar-burger-inc-1");
const burger2 = document.querySelector(".nav-bar-burger-inc-2");
const burger3 = document.querySelector(".nav-bar-burger-inc-3");

menuLink.addEventListener("click", () => {
  menuOverlay.classList.toggle("open");
  burger1.classList.toggle("nav-bar-burger-inc");
  burger2.classList.toggle("nav-bar-burger-inc");
  burger3.classList.toggle("nav-bar-burger-inc");
  document.body.classList.toggle("hide-scrollbar");
});

window.addEventListener("resize", () => {
  if(window.innerWidth > 1201) {
    document.body.classList.remove("hide-scrollbar");
  } else if (window.innerWidth < 1201 && menuOverlay.classList.contains('open')) {
    document.body.classList.add("hide-scrollbar");
  } else if (window.innerWidth < 1201 && !menuOverlay.classList.contains('open')) {
    document.body.classList.remove("hide-scrollbar");
  }
});
