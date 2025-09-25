const arr = document.querySelectorAll(".box");
const keyframes = [
  { filter: "blur(20px)", opacity: 0, transform: "translateY(30px)" },
  { filter: "blur(0px)", opacity: 1, transform: "translateY(0px)" },
];

arr.forEach((v, i) => {
  v.animate(keyframes, { duration: 300, fill: "forwards", delay: 300 * i });
});
