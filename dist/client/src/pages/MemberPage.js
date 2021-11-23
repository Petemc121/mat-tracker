"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const react_router_dom_2 = require("react-router-dom");
const MatTrackerData_1 = require("../MatTrackerDAO/MatTrackerData");
function MemberPage({ setMembers, getMembersFunction = MatTrackerData_1.getMembers, }) {
    const { id, name, phone, belt, joined } = (0, react_router_dom_1.useParams)();
    const [deleted, setDeleted] = (0, react_1.useState)(false);
    function onDelete() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch("/members/" + id, {
                    method: "DELETE",
                    headers: { "Content-type": "application/json" },
                });
                const response2 = yield getMembersFunction({ name: "" });
                setMembers(response2);
                setDeleted(true);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ id: "memberPage" }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ id: "memberInfoContainer", style: { display: deleted === false ? "flex" : "none" } }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "memberInfoElement" }, { children: [(0, jsx_runtime_1.jsx)("h3", { children: "Name:" }, void 0), " ", name] }), void 0), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "memberInfoElement" }, { children: [(0, jsx_runtime_1.jsx)("h3", { children: "Phone number:" }, void 0), " ", phone] }), void 0), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "memberInfoElement" }, { children: [(0, jsx_runtime_1.jsx)("h3", { children: "Belt:" }, void 0), " ", belt] }), void 0), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "memberInfoElement" }, { children: [(0, jsx_runtime_1.jsx)("h3", { children: "Joined at:" }, void 0), " ", joined] }), void 0), (0, jsx_runtime_1.jsx)("button", Object.assign({ "data-testid": "delete", onClick: onDelete }, { children: "delete" }), void 0), (0, jsx_runtime_1.jsx)(react_router_dom_2.Link, Object.assign({ className: "homeLink", to: "/" }, { children: "Home" }), void 0)] }), void 0), (0, jsx_runtime_1.jsxs)("div", Object.assign({ id: "memberDeleted", style: { display: deleted === false ? "none" : "flex" } }, { children: [(0, jsx_runtime_1.jsx)("h2", { children: "Member deleted, navigate back to home" }, void 0), (0, jsx_runtime_1.jsx)(react_router_dom_2.Link, Object.assign({ className: "homeLink", to: "/" }, { children: "Home" }), void 0)] }), void 0)] }), void 0));
}
exports.default = MemberPage;
//# sourceMappingURL=MemberPage.js.map