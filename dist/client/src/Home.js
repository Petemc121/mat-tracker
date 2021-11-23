"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
require("./App.css");
const Members_1 = __importDefault(require("./components/Members"));
const MemberSearch_1 = __importDefault(require("./components/MemberSearch"));
function Home({ members, setMemberSearch }) {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ "data-testid": "header" }, { children: "Mat Tracker" }), void 0), (0, jsx_runtime_1.jsxs)("div", Object.assign({ id: "elementContainer" }, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ id: "addMemberLink", to: "CreateMemberPage" }, { children: (0, jsx_runtime_1.jsx)("button", Object.assign({ id: "addMember" }, { children: "Add member" }), void 0) }), void 0), (0, jsx_runtime_1.jsx)(MemberSearch_1.default, { setMemberSearch: setMemberSearch }, void 0), (0, jsx_runtime_1.jsx)(Members_1.default, { members: members }, void 0)] }), void 0)] }, void 0));
}
exports.default = Home;
//# sourceMappingURL=Home.js.map