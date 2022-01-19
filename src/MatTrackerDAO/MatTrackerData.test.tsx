import { getMembers } from "./MatTrackerData";
import "@testing-library/jest-dom";

describe("MatTrackerData", () => {
  it("getMembers() with no argument should return a list of members greater than 0", async () => {
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
});
