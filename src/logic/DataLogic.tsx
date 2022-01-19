import { getMembersResponse } from "../DAO/DataAccessObjectTypes";

type filteredMembersInput = {
  initMembers: getMembersResponse[];
  name: string;
};

const filteredMembers = ({ initMembers, name }: filteredMembersInput) => {
  return initMembers.filter(
    (member) =>
      member.member_name !== null &&
      member.member_name.toUpperCase().includes(name.toUpperCase())
  );
};

export { filteredMembers };
