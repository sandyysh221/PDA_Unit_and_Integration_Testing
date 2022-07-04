import React from "react";
import Calculator from "../containers/Calculator";
import { render, fireEvent } from "@testing-library/react";

describe("Calculator", () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator />);
  });

  it("should change running total on number enter", () => {
    const button4 = container.getByTestId("number4");
    const runningTotal = container.getByTestId("running-total");
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual("4");
  });

  it("should add two numbers together", () => {
    const button1 = container.getByTestId("number1");
    const button2 = container.getByTestId("number2");
    const addButton = container.getByTestId("operator-add");
    const equalButton = container.getByTestId("operator-equals");
    const runningTotal = container.getByTestId("running-total");
    fireEvent.click(button1);
    fireEvent.click(addButton);
    fireEvent.click(button2);
    fireEvent.click(equalButton);
    expect(runningTotal.textContent).toEqual("3");
  });
});
