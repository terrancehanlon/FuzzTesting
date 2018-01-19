var test = require("./index.js");

describe("Test Cases for FizzBuzz", () => {
  it("Should print Fizz for Mod 3 == 0", () => {
    var returnedValue = test.checkForFizzBuzz(test.valueForFizz);
    expect(returnedValue).toEqual("Fizz");
  });
  it("Should print Buzz for Mod 5 == 0", () => {
    var returnedValue = test.checkForFizzBuzz(test.valueForBuzz);
    expect(returnedValue).toEqual("Buzz");
  });
  it("Should print FizzBuzz for Mod 3 == 0 and Mod 5 == 0", () => {
    var returnedValue = test.checkForFizzBuzz(test.valueForFizz * test.valueForBuzz);
    expect(returnedValue).toEqual("FizzBuzz");
  });
  it("Should print -1 for when given the value of -1", () => {
      var returnedValue = test.checkForFizzBuzz(-1);
      expect(returnedValue).toEqual(-1);
    });
});
