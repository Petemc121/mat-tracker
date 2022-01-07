import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMembersResponse } from "./MatTrackerDAO/MatTrackerDataTypes";
import "./styles/app.css";
import Members from "./components/Members";
import MemberSearch from "./components/MemberSearch";

interface homeInput {
  members: getMembersResponse[] | undefined;
  setMemberSearch: any;
}

export default function Home({ members, setMemberSearch }: homeInput) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, [setLoaded]);

  return (
    <>
      <div data-testid="header">Mat Tracker</div>
      <div id="elementContainer">
        <Link id="addMemberLink" to="CreateMemberPage">
          <button id="addMember">Add Member</button>
        </Link>
        <MemberSearch setMemberSearch={setMemberSearch} />
        <Members members={members} />
      </div>
    </>
  );
}
