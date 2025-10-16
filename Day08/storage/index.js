const input = document.querySelector("#input");
const saveBtn = document.querySelector("#saveBtn");
const getBtn = document.querySelector("#getBtn");

// 세이브 버튼
saveBtn.addEventListener("click", () => {
  if (localStorage.getItem("사탕리스트")) {
    const storageValue = localStorage.getItem("사탕리스트");
    localStorage.setItem("사탕리스트", storageValue + `,${input.value}`);
    input.value = "";
  } else {
    localStorage.setItem("사탕리스트", input.value);
    input.value = "";
  }
});

// 불러오기 버튼
getBtn.addEventListener("click", () => {
  console.log(localStorage.getItem("사탕리스트"));
});
