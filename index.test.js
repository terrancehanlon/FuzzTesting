var test = require("./index.js");

describe("Test Cases for FizzBuzz", () => {
  it("Should print Fizz for Mod 3 == 0", () => {
    var returnedValue = test(3);
    expect(returnedValue).toEqual("Fizz");
  });
  it("Should print Buzz for Mod 5 == 0", () => {
    var returnedValue = test(5);
    expect(returnedValue).toEqual("Buzz");
  });
  it("Should print FizzBuzz for Mod 3 == 0 and Mod 5 == 0", () => {
    var returnedValue = test(15);
    expect(returnedValue).toEqual("FizzBuzz");
  });
  it("Should print -1 for when given the value of -1", () => {
      var returnedValue = test(-1);
      expect(returnedValue).toEqual(-1);
    });
});
