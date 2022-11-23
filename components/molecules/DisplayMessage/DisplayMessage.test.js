import { render, screen } from "@testing-library/react";
import DisplayMessage from "./DisplayMessage";

const dataDummie = {
  error: "",
  spacing: 2,
  messageDefault: "Ingresa los datos",
};

describe("DisplayMessage", () => {
  it("renders appropriately if isActive=true", () => {
    render(<DisplayMessage isActive={true} {...dataDummie} />);
    expect(screen.getByText(dataDummie.messageDefault)).toBeInTheDocument();
  });

  it("renders appropriately if isActive=false", () => {
    render(<DisplayMessage isActive={false} {...dataDummie} />);
    expect(screen.queryByText(dataDummie.messageDefault)).toBeNull();
  });

  it("renders appropriately if isActive=true and error with data", () => {
    render(
      <DisplayMessage
        isActive={true}
        {...dataDummie}
        error="Error de la aplicación"
      />
    );
    expect(screen.getByText("Error de la aplicación")).toBeInTheDocument();
  });
});
