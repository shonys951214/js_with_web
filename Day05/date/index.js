// const a = new Date();
// console.log(a.getHours());
// console.log(a.getMinutes());
// console.log(new Date().getHours());

const time = document.querySelector("#time");
time.innerText = `현재시간 : ${new Date().getHours()}시 ${new Date().getMinutes()}분 ${new Date().getSeconds()}초`;

// 새로고침 버튼
// const reload = document.querySelector("#reload");
// reload.addEventListener("click", () => {
//   location.reload();
// });

const reload = document.querySelector("#reload");
reload.addEventListener("click", () => {
  time.innerText = `현재시간 : ${new Date().getHours()}시 ${new Date().getMinutes()}분 ${new Date().getSeconds()}초`;
});
