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
  const [editing, setEditing] = useState(false);
  const [update, setUpdate] = useState({
    member_name: name,
    member_phone: phone,
    member_belt: belt,
    member_joined_at: joined,
    member_paid: paid,
    member_frozen: frozen,
  });

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

  async function onEdit() {
    setEditing(true);
  }

  function onCancel() {
    setEditing(false);
  }

  function onUpdate() {
    // try {
    //   const response = await fetch("/members/" + id, {
    //     method: "PATCH",
    //     headers: { "Content-type": "application/json" },
    //     body:
    //   })
    // } catch (error) {
    // }
  }

  return (
    <div id="memberPage">
      <div
        id="memberInfoContainer"
        style={{
          display: deleted === false && editing === false ? "flex" : "none",
        }}
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

        <Link className="homeLink" to="/">
          Home
        </Link>
      </div>

      <div
        id="memberInfoContainer"
        style={{
          display: editing === true ? "flex" : "none",
        }}
      >
        <button data-testid="cancelEdit" onClick={onCancel}>
          Cancel
        </button>
      </div>

      <button data-testid="edit" onClick={onEdit}>
        edit
      </button>

      <button data-testid="delete" onClick={onDelete}>
        delete
      </button>
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
