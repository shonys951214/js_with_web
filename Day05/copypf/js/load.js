// 로딩페이지
const loadingAreaGrey = document.querySelector("#loading");
const loadingAreaGreen = document.querySelector("#loading-screen");
const loadingText = document.querySelector("#loading p");

window.addEventListener("load", () => {
  // 로딩 중 화면
  loadingAreaGrey.animate(
    {
      opacity: [1, 0],
      visibility: "hidden",
    },
    {
      duration: 2000,
      delay: 1200,
      easing: "ease",
      fill: "forwards",
    }
  );

  // 로딩 중 텍스트
  loadingText.animate(
    [
      {
        opacity: 1,
        offset: 0.8, //80%
      },
      {
        opacity: 0,
        offset: 1, //100%
      },
    ],
    {
      duration: 1200,
      easing: "ease",
      fill: "forwards",
    }
  );
});
