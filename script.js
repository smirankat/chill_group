//mobile menu
let menu = [
  "О компании",
  "Структура",
  "Лицензии",
  "Клиенты",
  "Контакты",
  "+7 (777) 555 55 55",
];

const mobileMenuList = document.querySelector(".menu-mobile__list");
let menuItems = "";
for (let i = 0; i < menu.length; i++) {
  menuItems += '<li><a href="#!">' + menu[i] + "</a></li>";
}
mobileMenuList.innerHTML = menuItems;

//certificate slider
let width = 750;
const slides = document.querySelector(".certificate__items");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

let position = 0;

document.querySelector(".prev-button").onclick = function () {
  if (window.innerWidth < 768) {
    position += width;
    position = Math.min(position, 0);
    slides.style.marginLeft = position + "px";
  }
};
document.querySelector(".next-button").onclick = function () {
  if (window.innerWidth < 768) {
    position -= width;
    position = Math.max(position, -width * 2);
    slides.style.marginLeft = position + "px";
  }
};
