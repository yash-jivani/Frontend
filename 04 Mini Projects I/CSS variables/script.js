const inputs = document.querySelectorAll("input");
console.log(inputs);

function handler() {
  // console.log(this.value)
  const suffix = this.dataset.sizing || "";
  console.log(suffix);
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach((input) => input.addEventListener("change", handler));
inputs.forEach((input) => input.addEventListener("mousemove", handler));
