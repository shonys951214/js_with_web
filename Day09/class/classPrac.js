class Car {
  #name;
  #speed;
  constructor(name) {
    this.#name = name;
    this.#speed = 0;
  }
  up(v) {
    this.#speed = this.#speed + v;
  }
  down(v) {
    this.#speed = this.#speed - v < 0 ? 0 : this.#speed - v;
  }
}
const a = new Car("xnTks");

console.log(a);
a.up(100);
a.down(20);
a.down(100);
