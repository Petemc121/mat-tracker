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
const MemberSearch_1 = __importDefault(require("./MemberSearch"));
const react_1 = require("@testing-library/react");
require("@testing-library/jest-dom");
describe("MemberSearch", () => {
    it("Should contain an input with test id 'search'", () => __awaiter(void 0, void 0, void 0, function* () {
        const setMemberSearch = jest.fn();
        yield (0, react_1.act)(() => __awaiter(void 0, void 0, void 0, function* () {
            const { getByTestId } = (0, react_1.render)(React.createElement(MemberSearch_1.default, { setMemberSearch: setMemberSearch }));
            expect(getByTestId("search")).toBeInTheDocument();
        }));
    }));
});
//# sourceMappingURL=MemberSearch.test.js.map