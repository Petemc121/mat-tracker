"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const MatTrackerData_1 = require("../MatTrackerDAO/MatTrackerData");
function CreateMemberPage({ handleChange, handleSubmit, getMembersFunction = MatTrackerData_1.getMembers, setMembers, }) {
    let [memberInput, setMemberInput] = (0, react_1.useState)({
        member_name: "",
        member_phone: "",
        member_belt: "",
        member_joined_at: "",
    });
    const [memberAdded, setMemberAdded] = (0, react_1.useState)(false);
    const date = new Date();
    const month = date.getMonth() + 1;
    const dateInput = date.getFullYear() + "-" + month + "-" + date.getDate();
    console.log(memberInput);
    (0, react_1.useEffect)(() => {
        function addMember() {
            return __awaiter(this, void 0, void 0, function* () {
                if (Object.values(memberInput).every((key) => key !== "")) {
                    try {
                        const body = memberInput;
                        const response = yield fetch("/members", {
                            method: "POST",
                            headers: { "Content-type": "application/json" },
                            body: JSON.stringify(body),
                        });
                        const response2 = yield getMembersFunction({ name: "" });
                        setMembers(response2);
                        console.log(response);
                        memberInput = {};
                        setMemberAdded(true);
                    }
                    catch (error) {
                        console.log(error);
                    }
                }
            });
        }
        addMember();
    }, [memberInput]);
    if (handleSubmit === undefined) {
        handleSubmit = (e) => {
            e.preventDefault();
            if (memberInput.member_name === "") {
                alert("please enter your name");
                return;
            }
            if (memberInput.member_phone === "") {
                alert("please enter your phone number");
                return;
            }
            else {
                if (isNaN(parseInt(memberInput.member_phone))) {
                    alert("please only enter numbers in phone field");
                    return;
                }
                if (memberInput.member_phone.length < 10 ||
                    memberInput.member_phone.length > 11) {
                    alert("Your phone number is not valid");
                    return;
                }
            }
            if (memberInput.member_belt === "") {
                setMemberInput((values) => (Object.assign(Object.assign({}, values), { member_belt: "white" })));
            }
            if (memberInput.member_joined_at === "") {
                setMemberInput((values) => (Object.assign(Object.assign({}, values), { member_joined_at: dateInput })));
            }
            console.log(memberInput);
        };
    }
    if (handleChange === undefined) {
        handleChange = (event) => {
            const name = event.target.name;
            const value = event.target.value;
            setMemberInput((values) => (Object.assign(Object.assign({}, values), { [name]: value })));
        };
    }
    return (<div id="memberInputFormContainer">
      <form id="memberInputForm" style={{ display: memberAdded ? "none" : "block" }}>
        <div className="memberInputElement">
          Name:
          <input onChange={handleChange} name="member_name" className="memberInput" data-testid="name"></input>
        </div>
        <div className="memberInputElement">
          Phone number:
          <input onChange={handleChange} name="member_phone" className="memberInput" data-testid="phone"></input>
        </div>
        <div className="memberInputElement">
          Belt:
          <select onChange={handleChange} name="member_belt" data-testid="beltInput" className="memberInput">
            <option value="white">white</option>
            <option value="blue">blue</option>
            <option value="purple">purple</option>
            <option value="brown">brown</option>
            <option value="black">black</option>
          </select>
        </div>
        <div className="memberInputElement">
          Joined:
          <input name="member_joined_at" className="memberInput" type="date" data-testid="joined" onChange={handleChange} defaultValue={dateInput}/>
        </div>
        <input data-testid="submit" onClick={handleSubmit} type="submit"/>
      </form>

      <react_router_dom_1.Link className="homeLink" to="/">
        Home
      </react_router_dom_1.Link>
      <div id="memberAddedNotification" style={{ display: memberAdded ? "flex" : "none" }}>
        <h3 id="memberAddedMessage">Member added! Navigate back to home.</h3>

        <react_router_dom_1.Link className="homeLink" to="/">
          Home
        </react_router_dom_1.Link>
      </div>
    </div>);
}
exports.default = CreateMemberPage;
//# sourceMappingURL=CreateMemberPage.js.map