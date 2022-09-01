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

/////////////////////////////////////
// Tabbed component
const tabContainer = document.querySelector(".operations__tab-container");
const tabs = document.querySelectorAll(".operations__tab");
const tabsContent = document.querySelectorAll(".operations__content");
// console.log(tabs);
// console.log(tabContainer);
// console.log(tabsContent);

// event deligation | closest method
tabContainer.addEventListener("click", function (e) {
  const clickedButton = e.target.closest("button");
  // console.log(clickedButton);

  // outside button + inside tabs container => clickedButton->null
  if (clickedButton === null) return;

  // activate button
  tabs.forEach((currTab) => {
    currTab.classList.remove("operations__tab--active");
  });
  clickedButton.classList.add("operations__tab--active");

  // activate content
  const currnetTabNumber = clickedButton.dataset.tab;
  tabsContent.forEach((currContent) => {
    currContent.classList.remove("operations__content--active");
  });
  document
    .querySelector(`.operations__content--${currnetTabNumber}`)
    .classList.add("operations__content--active");
});
