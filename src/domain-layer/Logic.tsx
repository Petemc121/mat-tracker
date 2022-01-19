import {
  filteredMembersInput,
  handleCreateMemberSubmitInput,
  handleChangeInput,
} from "./LogicTypes";

const filteredMembers = ({ initMembers, name }: filteredMembersInput) => {
  return initMembers.filter(
    (member) =>
      member.member_name !== null &&
      member.member_name.toUpperCase().includes(name.toUpperCase())
  );
};

const handleCreateMemberSubmit = ({
  memberInput,
  e,
  setMemberAdded,
}: handleCreateMemberSubmitInput) => {
  e.preventDefault();

  if (memberInput.member_name === "") {
    alert("please enter your name");
    return;
  }

  if (memberInput.member_phone === "") {
    alert("please enter your phone number");
    return;
  } else {
    if (isNaN(parseInt(memberInput.member_phone))) {
      alert("please only enter numbers in phone field");
      return;
    }

    if (
      memberInput.member_phone.length < 10 ||
      memberInput.member_phone.length > 11
    ) {
      alert("Your phone number is not valid");
      return;
    }
  }
  setMemberAdded(true);
  return true;
};

const handleChangeEvent = ({ event, setMemberInput }: handleChangeInput) => {
  const name = event.target.name;
  const value = event.target.value;
  setMemberInput((values: {}) => ({ ...values, [name]: value }));
};

export { filteredMembers, handleCreateMemberSubmit, handleChangeEvent };
