import {
  getMembersInput,
  getMembersResponse,
  addMemberInput,
  deleteMemberInput,
  updateMemberInput,
} from "./MatTrackerDataTypes";

//Data Access Object

async function getMembers({
  name,
}: getMembersInput): Promise<getMembersResponse[]> {
  const initMembers = await fetch("http://localhost:5000/members");
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

async function addMember({ memberInput }: addMemberInput) {
  const body = memberInput;
  console.log("dao " + memberInput);
  fetch("http://localhost:5000/members", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(body),
  });
}

async function deleteMember({ id }: deleteMemberInput) {
  fetch("/members/" + id, {
    method: "DELETE",
    headers: { "Content-type": "application/json" },
  });
}

async function updateMember({ id, update }: updateMemberInput) {
  const body = update;
  await fetch("/members/" + id, {
    method: "PUT",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(body),
  });
}

export { getMembers, addMember, deleteMember, updateMember };
