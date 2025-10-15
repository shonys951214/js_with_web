// html ID 변수선언
const id = document.querySelector("#id");
const idSpanT = document.querySelector("#idSpanT");
const idSpanL = document.querySelector("#idSpanL");

const pw = document.querySelector("#pw");
const pwSpanT = document.querySelector("#pwSpanT");
const pwSpanL = document.querySelector("#pwSpanL");
const pwSpanM = document.querySelector("#pwSpanM");

const email = document.querySelector("#email");
const emailAdress = document.querySelector("#emailAdress");

// 인풋내용 조건
const idCheckText = /^[A-Za-z0-9]+$/;
const idCheckLength = /^.{6,20}$/;

const pwCheckText = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])$/;
const pwCheckLength = /^.{8,20}$/;
const pwCheckMark = /[!@#$%^&*]/;

const emailCheck = /\S+@\S+\.\S+/;

// id Check
id.addEventListener("input", () => {
  const idValue = id.value;

  if (idCheckText.test(idValue)) {
    idSpanT.style.color = "green";
  } else {
    idSpanT.style.color = "red";
  }

  if (idCheckLength.test(idValue)) {
    idSpanL.style.color = "green";
  } else {
    idSpanL.style.color = "red";
  }
});

// pw Check
pw.addEventListener("input", () => {
  const pwValue = pw.value;

  if (pwCheckText.test(pwValue)) {
    pwSpanT.style.color = "green";
  } else {
    pwSpanT.style.color = "red";
  }

  if (pwCheckLength.test(pwValue)) {
    pwSpanL.style.color = "green";
  } else {
    pwSpanL.style.color = "red";
  }

  if (pwCheckMark.test(pwValue)) {
    pwSpanM.style.color = "green";
  } else {
    pwSpanM.style.color = "red";
  }
});

// email Check
email.addEventListener("input", () => {
  const emailValue = email.value;

  if (emailCheck.test(emailValue)) {
    emailAdress.style.color = "green";
  } else {
    emailAdress.style.color = "red";
  }
});
