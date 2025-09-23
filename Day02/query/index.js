// document.querySelector("#plus").addEventListener("click", () => {
//   numSpan.innerText = +numSpan.innerText + 1;
//   if (numSpan.innerText > 10) {
//     numSpan.style.color = "blue";
//   }
// });
// document.querySelector("#minus").addEventListener("click", () => {
//   numSpan.innerText > 0 ? (numSpan.innerText = +numSpan.innerText - 1) : 0;
//   if (numSpan.innerText <= 10) {
//     numSpan.style.color = "black";
//   }
// });

// const numSpan = document.querySelector("#num");

const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");
const num = document.querySelector("#num");
minus.addEventListener("click", () => {
  num.innerText = +num.innerText - 1;
  if (num.innerText <= 5) {
    minus.classList.add("overFive");
  } else {
    minus.classList.remove("overFive");
  }
});
plus.addEventListener("click", () => {
  num.innerText = +num.innerText + 1;
  // plus.className = +num.innerText > 5 ? "mybutton overFive" : "mybutton";
  if (+num.innerText > 5) {
    plus.classList.add("overFive");
  } else {
    plus.classList.remove("overFive");
  }
});
