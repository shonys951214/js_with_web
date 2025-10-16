const APIKEY = "d4480bde54e5471e910c7f08109c258a";
fetch(
  `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${long}&appid=${APIKEY}`
)
  .then((res) => res.json())
  .then(console.log);

// 한국시간
setInterval(() => {
  const nowKor = new Date().toLocaleTimeString();
  korTime.innerHTML = nowKor;
}, 1000);
