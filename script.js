const navigationButton = document.querySelector(".nav-btn");
const closeButton = document.querySelector(".close-btn");
const navigationLinks = document.querySelector(".nav-links");

const openMenu = () => {
  closeButton.classList.remove("hidden");
  navigationLinks.classList.add("open");
  navigationLinks.classList.remove("nav-links");
};

const closeMenu = () => {
  closeButton.classList.add("hidden");
  navigationLinks.classList.remove("open");
  navigationLinks.classList.add("nav-links");
};

const closeWithEscape = (e) => {
  if (e.key === "Escape" && navigationLinks.classList.contains("open")) {
    closeMenu();
  }
};

navigationButton.addEventListener("click", openMenu);

closeButton.addEventListener("click", closeMenu);

document.addEventListener("keydown", closeWithEscape);
