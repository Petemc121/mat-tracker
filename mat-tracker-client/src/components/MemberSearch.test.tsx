import MemberSearch from "./MemberSearch";
import { render, act } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("MemberSearch", () => {
  it("Should contain an input with test id 'search'", async () => {
    const setMemberSearch = jest.fn();
    await act(async () => {
      const { getByTestId } = render(
        <MemberSearch setMemberSearch={setMemberSearch} />
      );
      expect(getByTestId("search")).toBeInTheDocument();
    });
  });
});
