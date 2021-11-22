"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Member = ({ member }) => {
    return (<button className="memberButton">
      <h3>{member.member_name}</h3>
      <div style={{
            backgroundColor: member !== undefined
                ? member.member_belt === null || undefined
                    ? "white"
                    : member.member_belt
                : "white",
        }} data-testid="belt"></div>
    </button>);
};
exports.default = Member;
//# sourceMappingURL=Member.js.map