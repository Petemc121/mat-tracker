"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
require("./App.css");
const Members_1 = __importDefault(require("./components/Members"));
const MemberSearch_1 = __importDefault(require("./components/MemberSearch"));
function Home({ members, setMemberSearch }) {
    return (<>
      <div data-testid="header">Mat Tracker</div>
      <div id="elementContainer">
        <react_router_dom_1.Link id="addMemberLink" to="CreateMemberPage">
          <button id="addMember">Add member</button>
        </react_router_dom_1.Link>
        <MemberSearch_1.default setMemberSearch={setMemberSearch}/>
        <Members_1.default members={members}/>
      </div>
    </>);
}
exports.default = Home;
//# sourceMappingURL=Home.js.map