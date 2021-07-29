const { action } = require("./app");

const mockGeneral = jest.fn();

beforeEach(() => {
  mockGeneral.mockClear();
});

describe("Tests samples", () => {
  test("action imported", () => {
    const resp = action(10);
    expect(resp).toBe(20);
  });

  test("action mocked", () => {
    const mock = jest.fn((param) => action(param));
    const resp = mock(20);
    expect(resp).toBe(40);
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledWith(20);
  });

  test("Mocked implemtation", () => {
    mockGeneral.mockImplementationOnce(() => 40);
    expect(mockGeneral()).toBe(40);
  });
});
