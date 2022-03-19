import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { Accordion } from "./Accordion";

describe("Accordion", () => {
  test("It should have a title", () => {
    const titleStub = "Group 1";
    render(<Accordion title={titleStub} />);
    const titleElement = screen.getByText(titleStub, { exact: true });
    expect(titleElement).toBeInTheDocument();
  });

  test("it should have the Show label status as a default when it's closed", () => {
    render(<Accordion title="" />);
    const labelStatusElement = screen.getByText(/show/i, { exact: true });
    expect(labelStatusElement).toBeInTheDocument();
  });

  test("it should have the Hide label status when click on arrow icon", () => {
    render(<Accordion title="" />);
    const iconElement = screen.getByRole("button", { name: "⌄" });
    let labelStatusElement = screen.getByText(/show/i, { exact: true });

    expect(labelStatusElement).toBeInTheDocument();

    user.click(iconElement);

    labelStatusElement = screen.getByText(/hide/i, { exact: true });
    expect(labelStatusElement).toBeInTheDocument();
  });
});
