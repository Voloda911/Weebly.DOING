const header = document.querySelector(".header");
const body = document.querySelector("body");

// script.js
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].classList.add("active");

  setTimeout(showSlides, 6000);
}

function handleScroll() {
  let scrollPas = window.scrollY;

  // if (window.matchMedia("(max-width: 768px)").matches) {
  //   header.classList.remove("show_header");
  // }
  if (scrollPas > 0) {
    header.classList.add("show_header");
  } else {
    header.classList.remove("show_header");
  }
}
window.addEventListener("scroll", handleScroll);

function hideSubMenu() {
  if (headerSub) {
    headerSub.style.display = "none";
  }
}
document.addEventListener("DOMContentLoaded", function () {
  const moreButton = document.getElementById("more_button");
  const headerSub = document.querySelector(".header-sub-list");

  function hideSubMenu() {
    if (headerSub) {
      headerSub.style.display = "none";
    }
  }
  if (moreButton) {
    moreButton.addEventListener("click", (event) => {
      event.preventDefault();
      if (headerSub.style.display === "block") {
        hideSubMenu();
      } else {
        headerSub.style.display = "block";
      }
    });
  }
  window.addEventListener("scroll", hideSubMenu);
  document.addEventListener("click", function (event) {
    if (
      !moreButton.contains(event.target) &&
      !headerSub.contains(event.target)
    ) {
      hideSubMenu();
    }
  });
});
function updateImageSource() {
  const imgWeebly = document.querySelector(".img-weebly img");

  if (window.matchMedia("(max-width: 768px)").matches) {
    imgWeebly.src =
      "//cdn2.editmysite.com/images/landing-pages/global/logotype.svg";
  } else {
    imgWeebly.src = "logo.svg";
  }
}
updateImageSource();
window.addEventListener("resize", updateImageSource);

document.addEventListener("DOMContentLoaded", function () {
  const burgerButton = document.querySelector(".menu_burger");
  const background = document.querySelector(".burger");
  const menu = document.querySelector(".menu");
  const singup = document.querySelector(".singUp");

  function toggleMenu() {
    menu.classList.toggle("active_show");
    singup.classList.toggle("active_show");

    background.classList.toggle("background-show");
  }
  burgerButton.addEventListener("click", function (event) {
    event.stopPropagation();
    toggleMenu();
  });

  // Скрыть меню при клике вне меню
  document.addEventListener("click", function (event) {
    if (
      !menu.contains(event.target) &&
      !burgerButton.contains(event.target) &&
      menu.classList.contains("active")
    ) {
      toggleMenu();
    }
  });
});
