//select DOM
const menubtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menunav = document.querySelector(".menu-navigate");
const menupic = document.querySelector(".menu-pic");
const navitems = document.querySelectorAll(".item");

//set intial menu
let show = false;

menubtn.addEventListener("click", toggle);

function toggle() {
  if (!show) {
    menubtn.classList.add("close");
    menu.classList.add("show");
    menunav.classList.add("show");
    menupic.classList.add("show");
    navitems.forEach(item => item.classList.add("show"));
    //set menu state
    show = true;
  } else {
    menubtn.classList.remove("close");
    menu.classList.remove("show");
    menunav.classList.remove("show");
    menupic.classList.remove("show");
    navitems.forEach(item => item.classList.remove("show"));
    //set menu state
    show = false;
  }
}
