"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Member_1 = __importDefault(require("./Member"));
const react_router_dom_1 = require("react-router-dom");
function Members(members) {
    return (React.createElement("div", { id: "membersContain" }, members.members !== undefined &&
        members.members.map((member) => {
            return (React.createElement(react_router_dom_1.Link, { className: "memberLink", key: member.member_id + "_link", to: "member/" +
                    member.member_id +
                    "/" +
                    member.member_name +
                    "/" +
                    member.member_belt +
                    "/" +
                    member.member_phone +
                    "/" +
                    member.member_joined_at },
                React.createElement(Member_1.default, { key: member.member_id, member: member })));
        })));
}
exports.default = Members;
//# sourceMappingURL=Members.js.map