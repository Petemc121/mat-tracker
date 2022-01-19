import { getMembersResponse } from "../../DAO/DataAccessObjectTypes";

type filteredMembersInput = {
  initMembers: getMembersResponse[];
  name: string;
};

export type { filteredMembersInput };
