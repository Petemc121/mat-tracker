import MemberPage from "./MemberPage";
import { BrowserRouter as Router } from "react-router-dom";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Member page", () => {
  it("should have a form with all required fields", () => {
    const { getAllByText } = render(
      <Router>
        <MemberPage />
      </Router>
    );
    expect(getAllByText("Name:").length).toEqual(2);
    expect(getAllByText("Belt:").length).toEqual(2);
    expect(getAllByText("Phone number:").length).toEqual(2);
    expect(getAllByText("Joined at:").length).toEqual(2);
    expect(getAllByText("Paid:").length).toEqual(2);
    expect(getAllByText("Frozen:").length).toEqual(2);
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
