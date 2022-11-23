import { render, fireEvent } from "@testing-library/react";
import IconButton from "./IconButton";
import theme from "styles/theme";

const mockHandler = jest.fn();

describe("Icon Button", () => {
  let component;

  beforeEach(() => {
    component = render(
      <IconButton
        icon={{
          icon: "search",
          size: "small",
          color: "white",
        }}
        onClick={mockHandler}
        theme={theme}
      >
        Testing
      </IconButton>
    );
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
