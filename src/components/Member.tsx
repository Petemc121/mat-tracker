import React from "react";
import { Link, Route } from "react-router-dom";
import { getMembersResponse } from "../MatTrackerDAO/MatTrackerDataTypes";

interface memberInput {
  member: getMembersResponse;
}

const Member = ({ member }: memberInput) => {
  return (
    <button className="memberButton">
      <h3>{member.member_name}</h3>
      <div
        style={{
          backgroundColor:
            member !== undefined
              ? member.member_belt === null || undefined
                ? "white"
                : member.member_belt
              : "white",
        }}
        data-testid="belt"
      ></div>
    </button>
  );
};

export default Member;
