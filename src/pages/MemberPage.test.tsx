import MemberPage from "./MemberPage";
import { BrowserRouter as Router } from "react-router-dom";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Member page", () => {
  it("should have a form with all required fields", () => {
    const { getByText } = render(
      <Router>
        <MemberPage />
      </Router>
    );
    expect(getByText("Name:")).toBeInTheDocument();
    expect(getByText("Belt:")).toBeInTheDocument();
    expect(getByText("Phone number:")).toBeInTheDocument();
    expect(getByText("Joined at:")).toBeInTheDocument();
    expect(getByText("Paid:")).toBeInTheDocument();
    expect(getByText("Frozen:")).toBeInTheDocument();
  });

  it("should render deleted member notification on member delete", () => {
    const { getByTestId, getByText } = render(
      <Router>
        <MemberPage />
      </Router>
    );
    fireEvent.click(getByTestId("delete"));
    expect(
      getByText("Member deleted, navigate back to home")
    ).toBeInTheDocument();
  });
});
