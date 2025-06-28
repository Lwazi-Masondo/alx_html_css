let menuList = document.getElementById("menuList");
let menuButton = document.getElementById("menuButton");

menuButton.addEventListener("click", toggleMenu);

function toggleMenu() {
  menuButton.classList.toggle("open");
  menuList.classList.toggle("show");
}
