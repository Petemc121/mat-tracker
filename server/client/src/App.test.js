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
const App_1 = __importDefault(require("./App"));
const react_1 = require("@testing-library/react");
require("@testing-library/jest-dom");
describe("mat-tracker-client", () => {
    it("should render a header with the words 'Mat Tracker'", () => __awaiter(void 0, void 0, void 0, function* () {
        const { findByText } = (0, react_1.render)(<App_1.default />);
        expect(yield findByText("Mat Tracker")).toBeInTheDocument();
    }));
    it("should contain a button with text 'add member'", () => __awaiter(void 0, void 0, void 0, function* () {
        const { findByText } = (0, react_1.render)(<App_1.default />);
        expect(yield findByText("Add member")).toBeInTheDocument();
    }));
});
//# sourceMappingURL=App.test.js.map