const words = [
  "사과",
  "바나나",
  "포도",
  "수박",
  "멜론",
  "복숭아",
  "감",
  "딸기",
  "체리",
  "키위",
  "오렌지",
  "레몬",
  "자두",
  "감자",
  "토마토",
  "양파",
  "당근",
  "옥수수",
  "배추",
  "브로콜리",
  "사과",
  "바나나",
  "포도",
  "수박",
  "멜론",
  "복숭아",
  "감",
  "딸기",
  "체리",
  "키위",
  "오렌지",
  "레몬",
  "자두",
  "감자",
  "토마토",
  "양파",
  "당근",
  "옥수수",
  "배추",
  "브로콜리",
  "사과",
  "바나나",
  "포도",
  "수박",
  "멜론",
  "복숭아",
  "감",
  "딸기",
  "체리",
  "키위",
  "오렌지",
  "레몬",
  "자두",
  "감자",
  "토마토",
  "양파",
  "당근",
  "옥수수",
  "배추",
  "브로콜리",
];

const boxes = document.querySelectorAll(".word-box");
const inputEl = document.getElementById("input");
const startBtn = document.getElementById("startBtn");
const statusEl = document.getElementById("status");
const livesEl = document.getElementById("lives");
const speedEl = document.getElementById("speed");
const trainEl = document.getElementById("train");

let wordSet = [];
let index = 0;
let score = 0; // 총 입력한 음절 수
let life = 5;
let history = [];
let startTime = 0;

function startGame() {
  wordSet = shuffle([...words]).slice(0, 20);
  index = 0;
  score = 0;
  life = 5;
  history = [];
  startBtn.disabled = true;
  inputEl.disabled = false;
  inputEl.value = "";
  inputEl.focus();
  statusEl.textContent = "";
  livesEl.textContent = "❤️".repeat(life);
  speedEl.textContent = "0 타/분";
  startTime = Date.now();
  updateBoxes();
}

function updateBoxes() {
  const positions = [-2, -1, 0, 1, 2];

  boxes.forEach((box, i) => {
    const wordIndex = index + positions[i];
    box.classList.remove("correct", "wrong");

    if (wordIndex >= 0 && wordIndex < wordSet.length) {
      box.textContent = wordSet[wordIndex];
      box.style.visibility = "visible";

      if (wordIndex < index) {
        if (history[wordIndex]) box.classList.add("correct");
        else box.classList.add("wrong");
      }

      if (positions[i] === 0) box.classList.add("current");
      else box.classList.remove("current");
    } else {
      box.textContent = "";
      box.style.visibility = "hidden";
    }
  });
}

function handleKeyPress(e) {
  if (e.key === "Enter" && inputEl.value.trim() !== "") {
    const typed = inputEl.value.trim();
    const currentWord = wordSet[index];
    const isCorrect = typed === currentWord;

    history[index] = isCorrect;

    if (isCorrect) {
      // 맞은 단어의 음절 수만큼 타수 누적
      score += getSyllableCount(currentWord);
    } else {
      life--;
      if (life <= 0) {
        life = 0;
        updateLives();
        gameOver();
        return;
      }
      triggerShake();
    }

    index++;
    inputEl.value = "";

    updateLives();
    updateSpeed(); // 분당 타수 계산

    if (index >= wordSet.length) {
      endGame();
    } else {
      updateBoxes();
    }
  }
}

// ✅ 분당 타수(KPM, 한글 600타 기준)
function updateSpeed() {
  const elapsedSec = (Date.now() - startTime) / 1000;
  const kpm = (score / (elapsedSec / 60)).toFixed(0);
  speedEl.textContent = `${kpm} 타/분`;
}

function triggerShake() {
  trainEl.classList.add("shake");
  setTimeout(() => trainEl.classList.remove("shake"), 400);
}

function updateLives() {
  livesEl.textContent = "❤️".repeat(life) + "🖤".repeat(5 - life);
}

function getSyllableCount(word) {
  return word.length; // 한글 글자 수 = 음절 수
}

function gameOver() {
  inputEl.disabled = true;
  startBtn.disabled = false;
  updateSpeed();
  statusEl.textContent = "💀 게임 오버! " + speedEl.textContent;
}

function endGame() {
  inputEl.disabled = true;
  startBtn.disabled = false;
  updateSpeed();
  statusEl.textContent = `🎯 클리어! 최종 속도: ${speedEl.textContent}`;
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

inputEl.addEventListener("keydown", handleKeyPress);
startBtn.addEventListener("click", startGame);
