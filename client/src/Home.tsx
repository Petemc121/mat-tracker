import { Link } from "react-router-dom";
import React from "react";
import "./App.css";
import Members from "./components/Members";
import MemberSearch from "./components/MemberSearch";

export default function Home({ members, setMemberSearch }) {
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
