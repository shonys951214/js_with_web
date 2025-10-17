// 축구선수 클래스
// 이름, 포지션, 나이, 연봉 + 포지션 바꾸기 함수

// 축구팀 클래스
// 이름, 선수들, 감독 + 선수등록하기/삭제하기 함수

class Team {
  name;
  players;
  manager;
  constructor(name, manager) {
    this.name = name;
    this.manager = manager;
    this.players = [];
  }
  addPlayer(player) {
    this.players.push(player);
  }
  removePlayer(name) {
    this.players = this.players.filter((v) => v.name != name);
  }
}
class Player {
  name;
  age;
  position;
  salary;
  constructor(name, age, position, salary) {
    this.name = name;
    this.age = age;
    this.position = position;
    this.salary = salary;
  }
  changePosition(position) {
    this.position = position;
  }
}
const liverpool = new Team("Liverpool", "Slot");

liverpool.addPlayer(new Player("gerrard", 20, "MF", 20000));
liverpool.addPlayer(new Player("hendo", 21, "FW", 40000));
liverpool.addPlayer(new Player("robertson", 22, "DF", 30000));
liverpool.addPlayer(new Player("alison", 23, "GK", 10000));
console.log(liverpool);
liverpool.removePlayer("hendo");
// const gerrard = new Player("gerrard", 20, "MF", 20000);
// gerrard.changePosition("FW");

// class Student {
//   name;
//   id;
//   major;
//   courses;
//   constructor(id, name, major) {
//     this.id = id;
//     this.name = name;
//     this.major = major;
//     this.courses = [];
//   }
//   register(course) {
//     this.courses.push(course);
//   }
// }
// class Course {
//   name;
//   professor;
//   time;
//   constructor(name, professor, time) {
//     this.name = name;
//     this.professor = professor;
//     this.time = time;
//   }
// }
