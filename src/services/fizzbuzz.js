export const fizzBuzz = (num) =>
  num % 3 === 0 && num % 5 === 0
    ? "fizzBuzz"
    : num % 3 === 0
    ? "fizz"
    : num % 5 === 0
    ? "buzz"
    : num;
