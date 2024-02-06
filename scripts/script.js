console.log("hallo");


// met bron

const menuButton = document.querySelector("header button");
const deNav = document.querySelector("header nav");

function toggleMenu() {
    deNav.classList.toggle("open");
}

menuButton.onclick = toggleMenu;
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }