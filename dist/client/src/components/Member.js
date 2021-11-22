"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Member = ({ member }) => {
    return (react_1.default.createElement("button", { className: "memberButton" },
        react_1.default.createElement("h3", null, member.member_name),
        react_1.default.createElement("div", { style: {
                backgroundColor: member !== undefined
                    ? member.member_belt === null || undefined
                        ? "white"
                        : member.member_belt
                    : "white",
            }, "data-testid": "belt" })));
};
exports.default = Member;
//# sourceMappingURL=Member.js.map