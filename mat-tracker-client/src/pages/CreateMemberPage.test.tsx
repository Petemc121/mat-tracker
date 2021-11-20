import CreateMemberPage from "./CreateMemberPage";
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";

describe("create member page", () => {
  it("should have a form with all required fields", () => {
    const { getByText, getAllByRole, getByRole } = render(
      <Router>
        <CreateMemberPage />
      </Router>
    );
    expect(getByText("Name:")).toBeInTheDocument();
    expect(getByText("Belt:")).toBeInTheDocument();
    expect(getByText("Phone number:")).toBeInTheDocument();
    expect(getByText("Joined:")).toBeInTheDocument();
    expect(getAllByRole("textbox").length).toEqual(2);
    expect(getByRole("combobox")).toBeInTheDocument();
  });

  it("should call handle change function on change of inputs", () => {
    const handleChange = jest.fn();
    const { getByTestId } = render(
      <Router>
        <CreateMemberPage handleChange={handleChange} />
      </Router>
    );
    const name = getByTestId("name");
    const phone = getByTestId("phone");
    const belt = getByTestId("beltInput");
    const joined = getByTestId("joined");

    fireEvent.change(name, { target: { value: "hello" } });
    fireEvent.change(phone, { target: { value: "hello" } });
    fireEvent.change(belt, { target: { value: "blue" } });
    fireEvent.change(joined, { target: { value: "" } });

    expect(handleChange).toHaveBeenCalledTimes(4);
  });

  it("should call handle submit function on submit", () => {
    const handleSubmit = jest.fn();
    const { getByTestId } = render(
      <Router>
        <CreateMemberPage handleSubmit={handleSubmit} />
      </Router>
    );
    const submit = getByTestId("submit");

    fireEvent.click(submit);

    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
