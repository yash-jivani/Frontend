function setDate() {
  const currTime = new Date();
  const seconds = currTime.getSeconds();
  const mits = currTime.getMinutes();
  const hours = currTime.getHours();

  const secondsToDeg = (seconds / 60) * 360 + 90;
  const mitsToDeg = (mits / 60) * 360 + 90;
  const hoursToDeg = (hours / 12) * 360 + 90;

  console.log(seconds, mits, hours);
  //   console.log(secondsToDeg, mitsToDeg, hoursToDeg);
  document.querySelector(
    ".second-hand"
  ).style.transform = `rotate(${secondsToDeg}deg)`;
  document.querySelector(
    ".min-hand"
  ).style.transform = `rotate(${mitsToDeg}deg)`;
  document.querySelector(
    ".hour-hand"
  ).style.transform = `rotate(${hoursToDeg}deg)`;
}

setInterval(setDate, 1000);
