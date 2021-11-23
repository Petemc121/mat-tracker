"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Member_1 = __importDefault(require("./Member"));
const react_router_dom_1 = require("react-router-dom");
function Members(members) {
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ id: "membersContain" }, { children: members.members !== undefined &&
            members.members.map((member) => {
                return ((0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ className: "memberLink", to: "member/" +
                        member.member_id +
                        "/" +
                        member.member_name +
                        "/" +
                        member.member_belt +
                        "/" +
                        member.member_phone +
                        "/" +
                        member.member_joined_at }, { children: (0, jsx_runtime_1.jsx)(Member_1.default, { member: member }, member.member_id) }), member.member_id + "_link"));
            }) }), void 0));
}
exports.default = Members;
//# sourceMappingURL=Members.js.map