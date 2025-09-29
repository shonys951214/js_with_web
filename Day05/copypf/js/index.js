// 메인화면 사진슬라이드
const swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

// 스크롤로 페이드인 아웃
// 범위 안에 들어오면 페이드인
const animateFade = (entries, obs) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.animate(
        {
          opacity: [0, 1],
          filter: ["blur(.4rem)", "blur(0)"],
          translate: ["0 4rem", 0],
        },
        {
          duration: 2000,
          easing: "ease",
          fill: "forwards",
        }
      );
      // 한 번 표시되면 관찰 중지
      obs.unobserve(entry.target);
    }
  });
};

// 관찰 설정
const fadeObserver = new IntersectionObserver(animateFade);

// 페이드인 관찰하도록 지시
const fadeElements = document.querySelectorAll(".fadein");
fadeElements.forEach((fadeElement) => {
  fadeObserver.observe(fadeElement);
});
