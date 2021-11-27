import { getMembersInput, getMembersResponse } from "./MatTrackerDataTypes";

async function getMembers({
  name,
}: getMembersInput): Promise<getMembersResponse[]> {
  const initMembers = await fetch("/members");
  const initMembersJSON = (await initMembers.json()) as getMembersResponse[];

  if (name === "") {
    return initMembersJSON;
  }
  const members = initMembersJSON.filter(
    (member) =>
      member.member_name !== null &&
      member.member_name.toUpperCase().includes(name.toUpperCase())
  );
  return members;
}

export { getMembers };
