import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Button } from "./Button";

const mock = jest.fn();

beforeEach(cleanup);

describe("Button tests", () => {
  test("Should simple render", () => {
    const { getByText } = render(<Button label="Test" onClick={mock} />);
    const element = getByText("Test");
    expect(element).toBeInTheDocument();
  });
});
