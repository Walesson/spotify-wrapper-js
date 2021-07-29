import { calc } from "./calc";

describe("Tests Calc", () => {
  describe("Smoke Tests", () => {
    test("Should verify exists", () => {
      expect(typeof calc).toBe("object");
    });

    test("Should verify has sum property", () => {
      expect(calc.hasOwnProperty("sum")).toBeTruthy();
    });

    test("Should verify has sub property", () => {
      expect(calc.hasOwnProperty("sub")).toBeTruthy();
    });

    test("Should verify has mult property", () => {
      expect(calc.hasOwnProperty("mult")).toBeTruthy();
    });

    test("Should verify has div property", () => {
      expect(calc.hasOwnProperty("div")).toBeTruthy();
    });
  });

  test("Should return 4 when `sum(2, 2)`", () => {
    expect(calc.sum(2, 2)).toBe(4);
  });

  test("Should return 6 when `sub(8, 2)`", () => {
    expect(calc.sub(8, 2)).toBe(6);
  });

  test("Should return 16 when `mult(4, 4)`", () => {
    expect(calc.mult(4, 4)).toBe(16);
  });

  test("Should return 4 when `div(8,2)`", () => {
    expect(calc.div(8, 2)).toBe(4);
  });

  test("Should return `Não é possível divisão por 0!` when `div(8,0)`", () => {
    expect(calc.div(8, 0)).toBe("Não é possível divisão por 0!");
  });
});
