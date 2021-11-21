import { getMembers } from "./MatTrackerData";

describe("MatTrackerData", () => {
  it("getMembers() with no argument should return a list of members", async () => {
    const member = "";
    expect(await getMembers({ name: member })).toEqual([
      {
        member_id: 1,
        member_name: "jameseth",
        member_image: null,
        member_phone: null,
        member_belt: null,
        member_joined_at: null,
        member_paid: null,
        member_frozen: null,
      },
      {
        member_id: 4,
        member_name: "bobeth",
        member_image: null,
        member_phone: null,
        member_belt: null,
        member_joined_at: null,
        member_paid: null,
        member_frozen: null,
      },
      {
        member_id: 3,
        member_name: "bobeth",
        member_image: null,
        member_phone: null,
        member_belt: "blue",
        member_joined_at: null,
        member_paid: null,
        member_frozen: null,
      },
    ]);
  });

  it.each([
    {
      name: "bobeth",
      expected: [
        {
          member_id: 4,
          member_name: "bobeth",
          member_image: null,
          member_phone: null,
          member_belt: null,
          member_joined_at: null,
          member_paid: null,
          member_frozen: null,
        },
        {
          member_id: 3,
          member_name: "bobeth",
          member_image: null,
          member_phone: null,
          member_belt: "blue",
          member_joined_at: null,
          member_paid: null,
          member_frozen: null,
        },
      ],
    },
    {
      name: "b",
      expected: [
        {
          member_id: 4,
          member_name: "bobeth",
          member_image: null,
          member_phone: null,
          member_belt: null,
          member_joined_at: null,
          member_paid: null,
          member_frozen: null,
        },
        {
          member_id: 3,
          member_name: "bobeth",
          member_image: null,
          member_phone: null,
          member_belt: "blue",
          member_joined_at: null,
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
