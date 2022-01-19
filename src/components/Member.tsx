import { useState, useEffect } from "react";
import { getMembersResponse } from "../DAO/DataAccessObjectTypes";

interface memberInput {
  member: getMembersResponse;
}

const Member = ({ member }: memberInput) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);

    if (loaded) {
      console.log("true");
    }
  }, [setLoaded, loaded]);

  return (
    <button style={{ opacity: loaded ? "1" : "0" }} className="memberButton">
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
