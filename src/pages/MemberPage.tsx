import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  getMembersInput,
  getMembersResponse,
} from "../MatTrackerDAO/MatTrackerDataTypes";
import { getMembers } from "../MatTrackerDAO/MatTrackerData";

interface MemberPageInput {
  getMembersFunction?: ({
    name,
  }: getMembersInput) => Promise<getMembersResponse[]>;
  setMembers?: any;
}

export default function MemberPage({
  setMembers,
  getMembersFunction = getMembers,
}: MemberPageInput) {
  const { id, name, phone, belt, joined, paid, frozen } = useParams();
  const [deleted, setDeleted] = useState(false);

  async function onDelete() {
    try {
      const response = await fetch("/members/" + id, {
        method: "DELETE",
        headers: { "Content-type": "application/json" },
      });

      const response2 = await getMembersFunction({ name: "" });
      setMembers(response2);
      setDeleted(true);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div id="memberPage">
      <div
        id="memberInfoContainer"
        style={{ display: deleted === false ? "flex" : "none" }}
      >
        <div className="memberInfoElement">
          <h3>Name:</h3> {name}
        </div>
        <div className="memberInfoElement">
          <h3>Phone number:</h3> {phone}
        </div>
        <div className="memberInfoElement">
          <h3>Belt:</h3> {belt}
        </div>
        <div className="memberInfoElement">
          <h3>Joined at:</h3> {joined}
        </div>
        <div className="memberInfoElement">
          <h3>Paid:</h3> {paid}
        </div>
        <div className="memberInfoElement">
          <h3>Frozen: </h3> {frozen}
        </div>
        <button data-testid="delete" onClick={onDelete}>
          delete
        </button>
        <Link className="homeLink" to="/">
          Home
        </Link>
      </div>
      <div
        id="memberDeleted"
        style={{ display: deleted === false ? "none" : "flex" }}
      >
        <h2>Member deleted, navigate back to home</h2>
        <Link className="homeLink" to="/">
          Home
        </Link>
      </div>
    </div>
  );
}
