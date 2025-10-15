//6마리로 도착 시간 랜덤으로
const randomNum = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const rabbit = () =>
  new Promise((success) => {
    setTimeout(() => success("🐇"), randomNum(1, 10) * 1000);
  });
const turtle = () =>
  new Promise((success) => {
    setTimeout(() => success("🐢"), randomNum(1, 10) * 1000);
  });
const horse = () =>
  new Promise((success) => {
    setTimeout(() => success("🐎"), randomNum(1, 10) * 1000);
  });
const dog = () =>
  new Promise((success) => {
    setTimeout(() => success("🐕‍🦺"), randomNum(1, 10) * 1000);
  });
const tiger = () =>
  new Promise((success) => {
    setTimeout(() => success("🐅"), randomNum(1, 10) * 1000);
  });
const cat = () =>
  new Promise((success) => {
    setTimeout(() => success("🐈"), randomNum(1, 10) * 1000);
  });

const animal = [rabbit, turtle, horse, dog, tiger, cat];
// horse().then((v) => console.log(v));
// turtle().then((v) => console.log(v));
// rabbit().then((v) => console.log(v));

Promise.race([animal]).then((v) => console.log()); // horse 반환 제일 시간 빠른거 출력
