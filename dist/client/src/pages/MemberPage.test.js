"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const MemberPage_1 = __importDefault(require("./MemberPage"));
const react_router_dom_1 = require("react-router-dom");
const react_1 = require("@testing-library/react");
require("@testing-library/jest-dom");
describe("Member page", () => {
    it("should have a form with all required fields", () => {
        const { getByText } = (0, react_1.render)((0, jsx_runtime_1.jsx)(react_router_dom_1.BrowserRouter, { children: (0, jsx_runtime_1.jsx)(MemberPage_1.default, {}, void 0) }, void 0));
        expect(getByText("Name:")).toBeInTheDocument();
        expect(getByText("Belt:")).toBeInTheDocument();
        expect(getByText("Phone number:")).toBeInTheDocument();
        expect(getByText("Joined at:")).toBeInTheDocument();
    });
    it("should render deleted member notification on member delete", () => {
        const { getByTestId, getByText } = (0, react_1.render)((0, jsx_runtime_1.jsx)(react_router_dom_1.BrowserRouter, { children: (0, jsx_runtime_1.jsx)(MemberPage_1.default, {}, void 0) }, void 0));
        react_1.fireEvent.click(getByTestId("delete"));
        expect(getByText("Member deleted, navigate back to home")).toBeInTheDocument();
    });
});
//# sourceMappingURL=MemberPage.test.js.map