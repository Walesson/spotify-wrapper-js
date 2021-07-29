import { fizzBuzz } from "./fizzbuzz";

describe("Fizzbuzz", () => {
  test("should return `fizz` when `fizzBuzz(3)`", () => {
    expect(fizzBuzz(3)).toBe("fizz");
  });

  test("should return `buzz` when `fizzBuzz(5)`", () => {
    expect(fizzBuzz(5)).toBe("buzz");
  });

  test("should return `fizzBuzz` when fizzBuzz(15)", () => {
    expect(fizzBuzz(30)).toBe("fizzBuzz");
  });

  test("should return `22` when fizzBuzz(22)", () => {
    expect(fizzBuzz(22)).toBe(22);
  });
});
