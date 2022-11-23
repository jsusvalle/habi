import { render, screen } from "@testing-library/react";
import Icon from "./Icon";

describe("Icon", () => {
  it("renders appropriately", () => {
    render(<Icon />);
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });
});
