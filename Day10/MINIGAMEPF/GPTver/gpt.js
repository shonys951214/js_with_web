let currentIndex = 0;
let lives = 5;
let score = 0;
let wordsToType = [];

const wordCards = {
  prev2: document.querySelector(".prev2"),
  prev1: document.querySelector(".prev1"),
  mission: document.querySelector(".mission"),
  next1: document.querySelector(".next1"),
  next2: document.querySelector(".next2"),
};

const infoLives = document.querySelector(".info_lives");
const infoScore = document.querySelector(".info_score");
const input = document.querySelector("#input");

function startGame() {
  wordsToType = shuffleArr(wordsArr); // 새 20개 단어 생성
  currentIndex = 0;
  lives = 5;
  score = 0;
  updateInfo();
  input.value = "";

  // mission 박스 안에 span 생성
  if (!wordCards.mission.querySelector("span")) {
    const span = document.createElement("span");
    wordCards.mission.innerHTML = "";
    wordCards.mission.appendChild(span);
  }

  // 초기 prev 박스 숨김
  wordCards.prev1.style.visibility = "hidden";
  wordCards.prev2.style.visibility = "hidden";

  // 초기 mission/next 색상
  wordCards.mission.style.color = "#000";
  wordCards.next1.style.color = "#ccc";
  wordCards.next2.style.color = "#ccc";

  // 초기 단어 세팅
  updateWordCards(true);
}

function updateWordCards(isInitial = false) {
  const getWord = (idx) => (wordsToType[idx] ? wordsToType[idx] : "");

  // mission span에 단어 넣기
  wordCards.mission.querySelector("span").textContent = getWord(currentIndex);

  wordCards.prev2.textContent = getWord(currentIndex - 2);
  wordCards.prev1.textContent = getWord(currentIndex - 1);
  wordCards.next1.textContent = getWord(currentIndex + 1);
  wordCards.next2.textContent = getWord(currentIndex + 2);

  // prev 박스 숨김 처리
  wordCards.prev1.style.visibility =
    currentIndex - 1 >= 0 ? "visible" : "hidden";
  wordCards.prev2.style.visibility =
    currentIndex - 2 >= 0 ? "visible" : "hidden";

  // mission/next 색상 초기화
  Object.values(wordCards).forEach((el) => {
    el.classList.remove("correct", "wrong");
    if (el !== wordCards.mission && el.textContent) el.style.color = "#ccc";
    else if (el === wordCards.mission) el.style.color = "#000";
  });

  // 이전 단어 정답/오답 유지
  if (currentIndex > 0) {
    const prevCard = getPreviousCard(currentIndex - 1);
    if (prevCard && prevCard.dataset.correct === "true")
      prevCard.classList.add("correct");
    else if (prevCard && prevCard.dataset.correct === "false")
      prevCard.classList.add("wrong");
  }

  // 초기 렌더링이 아니면 슬라이드 애니메이션 적용
  if (!isInitial) {
    Object.values(wordCards).forEach((el) => {
      el.style.transition = "transform 0.3s ease";
      el.style.transform = "translateX(-220px)"; // 박스 너비만큼 이동
    });
    // 잠시 후 위치 초기화
    setTimeout(() => {
      Object.values(wordCards).forEach(
        (el) => (el.style.transform = "translateX(0)")
      );
    }, 300);
  }
}

// 입력 이벤트
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const currentWord = wordsToType[currentIndex];

    if (input.value.trim() === currentWord) {
      wordCards.mission.classList.add("correct");
      wordCards.mission.dataset.correct = "true";
      score++;
    } else {
      wordCards.mission.classList.add("wrong");
      wordCards.mission.dataset.correct = "false";
      shake(wordCards.mission);
      lives--;
    }

    updateInfo();
    currentIndex++;
    input.value = "";

    if (lives <= 0 || currentIndex >= wordsToType.length) {
      gameOver();
    } else {
      updateWordCards(); // 다음 mission 표시 + 슬라이드
    }
  }
});

function shake(el) {
  el.style.transition = "transform 0.1s";
  el.style.transform = "translateX(-10px)";
  setTimeout(() => (el.style.transform = "translateX(10px)"), 100);
  setTimeout(() => (el.style.transform = "translateX(0)"), 200);
}

function getPreviousCard(idx) {
  const offset = currentIndex - idx;
  if (offset === 1) return wordCards.prev1;
  if (offset === 2) return wordCards.prev2;
  return null;
}

function updateInfo() {
  infoLives.textContent = "❤".repeat(lives);
  infoScore.textContent = `${score}점`;
}

function gameOver() {
  alert(`게임 종료! 최종 점수: ${score}점`);
  input.value = "";
  Object.values(wordCards).forEach((el) => {
    el.textContent = "";
    el.classList.remove("correct", "wrong");
  });
  currentIndex = 0;
}
