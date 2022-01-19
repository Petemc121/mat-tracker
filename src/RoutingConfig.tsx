import { useState, useEffect } from "react";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getMembers } from "./DAO/DataAccessObject";
import {
  getMembersResponse,
  getMembersInput,
} from "./DAO/DataAccessObjectTypes";
import CreateMemberPage from "./pages/CreateMemberPage";
import MemberPage from "./pages/MemberPage";
import Home from "./pages/Home";

interface routingConfigInput {
  getMembersFunction?: ({
    name,
  }: getMembersInput) => Promise<getMembersResponse[]>;
}

export default function RoutingConfig({
  getMembersFunction = getMembers,
}: routingConfigInput) {
  const [members, setMembers] = useState<getMembersResponse[] | undefined>();
  const [loading, setLoading] = useState(true);
  const [memberSearch, setMemberSearch] = useState("");

  useEffect(() => {
    async function waitForMembers() {
      try {
        const memberArray = await getMembersFunction({
          name: memberSearch,
        });
        console.log(memberArray);
        setMembers(memberArray);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(true);
      }
    }
    waitForMembers();
  }, [getMembersFunction, memberSearch]);

  if (loading) {
    return <div>...loading</div>;
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home members={members} setMemberSearch={setMemberSearch} />}
        />
        <Route
          path="CreateMemberPage"
          element={<CreateMemberPage setMembers={setMembers} />}
        />
        <Route
          path="member/:id/:name/:belt/:phone/:joined/:paid/:frozen"
          element={
            <MemberPage
              setMembers={setMembers}
              getMembersFunction={getMembers}
            />
          }
        />
      </Routes>
    </Router>
  );
}
