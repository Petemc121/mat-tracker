import App from "./App";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("mat-tracker-client", () => {
  it("should render a header with the words 'Mat Tracker'", async () => {
    const { findByText } = render(<App />);
    expect(await findByText("Mat Tracker")).toBeInTheDocument();
  });

  it("should contain a button with text 'add member'", async () => {
    const { findByText } = render(<App />);
    expect(await findByText("Add member")).toBeInTheDocument();
  });
});
