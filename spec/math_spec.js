// tell jasmine where to find our code
var math = require('../math');

describe("A program that does basic math", function() {
  it("It can add two numbers together", function() {
    expect(math.add(3,5)).toBe(8);
  });
  it("It can subtract a number from another", function () {
  	expect(math.subtract(5,3)).toBe(2);
  });
   it("It can multiply a number to another", function () {
  	expect(math.multiply(5,3)).toBe(15);
  });
    it("It can divide a number from another", function () {
  	expect(math.divide(9,3)).toBe(3);
  });
});