class NewMath {
  static add = function (x, y) {
    return x + y;
  };
  static minus = function (x, y) {
    return x - y;
  };
}

const a = new NewMath();
const result1 = a.add(10, 20);
const result2 = a.minus(10, 20);
