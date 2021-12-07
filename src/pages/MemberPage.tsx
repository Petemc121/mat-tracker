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
  const [update, setUpdate] = useState<any>({
    member_name: name,
    member_phone: phone,
    member_belt: belt,
    member_joined_at: joined,
    member_paid: paid,
    member_frozen: frozen,
  });

  async function onDelete() {
    const c = window.confirm("Are you sure you want to delete this member?");

    if (c === true) {
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
  }

  function onEdit() {
    setEditing(true);
  }

  function onCancel() {
    setEditing(false);
  }

  function handleChange(event: any) {
    const name = event.target.name;
    const value = event.target.value;
    setUpdate((values: {}) => ({ ...values, [name]: value }));
  }

  // member/:id/:name/:belt/:phone/:joined/:paid/:frozen

  async function handleUpdate(e: any) {
    e.preventDefault();
    const body = update;
    try {
      const response = await fetch("/members/" + id, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(body),
      });

      const response2 = await getMembersFunction({ name: "" });
      setMembers(response2);
      console.log(body);
    } catch (error) {
      console.log(error);
    }
    setUpdate(body);
    setEditing(false);
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
          <h3>Name:</h3> {update.member_name}
        </div>
        <div className="memberInfoElement">
          <h3>Phone number:</h3> {update.member_phone}
        </div>
        <div className="memberInfoElement">
          <h3>Belt:</h3> {update.member_belt}
        </div>
        <div className="memberInfoElement">
          <h3>Joined at:</h3> {update.member_joined_at}
        </div>
        <div className="memberInfoElement">
          <h3>Paid:</h3> {update.member_paid}
        </div>
        <div className="memberInfoElement">
          <h3>Frozen: </h3> {update.member_frozen}
        </div>

        <button
          style={{ display: editing || deleted ? "none" : "block" }}
          data-testid="edit"
          className="buttons"
          onClick={onEdit}
        >
          edit
        </button>

        <button
          data-testid="delete"
          id="delete"
          style={{ display: editing || deleted ? "none" : "block" }}
          className="buttons"
          onClick={onDelete}
        >
          delete
        </button>
      </div>

      <div className="center">
        <Link
          style={{ display: editing || deleted ? "none" : "block" }}
          className="homeLink"
          to="/"
        >
          <button className="buttons home">Home</button>
        </Link>
      </div>
      <div
        id="memberInfoContainer"
        style={{
          display: editing === true ? "flex" : "none",
        }}
      >
        <form id="memberUpdateForm">
          <div className="memberUpdateElement">
            Name:
            <input
              onChange={handleChange}
              name="member_name"
              className="memberInput"
              data-testid="name"
            ></input>
          </div>
          <div className="memberUpdateElement">
            Phone number:
            <input
              onChange={handleChange}
              name="member_phone"
              className="memberInput"
              data-testid="phone"
            ></input>
          </div>
          <div className="memberUpdateElement">
            Belt:
            <select
              onChange={handleChange}
              name="member_belt"
              data-testid="beltInput"
              className="memberInput"
            >
              <option value="white">white</option>
              <option value="blue">blue</option>
              <option value="purple">purple</option>
              <option value="brown">brown</option>
              <option value="black">black</option>
            </select>
          </div>
          <div className="memberUpdateElement">
            Joined:
            <input
              name="member_joined_at"
              className="memberInput"
              type="date"
              data-testid="joined"
              onChange={handleChange}
              defaultValue={joined}
            />
          </div>

          <div className="memberUpdateElement">
            Paid:
            <select
              data-testid="paid"
              name="member_paid"
              onChange={handleChange}
              defaultValue={paid}
            >
              <option value="no" selected>
                Select
              </option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <div className="memberUpdateElement">
            Frozen:
            <select
              data-testid="frozen"
              name="member_frozen"
              onChange={handleChange}
              defaultValue={frozen}
            >
              <option value="no" selected>
                Select
              </option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <input
            data-testid="submit"
            id="updateSubmit"
            onClick={handleUpdate}
            type="submit"
          />
          <button data-testid="cancel" type="button" onClick={onCancel}>
            Cancel
          </button>
        </form>
      </div>
      <div id="memberDeleted">
        <div
          id="memberDeletedInner"
          style={{ display: deleted === false ? "none" : "flex" }}
        >
          <h2>Member deleted, navigate back to home</h2>
          <Link className="homeLink" to="/">
            <button className="buttons home">Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
