import { Link } from "react-router-dom";
import { getMembersResponse } from "../DAO/DataAccessObjectTypes";
import "../styles/app.css";
import Members from "../components/Members";
import MemberSearch from "../components/MemberSearch";
import Header from "../components/Header";

interface homeInput {
  members: getMembersResponse[] | undefined;
  setMemberSearch: any;
}

export default function Home({ members, setMemberSearch }: homeInput) {
  return (
    <>
      <Header />
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
