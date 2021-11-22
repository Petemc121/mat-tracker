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
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { "data-testid": "header" }, "Mat Tracker"),
        React.createElement("div", { id: "elementContainer" },
            React.createElement(react_router_dom_1.Link, { id: "addMemberLink", to: "CreateMemberPage" },
                React.createElement("button", { id: "addMember" }, "Add member")),
            React.createElement(MemberSearch_1.default, { setMemberSearch: setMemberSearch }),
            React.createElement(Members_1.default, { members: members }))));
}
exports.default = Home;
//# sourceMappingURL=Home.js.map