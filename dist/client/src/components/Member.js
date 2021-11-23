"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Member = ({ member }) => {
    return ((0, jsx_runtime_1.jsxs)("button", Object.assign({ className: "memberButton" }, { children: [(0, jsx_runtime_1.jsx)("h3", { children: member.member_name }, void 0), (0, jsx_runtime_1.jsx)("div", { style: {
                    backgroundColor: member !== undefined
                        ? member.member_belt === null || undefined
                            ? "white"
                            : member.member_belt
                        : "white",
                }, "data-testid": "belt" }, void 0)] }), void 0));
};
exports.default = Member;
//# sourceMappingURL=Member.js.map