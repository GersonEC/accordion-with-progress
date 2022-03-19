import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { Accordion } from "./Accordion";

describe("Accordion", () => {
  test("it should render", () => {
    render(<Accordion title="" />);
    const accordion = screen.getByRole("button");
    expect(accordion).toBeInTheDocument();
  });

  test("It should have a title", () => {
    const titleStub = "Group 1";
    render(<Accordion title={titleStub} />);
    const titleElement = screen.getByText(titleStub, { exact: true });
    expect(titleElement).toBeInTheDocument();
  });
});
