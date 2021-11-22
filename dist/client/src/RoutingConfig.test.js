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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const RoutingConfig_1 = __importDefault(require("./RoutingConfig"));
const react_1 = require("@testing-library/react");
require("@testing-library/jest-dom");
describe("Routing config", () => {
    it("should call get members with target value of input", () => __awaiter(void 0, void 0, void 0, function* () {
        const getMembers = jest.fn();
        const { getByTestId } = (0, react_1.render)(React.createElement(RoutingConfig_1.default, { getMembersFunction: getMembers }));
        yield (0, react_1.waitFor)(() => {
            const input = getByTestId("search");
            react_1.fireEvent.change(input, { target: { value: "j" } });
            expect(getMembers).toHaveBeenCalledWith({ name: "j" });
        });
    }));
    it("should render a list of members upon retrieving data", () => __awaiter(void 0, void 0, void 0, function* () {
        const getMembers = jest.fn(() => __awaiter(void 0, void 0, void 0, function* () {
            return [
                {
                    member_id: 57,
                    member_name: "bob",
                    member_image: null,
                    member_phone: null,
                    member_belt: "white",
                    member_joined_at: null,
                    member_paid: null,
                    member_frozen: null,
                },
                {
                    member_id: 58,
                    member_name: "james",
                    member_image: null,
                    member_phone: null,
                    member_belt: "white",
                    member_joined_at: null,
                    member_paid: null,
                    member_frozen: null,
                },
            ];
        }));
        yield (0, react_1.act)(() => __awaiter(void 0, void 0, void 0, function* () {
            const { findByText } = (0, react_1.render)(React.createElement(RoutingConfig_1.default, { getMembersFunction: getMembers }));
            expect(yield findByText("bob")).toBeInTheDocument();
            expect(yield findByText("james")).toBeInTheDocument();
        }));
    }));
});
//# sourceMappingURL=RoutingConfig.test.js.map