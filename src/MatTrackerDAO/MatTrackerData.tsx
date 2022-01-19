import {
  getMembersInput,
  getMembersResponse,
  addMemberInput,
  deleteMemberInput,
  updateMemberInput,
} from "./MatTrackerDataTypes";

import { filteredMembers } from "../MatTrackerLogic/DataLogic";

//Data Access Object

//proxy is only used in developement so it will be ignored in production builds
//so if there is no localhost then by default it will use heroku
//remember this heroku app is just our server serving the build static content and also holding the restful api

async function getMembers({
  name,
  filterFunction = filteredMembers,
}: getMembersInput): Promise<getMembersResponse[]> {
  const initMembers = await fetch("/members");
  const initMembersJSON = (await initMembers.json()) as getMembersResponse[];

  if (name === "") {
    return initMembersJSON;
  }
  return filterFunction({ initMembers: initMembersJSON, name: name });
}

async function addMember({ memberInput }: addMemberInput) {
  const body = memberInput;
  console.log("dao " + memberInput);
  fetch("/members", {
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
