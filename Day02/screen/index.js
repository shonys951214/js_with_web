const menuBtn = document.querySelector("#menu");
const screen = document.querySelector("#screen");

menuBtn.addEventListener("click", () => {
  screen.classList.toggle("hidden");
});
