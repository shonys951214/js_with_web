// Ex1.
// const btn = document.createElement("button");
// btn.innerText = "test";
// btn.addEventListener("click", () => {
//   alert("test alert");
// });
// document.body.appendChild(btn);

// Q1. div 태그 만들고
// 내용 점메추 만들고
// 클릭하면 콘솔로그로 오늘의 점심메뉴는 마라탕입니다

const q1 = document.createElement("div");
q1.innerText = "점메추";
q1.addEventListener("click", () => {
  console.log("점심메뉴는 마라탕");
});
document.body.appendChild(q1);

// Q2. 버튼 태그만들고
// 안에 콜라 내용넣고
// 클릭하면 콜라가 사이다로 변하도록하기

const q2 = document.createElement("button");
q2.innerText = "콜라";
q2.addEventListener("click", () => {
  q2.innerText = "사이다";
});
document.body.appendChild(q2);

// Q3. 버튼 만들고
// 버튼 😎 😛왓다갓다

const q3 = document.createElement("button");
q3.innerText = "😎";

q3.addEventListener("click", () => {
  q3.innerText = q3.innerText == "😎" ? "😛" : "😎";
});

document.body.appendChild(q3);

// Q4.

const q4 = document.createElement("button");
q4.innerText = "✅";
q4.style.cssText =
  "backgroundcolor : white;padding:4px;, border-radius:4px; border:1px solid #efefef; transition: all 0.5s;";
q4.addEventListener("click", () => {
  q4.style.backgroundColor =
    q4.style.backgroundColor == "white" ? "blue" : "white";
});
document.body.appendChild(q4);

// Q5. -버튼 +버튼 스판 0
// 버튼 누르면 계산하기
// 0밑으로 안떨어지게, 11부터 글씨색 파란색
// 10으로 돌아오면 검은색

const q5Plusbtn = document.createElement("button");
q5Plusbtn.innerText = "+";
q5Plusbtn.addEventListener("click", () => {
  q5Span.innerText = +q5Span.innerText + 1;
  if (q5Span.innerText > 10) {
    q5Span.style.color = "blue";
  }
});

const q5Minusbtn = document.createElement("button");
q5Minusbtn.innerText = "-";
q5Minusbtn.addEventListener("click", () => {
  q5Span.innerText > 0 ? (q5Span.innerText = +q5Span.innerText - 1) : 0;
  if (q5Span.innerText <= 10) {
    q5Span.style.color = "black";
  }
});

const q5Span = document.createElement("span");
q5Span.innerText = "0";

document.body.appendChild(q5Plusbtn);
document.body.appendChild(q5Span);
document.body.appendChild(q5Minusbtn);
