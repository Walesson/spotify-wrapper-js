import React from "react";
import { render } from "@testing-library/react";
import App from "./index";

describe("App tests", () => {
  test("Should simple render", () => {
    const { getByText } = render(<App />);
    const element = getByText("App Web");
    expect(element).toBeInTheDocument();
  });
});
