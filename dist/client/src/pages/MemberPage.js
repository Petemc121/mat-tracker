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
    return (<div id="memberPage">
      <div id="memberInfoContainer" style={{ display: deleted === false ? "flex" : "none" }}>
        <div className="memberInfoElement">
          <h3>Name:</h3> {name}
        </div>
        <div className="memberInfoElement">
          <h3>Phone number:</h3> {phone}
        </div>
        <div className="memberInfoElement">
          <h3>Belt:</h3> {belt}
        </div>
        <div className="memberInfoElement">
          <h3>Joined at:</h3> {joined}
        </div>
        <button data-testid="delete" onClick={onDelete}>
          delete
        </button>
        <react_router_dom_2.Link className="homeLink" to="/">
          Home
        </react_router_dom_2.Link>
      </div>
      <div id="memberDeleted" style={{ display: deleted === false ? "none" : "flex" }}>
        <h2>Member deleted, navigate back to home</h2>
        <react_router_dom_2.Link className="homeLink" to="/">
          Home
        </react_router_dom_2.Link>
      </div>
    </div>);
}
exports.default = MemberPage;
//# sourceMappingURL=MemberPage.js.map