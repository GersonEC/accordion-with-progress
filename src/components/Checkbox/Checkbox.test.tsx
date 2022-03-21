import { render, screen } from "@testing-library/react";
import Checkbox from "./Checkbox";
import user from "@testing-library/user-event";
import { Task } from "../../utilities/model";

describe("Checkbox", () => {
  const taskStub: Task = {
    description: "task",
    value: 10,
    checked: false,
  };
  test("given a label as a prop, it should render it", () => {
    render(<Checkbox task={taskStub} onCheckedChange={() => {}} />);

    const label = screen.getByText(taskStub.description);

    expect(label).toBeInTheDocument();
  });

  test("when click it, it should be checked", () => {
    render(<Checkbox task={taskStub} onCheckedChange={() => {}} />);
    const checkbox = screen.getByRole("checkbox");

    user.click(checkbox);

    expect(checkbox).toBeChecked();
  });

  test("when click it twice, it should be unchecked", () => {
    render(<Checkbox task={taskStub} onCheckedChange={() => {}} />);
    const checkbox = screen.getByRole("checkbox");

    user.dblClick(checkbox);

    expect(checkbox).not.toBeChecked();
  });
});
