import { Link } from "react-router-dom";
import { getMembersResponse } from "../MatTrackerDAO/MatTrackerDataTypes";
import "../styles/app.css";
import Members from "../components/Members";
import MemberSearch from "../components/MemberSearch";

interface homeInput {
  members: getMembersResponse[] | undefined;
  setMemberSearch: any;
}

export default function Home({ members, setMemberSearch }: homeInput) {
  return (
    <>
      <div data-testid="header">Mat Tracker</div>
      <div id="elementContainer">
        <Link id="addMemberLink" to="CreateMemberPage">
          <button id="addMember">Add member</button>
        </Link>
        <MemberSearch setMemberSearch={setMemberSearch} />
        <Members members={members} />
      </div>
    </>
  );
}
