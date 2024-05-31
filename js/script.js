// toggle class active untuk menu-bar

const menuNav = document.querySelector(".menu-navigation");
const menuBar = document.querySelector(".menu-bar");

menuBar.onclick = (e) => {
  menuNav.classList.toggle("menu-active");
  e.preventDefault(e);
};

// ketika klik diluar elemen menu-bar dan menu-nav

const mn = document.querySelector(".menu-navigation");

const mb = document.querySelector(".menu-bar");

document.addEventListener("click", function (e) {
  if (!mn.contains(e.target) && !mb.contains(e.target)) {
    menuNav.classList.remove("menu-active");
  }
});
