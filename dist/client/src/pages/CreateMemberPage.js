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
const MatTrackerData_1 = require("../MatTrackerDAO/MatTrackerData");
function CreateMemberPage({ handleChange, handleSubmit, getMembersFunction = MatTrackerData_1.getMembers, setMembers, }) {
    let [memberInput, setMemberInput] = (0, react_1.useState)({
        member_name: "",
        member_phone: "",
        member_belt: "",
        member_joined_at: "",
    });
    const [memberAdded, setMemberAdded] = (0, react_1.useState)(false);
    const date = new Date();
    const month = date.getMonth() + 1;
    const dateInput = date.getFullYear() + "-" + month + "-" + date.getDate();
    console.log(memberInput);
    (0, react_1.useEffect)(() => {
        function addMember() {
            return __awaiter(this, void 0, void 0, function* () {
                if (Object.values(memberInput).every((key) => key !== "")) {
                    try {
                        //proxy is only used in developement so it will be ignored in production builds
                        //so if there is no localhost then by default it will use heroku
                        //remember this heroku app is just our server serving the build static content and also holding the restful api
                        const body = memberInput;
                        const response = yield fetch("/members", {
                            method: "POST",
                            headers: { "Content-type": "application/json" },
                            body: JSON.stringify(body),
                        });
                        const response2 = yield getMembersFunction({ name: "" });
                        setMembers(response2);
                        console.log(response);
                        memberInput = {};
                        setMemberAdded(true);
                    }
                    catch (error) {
                        console.log(error);
                    }
                }
            });
        }
        addMember();
    }, [memberInput]);
    if (handleSubmit === undefined) {
        handleSubmit = (e) => {
            e.preventDefault();
            if (memberInput.member_name === "") {
                alert("please enter your name");
                return;
            }
            if (memberInput.member_phone === "") {
                alert("please enter your phone number");
                return;
            }
            else {
                if (isNaN(parseInt(memberInput.member_phone))) {
                    alert("please only enter numbers in phone field");
                    return;
                }
                if (memberInput.member_phone.length < 10 ||
                    memberInput.member_phone.length > 11) {
                    alert("Your phone number is not valid");
                    return;
                }
            }
            if (memberInput.member_belt === "") {
                setMemberInput((values) => (Object.assign(Object.assign({}, values), { member_belt: "white" })));
            }
            if (memberInput.member_joined_at === "") {
                setMemberInput((values) => (Object.assign(Object.assign({}, values), { member_joined_at: dateInput })));
            }
            console.log(memberInput);
        };
    }
    if (handleChange === undefined) {
        handleChange = (event) => {
            const name = event.target.name;
            const value = event.target.value;
            setMemberInput((values) => (Object.assign(Object.assign({}, values), { [name]: value })));
        };
    }
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ id: "memberInputFormContainer" }, { children: [(0, jsx_runtime_1.jsxs)("form", Object.assign({ id: "memberInputForm", style: { display: memberAdded ? "none" : "block" } }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "memberInputElement" }, { children: ["Name:", (0, jsx_runtime_1.jsx)("input", { onChange: handleChange, name: "member_name", className: "memberInput", "data-testid": "name" }, void 0)] }), void 0), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "memberInputElement" }, { children: ["Phone number:", (0, jsx_runtime_1.jsx)("input", { onChange: handleChange, name: "member_phone", className: "memberInput", "data-testid": "phone" }, void 0)] }), void 0), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "memberInputElement" }, { children: ["Belt:", (0, jsx_runtime_1.jsxs)("select", Object.assign({ onChange: handleChange, name: "member_belt", "data-testid": "beltInput", className: "memberInput" }, { children: [(0, jsx_runtime_1.jsx)("option", Object.assign({ value: "white" }, { children: "white" }), void 0), (0, jsx_runtime_1.jsx)("option", Object.assign({ value: "blue" }, { children: "blue" }), void 0), (0, jsx_runtime_1.jsx)("option", Object.assign({ value: "purple" }, { children: "purple" }), void 0), (0, jsx_runtime_1.jsx)("option", Object.assign({ value: "brown" }, { children: "brown" }), void 0), (0, jsx_runtime_1.jsx)("option", Object.assign({ value: "black" }, { children: "black" }), void 0)] }), void 0)] }), void 0), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "memberInputElement" }, { children: ["Joined:", (0, jsx_runtime_1.jsx)("input", { name: "member_joined_at", className: "memberInput", type: "date", "data-testid": "joined", onChange: handleChange, defaultValue: dateInput }, void 0)] }), void 0), (0, jsx_runtime_1.jsx)("input", { "data-testid": "submit", onClick: handleSubmit, type: "submit" }, void 0)] }), void 0), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ className: "homeLink", to: "/" }, { children: "Home" }), void 0), (0, jsx_runtime_1.jsxs)("div", Object.assign({ id: "memberAddedNotification", style: { display: memberAdded ? "flex" : "none" } }, { children: [(0, jsx_runtime_1.jsx)("h3", Object.assign({ id: "memberAddedMessage" }, { children: "Member added! Navigate back to home." }), void 0), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ className: "homeLink", to: "/" }, { children: "Home" }), void 0)] }), void 0)] }), void 0));
}
exports.default = CreateMemberPage;
//# sourceMappingURL=CreateMemberPage.js.map