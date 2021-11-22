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
exports.getMembers = void 0;
function getMembers({ name, }) {
    return __awaiter(this, void 0, void 0, function* () {
        const initMembers = yield fetch("/members");
        const initMembersJSON = (yield initMembers.json());
        if (name === "") {
            return initMembersJSON;
        }
        const members = initMembersJSON.filter((member) => member.member_name !== null &&
            member.member_name.toUpperCase().includes(name.toUpperCase()));
        return members;
    });
}
exports.getMembers = getMembers;
//# sourceMappingURL=MatTrackerData.js.map