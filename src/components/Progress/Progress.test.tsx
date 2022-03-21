import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { Progress } from "./Progress";

describe("Progress", () => {
  test("given a value number, it should render it", () => {
    const valueStub = 50;
    render(<Progress value={valueStub} />);
    const valueElement = screen.getByText(valueStub + "%");

    expect(valueElement).toBeInTheDocument();
  });
});
