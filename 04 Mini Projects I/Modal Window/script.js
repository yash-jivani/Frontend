"use strict";

let modal = document.querySelector(".modal");
let showModal = document.querySelectorAll(".show-modal");
let closeBtn = document.querySelector(".close-modal");
let overlay = document.querySelector(".overlay");

// console.log(modal)
// console.log(showModal)
// console.log(closeBtn)
// console.log(overlay);

// function for removing classes
function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

// when click on show modal button
for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener("click", openModal);
}

// function for adding classes
function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

// when click on close button
closeBtn.addEventListener("click", closeModal);
// when click on overlay
overlay.addEventListener("click", closeModal);

// when press ESC key
document.addEventListener("keydown", function (e) {
  // console.log(e.key);
  if (e.key === "Escape" && !modal.classList.contains(".hidden")) {
    closeModal();
  }
});
