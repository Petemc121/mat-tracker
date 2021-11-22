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
    return (<div id="input">
      <input onChange={onChange} placeholder="Search Member" data-testid="search"></input>
    </div>);
}
exports.default = MemberSearch;
//# sourceMappingURL=MemberSearch.js.map