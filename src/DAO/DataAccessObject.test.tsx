import {
  getMembers,
  addMember,
  deleteMember,
  updateMember,
} from "./DataAccessObject";
import "@testing-library/jest-dom";

describe("DAO", () => {
  it("getMembers() with no argument should return a list of members with appropriate fields", async () => {
    const member = "";

    expect((await getMembers({ name: member })).length).toBeGreaterThan(0);
    expect((await getMembers({ name: member }))[0]).toHaveProperty("member_id");
    expect((await getMembers({ name: member }))[0]).toHaveProperty(
      "member_name"
    );
    expect((await getMembers({ name: member }))[0]).toHaveProperty(
      "member_belt"
    );
    expect((await getMembers({ name: member }))[0]).toHaveProperty(
      "member_paid"
    );
  });

  it("addMember() should successfully add a new member to the database", async () => {
    const memberInput = {
      member_name: "bob",
      member_image: null,
      member_phone: "07734392094",
      member_belt: "purple",
      member_joined_at: "2021-11-18",
      member_paid: null,
      member_frozen: null,
    };

    const initialMembers = await getMembers({ name: "" });

    await addMember({ memberInput: memberInput });

    expect((await getMembers({ name: "" })).length).toEqual(
      initialMembers.length + 1
    );
  });

  it("deleteMember() should successfully delete a member from the database", async () => {
    const initialMembers = await getMembers({ name: "" });

    await deleteMember({ id: initialMembers[0].member_id.toString() });

    expect((await getMembers({ name: "" })).length).toEqual(
      initialMembers.length - 1
    );
  });

  it("updateMember() should successfully update a member in the database", async () => {
    const initialMembers = await getMembers({ name: "" });

    const update = {
      member_name: "bobby",
      member_phone: initialMembers[0].member_phone,
      member_belt: initialMembers[0].member_belt,
      member_joined_at: initialMembers[0].member_joined_at,
      member_paid: initialMembers[0].member_paid,
      member_frozen: initialMembers[0].member_frozen,
    };

    await updateMember({
      id: initialMembers[0].member_id.toString(),
      update: update,
    });

    const newMembers = await getMembers({ name: "" });

    expect(newMembers[0].member_name).toEqual("bobby");
  });
});
