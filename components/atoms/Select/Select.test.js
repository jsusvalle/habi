import { render } from "@testing-library/react";
import Select from "./Select";

describe("Select", () => {
  it("renders appropriately", () => {
    const component = render(<Select name="testing" label="testing" />);
    expect(component.getByText(/testing/i));
  });
});
