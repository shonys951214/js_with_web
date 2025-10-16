// //fetch : 가져오다
// fetch("https://dummyjson.com/products")
//   .then((res) => res.json())
//   .then((v) => {
//     const newData = v.products.map((x) => ({ title: x.title }));
//     console.log(newData);
//   });

// d4480bde54e5471e910c7f08109c258a

const APIKEY = "d4480bde54e5471e910c7f08109c258a";
const lat = 37.489;
const long = 126.723;

const bupyung = fetch(
  `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${long}&appid=${APIKEY}`
).then((res) => res.json());
