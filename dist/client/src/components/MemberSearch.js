"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
function MemberSearch({ setMemberSearch }) {
    function onChange(e) {
        setMemberSearch(e.target.value);
        console.log(e.target.value);
    }
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ id: "input" }, { children: (0, jsx_runtime_1.jsx)("input", { onChange: onChange, placeholder: "Search Member", "data-testid": "search" }, void 0) }), void 0));
}
exports.default = MemberSearch;
//# sourceMappingURL=MemberSearch.js.map