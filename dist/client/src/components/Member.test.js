"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Member_1 = __importDefault(require("./Member"));
const react_1 = require("@testing-library/react");
require("@testing-library/jest-dom");
describe("member", () => {
    const member = {
        member_id: 3,
        member_name: "bobeth",
        member_image: null,
        member_phone: null,
        member_belt: "blue",
        member_joined_at: null,
        member_paid: null,
        member_frozen: null,
    };
    it("should render a button for the member", () => {
        const { getByRole } = (0, react_1.render)(React.createElement(Member_1.default, { member: member }));
        expect(getByRole("button")).toBeInTheDocument();
    });
    it("should render a div with test-id 'belt'", () => {
        const { getByTestId } = (0, react_1.render)(React.createElement(Member_1.default, { member: member }));
        expect(getByTestId("belt")).toBeInTheDocument();
    });
});
//# sourceMappingURL=Member.test.js.map