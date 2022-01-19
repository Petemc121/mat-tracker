import { getMembersResponse } from "../MatTrackerDAO/MatTrackerDataTypes";

type filteredMembersInput = {
  initMembers: getMembersResponse[];
  name: string;
};

export type { filteredMembersInput };
