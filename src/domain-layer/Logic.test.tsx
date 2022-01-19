import { filteredMembers } from "./Logic";
import "@testing-library/jest-dom";

describe("filtered Members", () => {
  it.each([
    {
      initMembers: [
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
        {
          member_id: 21,
          member_name: "james",
          member_image: null,
          member_phone: "1234567890",
          member_belt: "white",
          member_joined_at: "2021-11-19",
          member_paid: null,
          member_frozen: null,
        },
      ],
      name: "b",
    },
  ])(
    "should filter members based on member inputs",
    ({ initMembers, name }) => {
      expect(filteredMembers({ initMembers: initMembers, name: name })).toEqual(
        [
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
        ]
      );
    }
  );
});
