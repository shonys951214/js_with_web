const wordsArr = [
  "가방",
  "학교",
  "컴퓨터",
  "마우스",
  "키보드",
  "노트북",
  "모니터",
  "책상",
  "연필",
  "지우개",
  "휴대폰",
  "인터넷",
  "프로그램",
  "코드",
  "자바스크립트",
  "파이썬",
  "함수",
  "변수",
  "배열",
  "객체",
  "이벤트",
  "버튼",
  "화면",
  "파일",
  "폴더",
  "저장",
  "열기",
  "닫기",
  "복사",
  "붙여넣기",
  "삭제",
  "선택",
  "실행",
  "오류",
  "디버그",
  "디자인",
  "그래픽",
  "사진",
  "음악",
  "동영상",
  "애니메이션",
  "캐릭터",
  "게임",
  "레벨",
  "점수",
  "승리",
  "패배",
  "친구",
  "가족",
  "여행",
  "음식",
  "물",
  "차",
  "커피",
  "차가운",
  "뜨거운",
  "날씨",
  "비",
  "눈",
  "바람",
  "구름",
  "하늘",
  "별",
  "달",
  "태양",
  "지구",
  "산",
  "강",
  "바다",
  "숲",
  "꽃",
  "나무",
  "동물",
  "고양이",
  "강아지",
  "토끼",
  "새",
  "물고기",
  "사자",
  "호랑이",
  "곰",
  "코끼리",
  "사막",
  "모래",
  "바위",
  "돌",
  "길",
  "다리",
  "건물",
  "집",
  "아파트",
  "시장",
  "상점",
  "음식점",
  "영화관",
  "도서관",
  "공원",
  "운동장",
  "놀이터",
  "학교생활",
  "사과",
  "바나나",
  "포도",
  "딸기",
  "오렌지",
  "수박",
  "참외",
  "배",
  "복숭아",
  "자두",
];

const shuffleArr = (arr) => {
  const randomWords = [...arr];
  for (let i = randomWords.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [randomWords[i], randomWords[j]] = [randomWords[j], randomWords[i]];
  }
  return randomWords.slice(0, 20);
};

// DOM Elements
const startBtn = document.querySelector("#startBtn");
const resetBtn = document.querySelector("#resetBtn");
const noti = document.querySelector(".noti");
const notiSpan = document.querySelector(".noti span");
const section = document.querySelector("section");
const input = document.querySelector("#input");

const wordCards = {
  prev2: document.querySelector(".prev2"),
  prev1: document.querySelector(".prev1"),
  mission: document.querySelector(".mission"),
  next1: document.querySelector(".next1"),
  next2: document.querySelector(".next2"),
};

const infoLives = document.querySelector(".info_lives");
const infoScore = document.querySelector(".info_score");

let wordsToType = [];
let currentIndex = 0;
let lives = 5;
let score = 0;

// START 또는 재도전 버튼 클릭 → 카운트다운
startBtn.addEventListener("click", () => {
  startCountdown();
});

// RESET 버튼 → 새로고침
resetBtn.addEventListener("click", () => {
  location.reload();
});

function startCountdown() {
  let count = 3;
  notiSpan.textContent = count;
  noti.classList.add("countdown");
  noti.style.display = "flex";
  section.style.display = "none";
  startBtn.disabled = true;
  startBtn.style.display = "none"; // 카운트다운 중 숨김

  const countdown = setInterval(() => {
    count--;
    if (count > 0) {
      notiSpan.textContent = count;
    } else if (count === 0) {
      notiSpan.textContent = "START!";
    } else {
      clearInterval(countdown);
      noti.style.display = "none";
      section.style.display = "block";
      input.focus();
      startBtn.disabled = false;
      startBtn.style.display = "inline-block";
      startGame();
    }
  }, 1000);
}

// 게임 시작
function startGame() {
  wordsToType = shuffleArr(wordsArr);
  currentIndex = 0;
  lives = 5;
  score = 0;
  input.value = "";
  updateInfo();

  // prev 초기화
  wordCards.prev1.textContent = "";
  wordCards.prev2.textContent = "";
  wordCards.prev1.style.visibility = "hidden";
  wordCards.prev2.style.visibility = "hidden";
  wordCards.prev1.classList.remove("correct", "wrong");
  wordCards.prev2.classList.remove("correct", "wrong");

  // mission 업데이트
  updateWordCards();

  // 버튼 텍스트 복구
  startBtn.textContent = "재도전";
}

// 단어 카드 업데이트
function updateWordCards() {
  wordCards.mission.textContent = wordsToType[currentIndex] || "";
  wordCards.mission.style.color = "#000";

  wordCards.next1.textContent = wordsToType[currentIndex + 1] || "";
  wordCards.next2.textContent = wordsToType[currentIndex + 2] || "";
  wordCards.next1.style.color = wordCards.next1.textContent ? "#ccc" : "";
  wordCards.next2.style.color = wordCards.next2.textContent ? "#ccc" : "";
}

// prev 카드 갱신 (정답 여부 표시)
function updatePrevCards(missionWord, isCorrect) {
  const prev1 = wordCards.prev1;
  const prev2 = wordCards.prev2;

  if (prev1.textContent === "") {
    prev1.textContent = missionWord;
    prev1.style.visibility = "visible";
    prev1.classList.remove("correct", "wrong");
    prev1.classList.add(isCorrect ? "correct" : "wrong");
  } else {
    // prev2 <- prev1, prev1 <- 새 단어
    prev2.textContent = prev1.textContent;
    prev2.style.visibility = "visible";
    prev2.classList.remove("correct", "wrong");
    prev2.classList.add(
      prev1.classList.contains("correct") ? "correct" : "wrong"
    );

    prev1.textContent = missionWord;
    prev1.classList.remove("correct", "wrong");
    prev1.classList.add(isCorrect ? "correct" : "wrong");
  }
}

// 입력 이벤트
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const currentWord = wordsToType[currentIndex];
    if (!currentWord) return;

    const isCorrect = input.value.trim() === currentWord;

    if (isCorrect) {
      wordCards.mission.classList.add("correct");
      score++;
    } else {
      wordCards.mission.classList.add("wrong");
      lives--;
      shake(wordCards.mission);
    }

    updatePrevCards(currentWord, isCorrect);
    currentIndex++;
    input.value = "";
    updateInfo();

    if (lives <= 0 || currentIndex >= wordsToType.length) {
      gameOver();
    } else {
      updateWordCards();
      wordCards.mission.classList.remove("correct", "wrong");
    }
  }
});

function shake(el) {
  el.style.transition = "transform 0.1s";
  el.style.transform = "translateX(-10px)";
  setTimeout(() => (el.style.transform = "translateX(10px)"), 100);
  setTimeout(() => (el.style.transform = "translateX(0)"), 200);
}

// 점수/라이프 표시 업데이트
function updateInfo() {
  infoLives.textContent = "❤".repeat(lives);
  infoScore.textContent = `${score}점`;
}

// 게임 종료
function gameOver() {
  section.style.display = "none";
  noti.style.display = "flex";
  noti.classList.remove("countdown");
  notiSpan.textContent = `최종 점수: ${score}점`;

  // 재도전 버튼 보이게
  startBtn.style.display = "inline-block";
  startBtn.innerHTML = "재도전";
  startBtn.disabled = false;
}
