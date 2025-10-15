// setTimeout(() => {}, 1000);
// setInterval(() => {}, 1000);
const clock = document.querySelector("#clock");

setInterval(() => {
  const now = new Date().toLocaleString();
  clock.innerHTML = now;
}, 1000);
