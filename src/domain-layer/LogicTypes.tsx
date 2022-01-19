import { getMembersResponse } from "../DAO/DataAccessObjectTypes";

type filteredMembersInput = {
  initMembers: getMembersResponse[];
  name: string;
};

type handleCreateMemberSubmitInput = {
  memberInput: {
    member_name: string;
    member_phone: string;
    member_belt: string;
    member_joined_at: string;
    member_paid: string;
    member_frozen: string;
  };
  e: any;
  setMemberAdded: any;
};

type handleChangeInput = {
  event: any;
  setMemberInput: any;
};

export type {
  filteredMembersInput,
  handleCreateMemberSubmitInput,
  handleChangeInput,
};
