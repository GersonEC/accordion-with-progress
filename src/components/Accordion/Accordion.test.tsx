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

  test("it should have the Show label status as a default when it's closed", () => {
    render(<Accordion title="" />);
    const showStatusElement = screen.getByText(/show/i, { exact: true });
    expect(showStatusElement).toBeInTheDocument();
  });

  /*test("it should have the Hide label status when click on arrow icon", () => {
    render(<Accordion title="" />);
    const showStatusElement = screen.getByText(/show/i, { exact: true });
    expect(showStatusElement).toBeInTheDocument();
  });*/
});
