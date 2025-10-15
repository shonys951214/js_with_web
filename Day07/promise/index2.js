const makeDough = () =>
  new Promise((success, fail) => {
    const selectDough = prompt("도우종류 입력 ex) 오리지널, 씬, 나폴리");
    success(`${selectDough}도우 만들기`);
  });

const makeTomato = () =>
  new Promise((success, fail) => {
    success("토마토 뿌리기");
  });

const makeCheese = () =>
  new Promise((success, fail) => {
    const selectCheese = prompt("치즈종류 입력 ex) 모짜렐라, 슈레드, 체다");
    success(`${selectCheese}치즈 뿌리기`);
  });
const makeBaked = () =>
  new Promise((success, fail) => {
    success("빵 굽기");
  });
const makePizza = () =>
  new Promise((success, fail) => {
    success(console.log("피자 완성"));
  });
makeDough()
  .then((v) => {
    console.log(v);
    return makeTomato();
  })
  .then((v) => {
    console.log(v);
    return makeCheese();
  })
  .then((v) => {
    console.log(v);
    return makeBaked();
  })
  .then((v) => {
    console.log(v);
    return makePizza();
  });
