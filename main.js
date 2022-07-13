const menu = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");
menu.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});
ScrollReveal().reveal(".showcase");
ScrollReveal().reveal(".news-cards", { delay: 500 });
ScrollReveal().reveal(".cards-banners-one", { delay: 500 });
ScrollReveal().reveal(".cards-banners-two", { delay: 500 });
