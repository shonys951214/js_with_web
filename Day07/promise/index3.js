console.log("점메추");

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const a = getRandomInt(1, 10);
// 1~10초 사이로 랜덤하게
setTimeout(() => {
  console.log("제육");
}, a * 1000);

setTimeout(() => {
  console.log("맛점");
}, a * 1000 + 1000);
