// Unit 클래스 작성하기
// 필드 : name, emoji, hp
// 메소드 :
// -attack 함수 : {emoji} {name} 이(가) 공격했다 출력하기
// -status 함수 : 남은 hp 출력하기

// Hero 클래스 [unit을 상속]
// 필드 : skills
// 메소드 :
// -activate 함수 : skill 이 발동했다

// Monster 클래스 작성하기 [unit 상속]
// 필드 : level
// 메소드 :
//

class Unit {
  #name;
  #emoji;
  #hp;
  constructor(name, emoji, hp) {
    this.#name = name;
    this.#emoji = emoji;
    this.#hp = hp;
  }
  attack() {
    console.log(`${this.emoji}${this.name}이(가) 공격했다!`);
  }
  status() {
    console.log(`남은 hp${this.hp}`);
  }
}

class Hero extends Unit {
  #skills;
  constructor(name, emoji, hp, skills) {
    super(name, emoji, hp);
    this.#skills = skills;
  }
  activate() {
    console.log(`${this.skiils}이(가) 발동했다!`);
  }
}

// }
//     this.#courses = [];
//   }
//   register(course) {
//     this.#courses.push(course);
//   }
// }

//   removePlayer(name) {
//     this.players = this.players.filter((v) => v.name != name);
//   }
