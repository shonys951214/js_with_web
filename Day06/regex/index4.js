const a = /\d/; // 숫자도 포함
const b = /^\d$/; // 숫자 하나만
const c = /^\d+$/; // 숫자만

const d = /^[a-zA-Z]+$/; // 영어만
const e = /^[a-zA-Z0-9]+$/; // 영어 숫자만

const f = /^01[016879]-\d{4}-\d{4}$/; // 휴대폰번호

const num = document.querySelector("#input");

// num.addEventListener("input", () => {
//   const Phone = input.value.match(f);
//   const result = Phone ? "폰번맞음" : "폰번아님";
//   console.log(result);
// });

// 생년월일
const residentVal = /^\d{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/;
