//Write test cases for fizzbuzz

const valueForFizz = 4, valueForBuzz = 6;
var checkForFizzBuzz = function(value){
  if(value % valueForFizz == 0 && value % valueForBuzz == 0){
    return "FizzBuzz";
  }
  if(value % valueForFizz == 0){
    return "Fizz";
  }
  if(value % valueForBuzz == 0){
    return "Buzz";
  }
  return value;
}



module.exports = { checkForFizzBuzz, valueForFizz, valueForBuzz };
