import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { Accordion } from "./Accordion";

describe("Accordion", () => {
  test("it should render", () => {
    render(<Accordion />);
    const accordion = screen.getByRole("button");
    expect(accordion).toBeInTheDocument();
  });
});
