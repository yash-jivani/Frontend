const panels = document.querySelectorAll(".panel");
console.log(panels);

function handler(e) {
  // console.log(e)
  // console.log(this);
  this.classList.toggle("show-text");
  this.classList.toggle("open");
}

panels.forEach((panel) => {
  panel.addEventListener("click", handler);
});
