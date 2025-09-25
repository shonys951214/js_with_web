import { arr } from "./query.js";
import { keyframes } from "./animation.js";

arr.forEach((v, i) => {
  v.animate(keyframes, { duration: 300, fill: "forwards", delay: 300 * i });
});
