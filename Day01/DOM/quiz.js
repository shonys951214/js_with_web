// 유저에게 태그와 내용을 프롬프트 한번에 입력받고
// 없는 태그면 div 태그로 없는 태그 입력했습니다 나오고
// 올바른 태그를 넣으면 태그와 내용만들기
// ex) div 김치찌개 => <div>김치찌개</div>

// const makeTag = window.prompt("생성할 태그와 내용을 입력하세요");
// const userTag = document.createElement(makeTag.split(" ")[0]);
// userTag.innerText = makeTag.split(" ")[1];
// document.body.appendChild(userTag);
// if (userTag) {
// }

// 더 짧게 쓰기 from Teacher
// const [tag, contents] = window.prompt("생성할 태그와 내용을 입력하세요").split(" ");
// const newTag = document.createElement(tag);
// newTag.innerText = contents;
// document.body.appendChild(newTag);

// 유저에게 내용을 프롬프트 한번에 입력받고
// 띄어쓰기 기준으로 해서 내용들을
// button 태그로 만들어서 나타내기
// const makeBtn = prompt("아무거나 나열").split(" ");
// const btnNumber = makeBtn.length;
// console.log(btnNumber);
// const newBtn = document.createElement("button") * btnNumber;
// newBtn.innerText = "rrr";
// document.body.appendChild(newBtn);
const contents = prompt("내용 입력").split(" ");

contents.forEach((v) => {
  const btn = document.createElement("button");
  btn.innerText = v;
  document.body.appendChild(btn);
});
