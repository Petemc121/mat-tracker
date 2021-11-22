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
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const MatTrackerData_1 = require("./MatTrackerDAO/MatTrackerData");
const CreateMemberPage_1 = __importDefault(require("./pages/CreateMemberPage"));
const MemberPage_1 = __importDefault(require("./pages/MemberPage"));
const Home_1 = __importDefault(require("./Home"));
function RoutingConfig({ getMembersFunction = MatTrackerData_1.getMembers, }) {
    const [members, setMembers] = (0, react_1.useState)();
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [memberSearch, setMemberSearch] = (0, react_1.useState)("");
    (0, react_1.useEffect)(() => {
        function waitForMembers() {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const memberArray = yield getMembersFunction({
                        name: memberSearch,
                    });
                    setMembers(memberArray);
                    setLoading(false);
                }
                catch (error) {
                    console.log(error);
                    setLoading(true);
                }
            });
        }
        waitForMembers();
    }, [getMembersFunction, memberSearch]);
    if (loading) {
        return React.createElement("div", null, "...loading");
    }
    return (React.createElement(react_router_dom_1.BrowserRouter, null,
        React.createElement(react_router_dom_1.Routes, null,
            React.createElement(react_router_dom_1.Route, { path: "/", element: React.createElement(Home_1.default, { members: members, setMemberSearch: setMemberSearch }) }),
            React.createElement(react_router_dom_1.Route, { path: "CreateMemberPage", element: React.createElement(CreateMemberPage_1.default, { setMembers: setMembers }) }),
            React.createElement(react_router_dom_1.Route, { path: "member/:id/:name/:belt/:phone/:joined", element: React.createElement(MemberPage_1.default, { setMembers: setMembers, getMembersFunction: MatTrackerData_1.getMembers }) }))));
}
exports.default = RoutingConfig;
//# sourceMappingURL=RoutingConfig.js.map