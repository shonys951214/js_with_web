// setInterval(() => {
//   const now = new Date().toLocaleString();
//   clock.innerHTML = now;
// }, 1000);

const timer = document.querySelector(".timer");
const shootBtn = document.querySelector(".shoot");

// 1초인터벌쓰고지우고?
// promise
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

// let interval = setInterval(()=>{
// 	console.log("실행 중")
// },1000);

// //5초후 실행 중지
// setTimeout(()=> {
// 	clearInterval(interval);
// 	console.log("setInterval 이 중지되었습니다.")
// },5000);

// function startTimer() {
//   let timeLeft = 5;
//   timerDiv.textContent = `${timeLeft}초`; // 초기값 5초로 설정

//   const intervalId = setInterval(function () {
//     timeLeft--; // 초 감소
//     timerDiv.textContent = `${timeLeft}초`;

//     if (timeLeft === 0) {
//       clearInterval(intervalId); // 타이머 종료
//       alert("발사!");
//       timerDiv.textContent = "발사!";
//     }
//   }, 1000); // 1초마다 실행
// }
