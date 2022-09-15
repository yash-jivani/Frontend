function removeEffect(e) {
  // console.log(e);
  this.classList.remove("playing");
}

function playAudio(e) {
  //   console.log(e);
  const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!audio) return;
  const key = this.document.querySelector(`.key[data-key="${e.keyCode}"]`);

  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

window.addEventListener("keydown", playAudio);
const allKeys = document.querySelectorAll(".key");
allKeys.forEach((currKey) => {
  currKey.addEventListener("transitionend", removeEffect);
});
