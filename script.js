// WIP : Developer will look into this file and write the code to make the application work as expected.
const menu = document.querySelector("nav ul");
const menuBtn = document.querySelector(".menu-open");
const closeBtn = document.querySelector(".menu-close");

menuBtn.addEventListener("click", () => {
  menu.classList.add("open");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("open");
});
