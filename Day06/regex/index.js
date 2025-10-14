const input = document.querySelector("#input");
input.addEventListener("input", () => {
  const hasCat = input.value.match(/\bcat\b/gi);
  const result = hasCat ? "고양이포함" : "고양이없음";
  console.log(result);
});
