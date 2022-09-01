"use strict";

const mainNav = document.querySelector(".nav__links");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnCloseModal = document.querySelector(".btn--close-modal");

///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => {
  return btn.addEventListener("click", openModal);
});

btnCloseModal.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

///////////////////////////////////////
// Page Navigation

// const navLinks = document.querySelectorAll(".nav__link");
// navLinks.forEach((currentLink) => {
//   currentLink.addEventListener("click", function (e) {
//     e.preventDefault();

//     const id = currentLink.getAttribute("href");
//     // console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   });
// });

mainNav.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
