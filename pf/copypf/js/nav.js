// 슬라이드 메뉴

const menuOpen = document.querySelector("#menu_open");
const menuClose = document.querySelector("#menu_close");
const menuPanel = document.querySelector("#menu-panel");
const menuItems = document.querySelectorAll("#menu-panel li");
const menuOptions = {
  duration: 1400,
  easing: "ease",
  fill: "forwards",
};

// 메뉴 열기

menuOpen.addEventListener("click", () => {
  menuPanel.animate({ translate: ["100vw", 0] }, menuOptions);
  menuItems.forEach((menuItem, index) => {
    menuItem.animate(
      {
        opacity: [0, 1],
        translate: ["2rem", 0],
      },
      {
        duration: 2400,
        delay: 300 * index,
        easing: "ease",
        fill: "forwards",
      }
    );
  });
});

// 메뉴 닫기

menuClose.addEventListener("click", () => {
  menuPanel.animate({ translate: [0, "100vw"] }, menuOptions);
  menuItems.forEach((menuItem) => {
    menuItem.animate({ opacity: [1, 0] }, menuOptions);
  });
});
