const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const liEl = document.querySelector(".main-nav-list, .main-nav-link");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

liEl.addEventListener("click", function () {
  headerEl.classList.remove("nav-open")
});