import { render, screen } from "@testing-library/react";
import Box from "./Box";

describe("Box", () => {
  it("renders appropriately", () => {
    render(<Box>Testing</Box>);
    expect(screen.getByText(/testing/i)).toBeInTheDocument();
  });
});
