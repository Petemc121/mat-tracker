import { filteredMembersInput } from "../logic/LogicTypes";

type getMembersResponse = {
  member_id: number;
  member_name: string | null;
  member_image: string | null;
  member_phone: string | null;
  member_belt: string | null;
  member_joined_at: string | null;
  member_paid: string | null;
  member_frozen: string | null;
};

type getMembersInput = {
  name: string;
  filterFunction?: ({
    initMembers,
    name,
  }: filteredMembersInput) => getMembersResponse[];
};

type addMemberInput = {
  memberInput: {
    member_name: string;
    member_phone: string;
    member_belt: string;
    member_joined_at: string;
    member_paid: string;
    member_frozen: string;
  };
};

type deleteMemberInput = {
  id?: string;
};

type updateMemberInput = {
  id?: string;
  update: {
    member_name: string;
    member_phone: string;
    member_belt: string;
    member_joined_at: string;
    member_paid: string;
    member_frozen: string;
  };
};

export type {
  getMembersResponse,
  getMembersInput,
  addMemberInput,
  deleteMemberInput,
  updateMemberInput,
};
