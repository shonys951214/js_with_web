// 버튼 클릭시 인풋타입 패스워드로
// const btn = document.querySelector("#btn");
// const input = document.querySelector("#input");
// btn.addEventListener("click", () => {
//   input.type = "password";
// });

const input = document.querySelector("#input");
const span = document.querySelector("span");

// max length vir
input.addEventListener("input", () => {
  span.innerText = `${input.value.length}/20`;
});
