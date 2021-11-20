import RoutingConfig from "./RoutingConfig";
import { render, waitFor, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Routing config", () => {
  it("should call get members with target value of input", async () => {
    const getMembers = jest.fn();
    const { getByTestId } = render(
      <RoutingConfig getMembersFunction={getMembers} />
    );

    await waitFor(() => {
      const input = getByTestId("search");
      fireEvent.change(input, { target: { value: "j" } });
      expect(getMembers).toHaveBeenCalledWith({ name: "j" });
    });
  });

  it("should render a list of members upon retrieving data", async () => {
    const getMembers = jest.fn(async () => {
      return [
        {
          member_id: 57,
          member_name: "bob",
          member_image: null,
          member_phone: null,
          member_belt: "white",
          member_joined_at: null,
          member_paid: null,
          member_frozen: null,
        },
        {
          member_id: 58,
          member_name: "james",
          member_image: null,
          member_phone: null,
          member_belt: "white",
          member_joined_at: null,
          member_paid: null,
          member_frozen: null,
        },
      ];
    });
    await act(async () => {
      const { findByText } = render(
        <RoutingConfig getMembersFunction={getMembers} />
      );
      expect(await findByText("bob")).toBeInTheDocument();
      expect(await findByText("james")).toBeInTheDocument();
    });
  });
});
