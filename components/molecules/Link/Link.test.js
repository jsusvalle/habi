import { render, screen } from "@testing-library/react";
import Link from "./Link";

describe("Link", () => {
  it("renders appropriately", () => {
    render(<Link>Testing</Link>);
    expect(screen.getByText(/testing/i)).toBeInTheDocument();
  });
});
