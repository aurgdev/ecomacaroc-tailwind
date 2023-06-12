const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");
const closeButton = document.getElementById("closeButton");
const body = document.body;

menuButton.addEventListener("click", function () {
  mobileMenu.classList.toggle("-translate-x-full");
  body.classList.toggle("overflow-hidden");
});

closeButton.addEventListener("click", function () {
  mobileMenu.classList.add("-translate-x-full");
  body.classList.remove("overflow-hidden");
});
