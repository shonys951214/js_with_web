// const makeDough = () => {
//   return console.log("Dough");
// };
// const makeTomato = () => {
//   return console.log("Tomato");
// };
// const makeTopping = () => {
//   return console.log("Topping");
// };
// const makeBaked = () => {
//   return console.log("Baked");
// };
// const makePizza = () => {
//   return console.log("Pizza");
// };
// const makePacked = () => {
//   return console.log("Packed");
// };

const grindBean = (nextStep) => {
  console.log("원두 갈기");
  nextStep();
};
const tempingBean = (nextStep) => {
  console.log("원두 누르기");
  nextStep();
};
const exetractEes = (nextStep) => {
  console.log("에스프레소 추출");
  nextStep();
};
const makeCup = (nextStep) => {
  console.log("얼음잔 준비하기");
  nextStep();
};
const pourShotToCup = (nextStep) => {
  console.log("컵에 에스프레소 붓기");
  nextStep();
};
const makeAmericano = () => {
  console.log("아메리카노 완성");
};
grindBean(() => {
  tempingBean(() => {
    exetractEes(() => {
      makeCup(() => {
        pourShotToCup(() => {
          makeAmericano(() => {});
        });
      });
    });
  });
});
