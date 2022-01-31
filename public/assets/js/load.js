var body = document.querySelector("body");
var loader = document.querySelector(".loader");
var heroSection = document.querySelector(".hero");
var subHeroSection = document.querySelector(".sub-hero");

window.addEventListener("load", function () {
  body.style.overflowY = "auto";
  loader.classList.add("loaded");

  if (heroSection != null) {
    heroSection.classList.add("animated");
  }
  
  if (subHeroSection != null) {
    subHeroSection.classList.add("animated");
  }
});
