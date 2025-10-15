const randomNum = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const animals = ["🐇", "🐢", "🐎", "🐕‍🦺", "🐅", "🐈"];

const makeRace = (name) => {
  const time = randomNum(0, 10);
  return new Promise((success) => {
    setTimeout(() => {
      success({ name: name, time: time });
    }, time);
  });
};
Promise.all(animals.map((v) => makeRace(v))).then((result) => {
  console.log(result);
});

// array sort
