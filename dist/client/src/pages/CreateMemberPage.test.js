"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CreateMemberPage_1 = __importDefault(require("./CreateMemberPage"));
const react_1 = require("@testing-library/react");
const react_router_dom_1 = require("react-router-dom");
require("@testing-library/jest-dom");
describe("create member page", () => {
    it("should have a form with all required fields", () => {
        const { getByText, getAllByRole, getByRole } = (0, react_1.render)(<react_router_dom_1.BrowserRouter>
        <CreateMemberPage_1.default />
      </react_router_dom_1.BrowserRouter>);
        expect(getByText("Name:")).toBeInTheDocument();
        expect(getByText("Belt:")).toBeInTheDocument();
        expect(getByText("Phone number:")).toBeInTheDocument();
        expect(getByText("Joined:")).toBeInTheDocument();
        expect(getAllByRole("textbox").length).toEqual(2);
        expect(getByRole("combobox")).toBeInTheDocument();
    });
    it("should call handle change function on change of inputs", () => {
        const handleChange = jest.fn();
        const { getByTestId } = (0, react_1.render)(<react_router_dom_1.BrowserRouter>
        <CreateMemberPage_1.default handleChange={handleChange}/>
      </react_router_dom_1.BrowserRouter>);
        const name = getByTestId("name");
        const phone = getByTestId("phone");
        const belt = getByTestId("beltInput");
        const joined = getByTestId("joined");
        react_1.fireEvent.change(name, { target: { value: "hello" } });
        react_1.fireEvent.change(phone, { target: { value: "hello" } });
        react_1.fireEvent.change(belt, { target: { value: "blue" } });
        react_1.fireEvent.change(joined, { target: { value: "" } });
        expect(handleChange).toHaveBeenCalledTimes(4);
    });
    it("should call handle submit function on submit", () => {
        const handleSubmit = jest.fn();
        const { getByTestId } = (0, react_1.render)(<react_router_dom_1.BrowserRouter>
        <CreateMemberPage_1.default handleSubmit={handleSubmit}/>
      </react_router_dom_1.BrowserRouter>);
        const submit = getByTestId("submit");
        react_1.fireEvent.click(submit);
        expect(handleSubmit).toHaveBeenCalledTimes(1);
    });
});
//# sourceMappingURL=CreateMemberPage.test.js.map