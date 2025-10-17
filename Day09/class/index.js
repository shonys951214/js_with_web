const a1 = {
  name: "아메리카노",
  price: 4800,
  shots: 2,
  size: "tall",
  discount: function (balance) {
    this.price = this.price * balance;
  },
};

const a2 = {
  name: "아메리카노",
  price: 5300,
  shots: 3,
  size: "grande",
  discount: function (balance) {
    this.price = this.price * balance;
  },
};

const a3 = {
  name: "아이스라떼",
  price: 6600,
  shots: 4,
  size: "grande",
  discount: function (balance) {
    this.price = this.price * balance;
  },
};

// 클래스는 오브젝트를 만들어주는 문법 with 함수까지 포함
// class : 변수 & 함수 (초기화 / 일반)
class Coffee {
  name;
  price;
  shots;
  constructor(a, b, c) {
    this.name = a;
    this.price = b;
    this.shots = c;
  }
}
const a = new Coffee("asdf", 3000, 2);

// const makeCoffee = (name, price, shots, size, balance) => {
// const newPrice = price
// const discount = (balance) => {

// }
//     return { name, price, shots, size, discount:}
// }

// class 예제 만들기
// 축구팀 클래스 만들기
// 팀명, 팀 인원수, 팀 감독, 팀 창설연도

class Team {
  name;
  mem;
  headcoach;
  year;
  constructor(a, b, c, d) {
    this.name = a;
    this.mem = [];
    this.headcoach = c;
    this.year = d;
  }
  registerMember(name, number) {
    this.mem.push({ name, number });
  }
}

const fcA = new Team("리버풀", "슬롯", 1900);
fcA.registerMember("제라드", 8);
const fcB = new Team("맨유", 23, "아모림", 1901);
const fcC = new Team("첼시", 21, "마레스카", 1931);
const fcD = new Team("바르샤", 22, "한지플릭", 1921);
const fcE = new Team("레알", 24, "알론소", 1920);
const fcF = new Team("토트넘", 23, "프랭크", 1910);

console.log(fcA);
console.log(fcB);
console.log(fcC);
console.log(fcD);
console.log(fcE);
console.log(fcF);
