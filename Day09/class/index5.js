class Student {
  #id;
  #name;

  constructor(id, name) {
    this.#id = id;
    this.#name = name;
  }
}

class Colleger extends Student {
  #major;
  #courses;
  constructor(id, name, major) {
    super(id, name);
    this.#major = major;
    this.#courses = [];
  }
  register(course) {
    this.#courses.push(course);
  }
}
class HighSchoolStudent extends Student {
  #grade;
  #classroom;
  constructor(id, name, grade, classroom) {
    super(id, name);
    this.#grade = grade;
    this.#classroom = classroom;
  }
}
// class HighSchoolStudent {
//   #id;
//   #name;
//   #grade;
//   #classroom;

//   constructor(id, name, grade) {
//     this.#id = id;
//     this.#name = name;
//     this.#grade = grade;
//     this.#classroom = classroom;
//   }
// }

// class Student {
//   #id;
//   #name;
//   #major;
//   #courses;
//   constructor(id, name, major) {
//     this.#id = id;
//     this.#name = name;
//     this.#major = major;
//     this.#courses = [];
//   }
//   register(course) {
//     this.#courses.push(course);
//   }
// }
