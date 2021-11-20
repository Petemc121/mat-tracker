import Member from "./Member";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("member", () => {
  const member = {
    member_id: 3,
    member_name: "bobeth",
    member_image: null,
    member_phone: null,
    member_belt: "blue",
    member_joined_at: null,
    member_paid: null,
    member_frozen: null,
  };

  it("should render a button for the member", () => {
    const { getByRole } = render(<Member member={member} />);
    expect(getByRole("button")).toBeInTheDocument();
  });

  it("should render a div with test-id 'belt'", () => {
    const { getByTestId } = render(<Member member={member} />);
    expect(getByTestId("belt")).toBeInTheDocument();
  });
});
