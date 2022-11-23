import { render, screen } from "@testing-library/react";
import Grid from "./Grid";

describe("Grid", () => {
  it("renders appropriately", () => {
    render(<Grid>Testing</Grid>);
    expect(screen.getByText(/testing/i)).toBeInTheDocument();
  });
});
