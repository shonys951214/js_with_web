const start = document.querySelector(".start");
const reset = document.querySelector(".reset");
const input = document.querySelector("input");
const gogo = document.querySelector(".gogo");
const correct = document.querySelector(".correct");
const up = document.querySelector(".up");
const down = document.querySelector(".down");
// const value = input.value;

// 랜덤 정수 만드는 공식
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// start 클릭시 랜덤 정수 콘솔로그로
start.addEventListener("click", () => {
  const randomNum = getRandomInt(1, 100);
  console.log(randomNum);
});
gogo.addEventListener("click", () => {
  if (Number(input.value) == Number(randomNum)) {
    correct.style.display = "flex";
  } else {
    console.log("RW");
  }
});
// gogo.addEventListener("click", () => {
//   if (value == randomNum) {
//     correct.style.display = "flex";
//   } else {
//     console.log("RW");
//   }
// });
// reset 클릭시 새로고침
reset.addEventListener("click", () => {
  location.reload();
});
