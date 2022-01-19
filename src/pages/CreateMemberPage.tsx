import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getMembers, addMember } from "../MatTrackerDAO/MatTrackerData";
import {
  getMembersResponse,
  getMembersInput,
} from "../MatTrackerDAO/MatTrackerDataTypes";

type CreateMemberPageInput = {
  handleChange?: (event: any) => void;
  handleSubmit?: (event: any) => void;
  getMembersFunction?: ({
    name,
  }: getMembersInput) => Promise<getMembersResponse[]>;
  setMembers?: any;
};

export default function CreateMemberPage({
  handleChange,
  handleSubmit,
  getMembersFunction = getMembers,
  setMembers,
}: CreateMemberPageInput) {
  const date = new Date();
  const month = date.getMonth() + 1;
  const dateInput = date.getFullYear() + "-" + month + "-" + date.getDate();
  let [memberInput, setMemberInput] = useState<any>({
    member_name: "",
    member_phone: "",
    member_belt: "white",
    member_joined_at: dateInput,
    member_paid: "No",
    member_frozen: "No",
  });
  const [memberAdded, setMemberAdded] = useState(false);

  useEffect(() => {
    const updateMembers = async () => {
      await addMember({ memberInput: memberInput });
      console.log(memberInput);
      const newMembers = await getMembersFunction({ name: "" });
      console.log(newMembers);
      setMembers(newMembers);
    };

    if (memberAdded === true) {
      updateMembers();
    } else {
    }
  }, [memberAdded, getMembersFunction, setMembers, memberInput]);

  if (handleSubmit === undefined) {
    handleSubmit = (e: any) => {
      e.preventDefault();

      if (memberInput.member_name === "") {
        alert("please enter your name");
        return;
      }

      if (memberInput.member_phone === "") {
        alert("please enter your phone number");
        return;
      } else {
        if (isNaN(parseInt(memberInput.member_phone))) {
          alert("please only enter numbers in phone field");
          return;
        }

        if (
          memberInput.member_phone.length < 10 ||
          memberInput.member_phone.length > 11
        ) {
          alert("Your phone number is not valid");
          return;
        }
      }

      setMemberAdded(true);
    };
  }

  if (handleChange === undefined) {
    handleChange = (event: any) => {
      const name = event.target.name;
      const value = event.target.value;
      setMemberInput((values: {}) => ({ ...values, [name]: value }));
    };
  }

  return (
    <div id="memberInputFormContainer">
      <form
        id="memberInputForm"
        style={{ display: memberAdded ? "none" : "flex" }}
      >
        <div className="memberInputElement">
          Name:
          <input
            onChange={handleChange}
            name="member_name"
            className="memberInput"
            data-testid="name"
          ></input>
        </div>
        <div className="memberInputElement">
          Phone number:
          <input
            onChange={handleChange}
            name="member_phone"
            className="memberInput"
            data-testid="phone"
          ></input>
        </div>
        <div className="memberInputElement">
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
        <div className="memberInputElement">
          Joined:
          <input
            name="member_joined_at"
            className="memberInput"
            type="date"
            data-testid="joined"
            onChange={handleChange}
            defaultValue={dateInput}
          />
        </div>
        <input data-testid="submit" onClick={handleSubmit} type="submit" />
      </form>

      <Link id="createMemberCancel" className="homeLink" to="/">
        <button data-testid="cancel" className="cancel">
          Cancel
        </button>
      </Link>
      <div
        id="memberAddedNotification"
        style={{ display: memberAdded ? "flex" : "none" }}
      >
        <h3 id="memberAddedMessage">Member added! Navigate back to home.</h3>

        <Link className="homeLink" to="/">
          <button className="buttons cancel home">Home</button>
        </Link>
      </div>
    </div>
  );
}
