const loading = document.querySelector("#loading");

// load : 모든 리소스가 다 로드되었을 때, [이미지, css, js]파일로딩이 다끝났을때
window.addEventListener("load", () => {
  loading.style.display = "none";
});
