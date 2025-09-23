const hide = document.querySelector("#hidescreen");
const screen = document.querySelector("#show");
const show = document.querySelector("#showscreen");
const opacityVid = document.querySelector(".vid");
show.addEventListener("click", () => {
  screen.classList.toggle("screenshow");
  opacityVid.style.opacity = 0.6;
});
hide.addEventListener("click", () => {
  screen.classList.toggle("screenshow");
  opacityVid.style.opacity = 1;
});
