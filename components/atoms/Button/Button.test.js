import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";

const mockHandler = jest.fn();

describe("Button", () => {
  let component;

  beforeEach(() => {
    component = render(<Button onClick={mockHandler}>Testing</Button>);
  });

  it("renders appropriately", () => {
    expect(component.getByText(/testing/i));
  });

  it("clicking the button calls event handler once", () => {
    const button = component.getByText(/testing/i);
    fireEvent.click(button);
    expect(mockHandler).toHaveBeenCalledTimes(1);
  });
});
