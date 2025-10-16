const APIKEY = "d4480bde54e5471e910c7f08109c258a";
const mapArr = [
  { name: bupyeong, lat: 1, long: 1 },
  { name: london, lat: 1, long: 1 },
  { name: wellington, lat: 1, long: 1 },
  { name: bern, lat: 1, long: 1 },
  { name: tokyo, lat: 1, long: 1 },
  { name: la, lat: 1, long: 1 },
];
// const lat = 37.489;
// const long = 126.723;
const map = {};

const bupyeong = document.querySelector("#bupyeong");
const london = document.querySelector("#london");
const wellington = document.querySelector("#wellington");
const bern = document.querySelector("#bern");
const toshkent = document.querySelector("#toshkent");
const tokyo = document.querySelector("#tokyo");
const la = document.querySelector("#la");

bupyeong.addEventListener("click", () => {});

const bupyung = fetch(
  `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${long}&appid=${APIKEY}`
)
  .then((res) => res.json())
  .then(console.log);

const korTime = document.querySelector("#korTime");
const otherTime = document.querySelector("#otherTime");

// 한국시간
setInterval(() => {
  const nowKor = new Date().toLocaleTimeString();
  korTime.innerHTML = nowKor;
}, 1000);
