// setInterval(() => {
//   const now = new Date().toLocaleString();
//   clock.innerHTML = now;
// }, 1000);

const timer = document.querySelector(".timer");
const shootBtn = document.querySelector(".shoot");

// 1초인터벌쓰고지우고?
// if문으로 0되면 끝?
shootBtn.addEventListener("click", () => {
  let count = 5;
  timer.innerText = `🚀${count}초전`;

  const timerStart = setInterval(() => {
    count = count - 1;
    timer.innerText = `🚀${count}초전`;

    if (count == 0) {
      clearInterval(timerStart);
      timer.innerText = "끝";
    }
  }, 1000);
});
