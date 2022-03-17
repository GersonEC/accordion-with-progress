import { render, screen } from "@testing-library/react";
import Checkbox from "./Checkbox";
import user from "@testing-library/user-event";

describe("Checkbox", () => {
  test("given a label as a prop, it should render it", () => {
    const labelStub = "Task 2-1";
    render(<Checkbox label={labelStub} />);

    const label = screen.getByText(labelStub);

    expect(label).toBeInTheDocument();
  });

  test("when click it, it should be checked", () => {
    const labelStub = "Task 2-1";
    render(<Checkbox label={labelStub} />);
    const checkbox = screen.getByRole("checkbox");

    user.click(checkbox);

    expect(checkbox).toBeChecked();
  });

  test("when click it twice, it should be unchecked", () => {
    const labelStub = "Task 2-1";
    render(<Checkbox label={labelStub} />);
    const checkbox = screen.getByRole("checkbox");

    user.dblClick(checkbox);

    expect(checkbox).not.toBeChecked();
  });
});
