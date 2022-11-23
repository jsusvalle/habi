import { render, fireEvent } from "@testing-library/react";
import CardList from "./CardList";

const mockHandler = jest.fn();

const dataDummie = {
  title: "Fedex",
  price: "230.0 MX",
  days: 1,
  textButton: "Generar guía",
};

describe("CardList", () => {
  let component;
  beforeEach(() => {
    component = render(
      <CardList {...dataDummie} onClick={mockHandler}>
        Testing
      </CardList>
    );
  });

  it("renders appropriately", () => {
    expect(component.getByText(dataDummie.title));
  });

  it("click button card", () => {
    const button = component.getByText(dataDummie.textButton);
    fireEvent.click(button);
    expect(mockHandler).toHaveBeenCalledTimes(1);
  });
});
