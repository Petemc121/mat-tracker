import { getMembers } from "./MatTrackerData";
import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";

describe("MatTrackerData", () => {
  it("getMembers() with no argument should return a list of members", async () => {
    const member = "";
    expect(await getMembers({ name: member })).toEqual([
      {
        member_id: 14,
        member_name: "james",
        member_image: null,
        member_phone: "fdsvd",
        member_belt: "white",
        member_joined_at: "2021-11-18",
        member_paid: null,
        member_frozen: null,
      },
      {
        member_id: 18,
        member_name: "bob",
        member_image: null,
        member_phone: "07734392094",
        member_belt: "purple",
        member_joined_at: "2021-11-18",
        member_paid: null,
        member_frozen: null,
      },
      {
        member_id: 19,
        member_name: "James",
        member_image: null,
        member_phone: "07734392094",
        member_belt: "brown",
        member_joined_at: "2021-11-18",
        member_paid: null,
        member_frozen: null,
      },
      {
        member_id: 21,
        member_name: "bob",
        member_image: null,
        member_phone: "1234567890",
        member_belt: "white",
        member_joined_at: "2021-11-19",
        member_paid: null,
        member_frozen: null,
      },
    ]);
  });

  it.each([
    {
      name: "bob",
      expected: [
        {
          member_id: 18,
          member_name: "bob",
          member_image: null,
          member_phone: "07734392094",
          member_belt: "purple",
          member_joined_at: "2021-11-18",
          member_paid: null,
          member_frozen: null,
        },
        {
          member_id: 21,
          member_name: "bob",
          member_image: null,
          member_phone: "1234567890",
          member_belt: "white",
          member_joined_at: "2021-11-19",
          member_paid: null,
          member_frozen: null,
        },
      ],
    },
    {
      name: "b",
      expected: [
        {
          member_id: 18,
          member_name: "bob",
          member_image: null,
          member_phone: "07734392094",
          member_belt: "purple",
          member_joined_at: "2021-11-18",
          member_paid: null,
          member_frozen: null,
        },
        {
          member_id: 21,
          member_name: "bob",
          member_image: null,
          member_phone: "1234567890",
          member_belt: "white",
          member_joined_at: "2021-11-19",
          member_paid: null,
          member_frozen: null,
        },
      ],
    },
  ])(
    "should return a list of members related to search field",
    async ({ name, expected }) => {
      expect(await getMembers({ name })).toEqual(expected);
    }
  );
});
