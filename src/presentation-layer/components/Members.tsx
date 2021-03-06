import { getMembersResponse } from "../../DAO/DataAccessObjectTypes";
import Member from "./Member";
import { Link } from "react-router-dom";

interface membersInput {
  members: getMembersResponse[] | undefined;
}

export default function Members(members: membersInput) {
  return (
    <div id="membersContain">
      {members.members !== undefined &&
        members.members.map((member) => {
          return (
            <Link
              className="memberLink"
              key={member.member_id + "_link"}
              to={
                "member/" +
                member.member_id +
                "/" +
                member.member_name +
                "/" +
                member.member_belt +
                "/" +
                member.member_phone +
                "/" +
                member.member_joined_at +
                "/" +
                member.member_paid +
                "/" +
                member.member_frozen
              }
            >
              <Member key={member.member_id} member={member} />
            </Link>
          );
        })}
    </div>
  );
}
