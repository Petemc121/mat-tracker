import { getMembers } from "./MatTrackerData";
import "@testing-library/jest-dom";

describe("MatTrackerData", () => {
  it("getMembers() with no argument should return a list of members greater than 0", async () => {
    const member = "";
    expect((await getMembers({ name: member })).length).toBeGreaterThan(0);
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
