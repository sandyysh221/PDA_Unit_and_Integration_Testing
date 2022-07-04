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

  it("should add 1 to 4 and get 5", () => {
    const button1 = container.getByTestId("number1");
    const button4 = container.getByTestId("number4");
    const addButton = container.getByTestId("operator-add");
    const equalButton = container.getByTestId("operator-equals");
    const runningTotal = container.getByTestId("running-total");
    fireEvent.click(button1);
    fireEvent.click(addButton);
    fireEvent.click(button4);
    fireEvent.click(equalButton);
    expect(runningTotal.textContent).toEqual("5");
  });

  it("should subtract 4 from 7 and get 3", () => {
    const button4 = container.getByTestId("number4");
    const button7 = container.getByTestId("number7");
    const subtractButton = container.getByTestId("operator-subtract");
    const equalButton = container.getByTestId("operator-equals");
    const runningTotal = container.getByTestId("running-total");
    fireEvent.click(button7);
    fireEvent.click(subtractButton);
    fireEvent.click(button4);
    fireEvent.click(equalButton);
    expect(runningTotal.textContent).toEqual("3");
  });
});
