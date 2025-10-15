const apple = () =>
  new Promise((success, fail) => {
    success("사과");
  });

const iphone = (col, vir) =>
  new Promise((success, fail) => {
    success(`${col}색상 ${vir} 아이폰`);
  });

iphone("스그", "17").then((v) => console.log(v));
