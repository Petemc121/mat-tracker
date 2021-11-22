"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function MemberSearch({ setMemberSearch }) {
    function onChange(e) {
        setMemberSearch(e.target.value);
        console.log(e.target.value);
    }
    return (react_1.default.createElement("div", { id: "input" },
        react_1.default.createElement("input", { onChange: onChange, placeholder: "Search Member", "data-testid": "search" })));
}
exports.default = MemberSearch;
//# sourceMappingURL=MemberSearch.js.map