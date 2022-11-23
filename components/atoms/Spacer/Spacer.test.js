import { render, screen } from "@testing-library/react";
import Spacer from "./Spacer";

describe("Spacer", () => {
  it("renders appropriately in horizontal", () => {
    render(<Spacer type="horizontal" />);
    expect(screen.getByTestId("horizontal")).toBeInTheDocument();
  });

  it("renders appropriately in vertical", () => {
    render(<Spacer type="vertical" />);
    expect(screen.getByTestId("vertical")).toBeInTheDocument();
  });
});
