import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { Accordion } from "./Accordion";

describe("Accordion", () => {
  test("It should have a title", () => {
    const titleStub = "Group 1";
    render(<Accordion title={titleStub} items={<></>} />);
    const titleElement = screen.getByText(titleStub, { exact: true });
    expect(titleElement).toBeInTheDocument();
  });

  test("it should have the Show label status as a default when it's closed", () => {
    render(<Accordion title="" items={<></>} />);
    const labelStatusElement = screen.getByText(/show/i, { exact: true });
    expect(labelStatusElement).toBeInTheDocument();
  });

  test("it should have the Hide label status when click on arrow icon", () => {
    render(<Accordion title="" items={<></>} />);
    const iconElement = screen.getByText("⌄", { exact: true });
    let labelStatusElement = screen.getByText(/show/i, { exact: true });

    expect(labelStatusElement).toBeInTheDocument();

    user.click(iconElement);

    labelStatusElement = screen.getByText(/hide/i, { exact: true });
    expect(labelStatusElement).toBeInTheDocument();
  });

  test("it should show a fieldset when icon is clicked", () => {
    render(<Accordion title="" items={<></>} />);
    const accordion = screen.getByRole("button");
    user.click(accordion);
    const fieldsetElement = screen.getByRole("listitem");
    expect(fieldsetElement).toBeInTheDocument();
  });

  test("it should hide a fieldset when icon is double clicked", () => {
    render(<Accordion title="" items={<></>} />);
    const accordion = screen.getByRole("button");

    user.click(accordion);

    const fieldsetElement = screen.getByRole("listitem");
    expect(fieldsetElement).toBeInTheDocument();

    user.click(accordion);

    expect(fieldsetElement).not.toBeInTheDocument();
  });
});
