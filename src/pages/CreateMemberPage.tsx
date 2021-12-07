import { parse } from "querystring";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getMembers } from "../MatTrackerDAO/MatTrackerData";
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

  useEffect(() => {}, []);

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

      try {
        //proxy is only used in developement so it will be ignored in production builds
        //so if there is no localhost then by default it will use heroku
        //remember this heroku app is just our server serving the build static content and also holding the restful api
        async function addMember() {
          const body = memberInput;
          console.log(memberInput);
          const response = await fetch("/members", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(body),
          });

          const response2 = await getMembersFunction({ name: "" });
          setMembers(response2);
          console.log(response);
          memberInput = {};
          setMemberAdded(true);
        }
        addMember();
      } catch (error) {
        console.log(error);
      }
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
        style={{ display: memberAdded ? "none" : "block" }}
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

      <Link className="homeLink" to="/">
        Home
      </Link>
      <div
        id="memberAddedNotification"
        style={{ display: memberAdded ? "flex" : "none" }}
      >
        <h3 id="memberAddedMessage">Member added! Navigate back to home.</h3>

        <Link className="homeLink" to="/">
          <button className="buttons home">Home</button>
        </Link>
      </div>
    </div>
  );
}
