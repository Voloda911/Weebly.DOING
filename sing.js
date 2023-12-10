const header = document.querySelector(".header-menu");
const headerCol = document.querySelector(".header-col");
document.addEventListener("scroll", () => {
  console.log(scrollY);
  if (scrollY > 0) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});
