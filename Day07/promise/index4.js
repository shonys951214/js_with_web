// 라면 끓이기 프로그램
// 콘솔로 모든 과정이 찍혀야됌
// 1. 물 받기 1,5
// 2. 물 끓이기 5~8
// 3. 면, 스프 넣기 1~3
// 4. 계란 넣기 1~2
// 5. 라면 익히기 5~10
// 6. 라면 완
//
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const cook = () =>
  new Promise((success, fail) => {
    success("요리시작");
  });
const water = () =>
  new Promise((success, fail) => {
    setTimeout(() => {
      success("물받기");
    }, getRandomInt(1, 5) * 1000);
  });
const boilWater = () =>
  new Promise((success, fail) => {
    setTimeout(() => {
      success("물끓이기");
    }, getRandomInt(5, 8) * 1000);
  });
const ingredient = () =>
  new Promise((success, fail) => {
    setTimeout(() => {
      success("면, 스프넣기");
    }, getRandomInt(1, 3) * 1000);
  });
const egg = () =>
  new Promise((success, fail) => {
    setTimeout(() => {
      success("계란 넣기");
    }, 1000);
  });
const boilAll = () =>
  new Promise((success, fail) => {
    setTimeout(() => {
      success("라면 익히기");
    }, getRandomInt(5, 10) * 1000);
  });
const ramen = () =>
  new Promise((success, fail) => {
    success(console.log("라면 완성"));
  });

cook()
  .then((v) => {
    console.log(v);
    return water();
  })
  .then((v) => {
    console.log(v);
    return boilWater();
  })
  .then((v) => {
    console.log(v);
    return ingredient();
  })
  .then((v) => {
    console.log(v);
    return egg();
  })
  .then((v) => {
    console.log(v);
    return boilAll();
  })
  .then((v) => {
    console.log(v);
    return ramen();
  });
